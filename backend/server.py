from fastapi import FastAPI, APIRouter, HTTPException, status, Request, File, UploadFile
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, ValidationError
from typing import List
import uuid
from datetime import datetime, timezone
from models import ContactFormSubmission, ContactFormCreate, BlogPost, BlogPostCreate
from email_service import email_service


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging first so logger is available in routes
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection (one cluster, multiple databases)
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
_db_name = os.environ.get('DB_NAME', 'apexnexon')
# Separate databases: contact form, blog, and main (status/other)
db = client[_db_name]  # main database (status_checks, etc.)
db_contact = client[os.environ.get('DB_CONTACT', _db_name)]  # contact form submissions
db_blog = client[os.environ.get('DB_BLOG', _db_name)]  # blog posts (for future API)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactFormSubmission, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(form_data: ContactFormCreate):
    """
    Handle contact form submission
    - Store in database
    - Send email notification
    """
    try:
        # Create contact submission object
        contact_submission = ContactFormSubmission(
            name=form_data.name,
            email=form_data.email,
            company=form_data.company,
            phone=form_data.phone,
            message=form_data.message
        )
        
        # Store in database
        submission_dict = contact_submission.model_dump()
        submission_dict['created_at'] = submission_dict['created_at'].isoformat()
        await db_contact.contact_submissions.insert_one(submission_dict)
        
        # Send email notification (don't fail request if email fails)
        try:
            email_service.send_contact_form_notification(submission_dict)
        except Exception as email_err:
            logger.warning(f"Email notification skipped: {email_err}")
        
        logger.info(f"Contact form submitted successfully by {form_data.email}")
        
        return contact_submission
        
    except HTTPException:
        raise
    except ValidationError as e:
        logger.warning(f"Validation error: {e}")
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=e.errors())
    except Exception as e:
        logger.exception("Contact form error")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to process contact form submission"
        )

# ----- Blog API -----
BLOG_EDIT_KEY = os.environ.get("BLOG_EDIT_KEY", "").strip()
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)
MAX_IMAGE_SIZE = 2 * 1024 * 1024  # 2MB
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/gif", "image/webp"}


def _require_blog_edit_key(req: Request):
    """If BLOG_EDIT_KEY is set, require X-Blog-Edit-Key header to match. Raise 401 otherwise."""
    if not BLOG_EDIT_KEY:
        return
    key = req.headers.get("X-Blog-Edit-Key", "").strip()
    if key != BLOG_EDIT_KEY:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or missing edit key")


@api_router.post("/blog/verify")
async def verify_blog_edit_key(body: dict):
    """Verify the blog edit key. Returns { success: true } if key matches BLOG_EDIT_KEY."""
    if not BLOG_EDIT_KEY:
        return {"success": True, "message": "No key configured"}
    key = (body.get("key") or "").strip()
    if key != BLOG_EDIT_KEY:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid key")
    return {"success": True}


@api_router.post("/blog", status_code=status.HTTP_201_CREATED)
async def create_blog_post(request: Request, data: BlogPostCreate):
    """Create a new blog post. Requires X-Blog-Edit-Key header if BLOG_EDIT_KEY is set."""
    _require_blog_edit_key(request)
    try:
        doc = data.model_dump()
        doc["date"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        doc["created_at"] = datetime.now(timezone.utc).isoformat()
        if not doc.get("image"):
            doc["image"] = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
        result = await db_blog.blog_posts.insert_one(doc)
        doc["id"] = str(result.inserted_id)
        doc.pop("_id", None)
        doc["readTime"] = doc.get("read_time") or "5 min read"
        return doc
    except Exception as e:
        logger.exception("Blog post create error")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create blog post")


@api_router.get("/blog", response_model=List[dict])
async def list_blog_posts():
    """List all blog posts, newest first."""
    try:
        cursor = db_blog.blog_posts.find({}).sort("created_at", -1).limit(100)
        posts = await cursor.to_list(length=100)
        for p in posts:
            p["id"] = str(p.pop("_id", ""))
            p["readTime"] = p.get("read_time") or p.get("readTime") or "5 min read"
        return posts
    except Exception as e:
        logger.exception("Blog list error")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to list blog posts")


@api_router.get("/blog/{post_id}")
async def get_blog_post(post_id: str):
    """Get a single blog post by id."""
    try:
        from bson import ObjectId
        doc = await db_blog.blog_posts.find_one({"_id": ObjectId(post_id)}, {"_id": 0})
        if not doc:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found")
        doc["id"] = post_id
        return doc
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Blog get error")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to get blog post")


@api_router.delete("/blog/{post_id}")
async def delete_blog_post(request: Request, post_id: str):
    """Delete a blog post. Requires edit key if BLOG_EDIT_KEY is set."""
    _require_blog_edit_key(request)
    try:
        from bson import ObjectId
        result = await db_blog.blog_posts.delete_one({"_id": ObjectId(post_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found")
        return {"success": True}
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Blog delete error")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to delete post")


@api_router.post("/blog/upload-image")
async def upload_blog_image(request: Request, file: UploadFile = File(...)):
    """Upload an image for a blog post. Max 2MB. Requires edit key if BLOG_EDIT_KEY is set."""
    _require_blog_edit_key(request)
    if file.content_type and file.content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Only JPEG, PNG, GIF, WebP allowed")
    contents = await file.read()
    if len(contents) > MAX_IMAGE_SIZE:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Image must be under 2MB")
    ext = Path(file.filename or "img").suffix.lower() or ".jpg"
    if ext not in (".jpg", ".jpeg", ".png", ".gif", ".webp"):
        ext = ".jpg"
    filename = f"{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}_{uuid.uuid4().hex[:8]}{ext}"
    path = UPLOAD_DIR / filename
    path.write_bytes(contents)
    base = str(request.base_url).rstrip("/")
    url = f"{base}/uploads/{filename}"
    return {"url": url}


@api_router.get("/contact", response_model=List[ContactFormSubmission])
async def get_contact_submissions():
    """Get all contact form submissions (admin endpoint)"""
    try:
        submissions = await db_contact.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for submission in submissions:
            if isinstance(submission['created_at'], str):
                submission['created_at'] = datetime.fromisoformat(submission['created_at'])
        
        return submissions
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contact submissions"
        )

# Include the router in the main app
app.include_router(api_router)

# Serve uploaded images
app.mount("/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()