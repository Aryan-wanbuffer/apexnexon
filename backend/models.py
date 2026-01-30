from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class ContactFormSubmission(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)
    message: str = Field(..., min_length=10, max_length=2000)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str


class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    excerpt: str = Field(..., min_length=1, max_length=500)
    author: str = Field(default="ApexNexon Team", max_length=100)
    category: str = Field(default="Insights", max_length=80)
    read_time: str = Field(default="5 min read", max_length=20)
    image: Optional[str] = Field(None, max_length=500)
    content: Optional[str] = Field(None, max_length=50000)


class BlogPost(BlogPostCreate):
    id: Optional[str] = None
    date: Optional[str] = None
    created_at: Optional[datetime] = None
