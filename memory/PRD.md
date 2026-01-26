# ApexNexon Website - Product Requirements Document

## Project Overview
**Product**: ApexNexon Enterprise Website  
**Type**: Multi-page Marketing & Lead Generation Website  
**Tech Stack**: React, FastAPI, MongoDB, Spline 3D, Tailwind CSS  
**Status**: Phase 1 Complete - Frontend with Mock Data  
**Last Updated**: January 26, 2025

---

## Original Problem Statement
Create a modern, enterprise-grade, multi-page website for ApexNexon - an AI, Automation, and Software Development company. The website should showcase services, case studies, and generate leads through contact forms.

### Brand Identity
- **Company**: ApexNexon
- **Tagline**: "Where Intelligence Meets Automation"
- **Primary Color**: #00FFD1 (Cyan-Green)
- **Theme**: Dark, futuristic, premium enterprise aesthetic
- **Target Audience**: US & global SMBs, startups, enterprises

---

## User Personas

### Primary Persona: Tech Decision Maker
- **Role**: CTO, VP Engineering, Technical Director
- **Goals**: Find reliable technology partner for AI/automation projects
- **Pain Points**: Need proven expertise, clear ROI, enterprise-grade solutions
- **Journey**: Browse services → Review case studies → Submit contact form

### Secondary Persona: Business Owner
- **Role**: CEO, Founder, Business Operations Manager
- **Goals**: Automate operations, reduce costs, scale business
- **Pain Points**: Manual processes, high operational costs, no technical expertise
- **Journey**: Browse industries → See results → Book consultation

---

## Core Requirements (Static)

### Design Requirements
✅ Dark theme with glassmorphism effects  
✅ Spline 3D interactive animation on hero section  
✅ #00FFD1 brand color with black backgrounds  
✅ Sharp-edged buttons (0px border-radius)  
✅ Premium SaaS aesthetic (Stripe/OpenAI/Vercel style)  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Smooth animations and micro-interactions  
✅ SEO-optimized structure  

### Functional Requirements
✅ 7 pages with React Router navigation  
✅ Contact form with backend integration  
✅ Email notifications for form submissions  
✅ Google Maps integration  
✅ Google Analytics tracking (placeholder)  
✅ Sticky navbar with active state  
✅ Footer with company info and links  
✅ Mobile menu for navigation  

---

## What's Been Implemented

### Phase 1: Frontend with Mock Data (Completed: Jan 26, 2025)

#### Pages Created
1. **Home** (`/`)
   - Hero section with Spline 3D animation
   - Services overview (6 cards)
   - Why Choose Us section
   - Industries preview
   - Testimonials (4 client testimonials)
   - CTA section

2. **Services** (`/services`)
   - All 7 services with detailed cards
   - Process workflow (4 steps)
   - CTA section

3. **Solutions** (`/solutions`)
   - 6 industry-specific solutions
   - Value propositions
   - Industry expertise highlights

4. **Case Studies** (`/case-studies`)
   - 6 detailed case studies with results
   - Impact statistics
   - Technologies used

5. **About** (`/about`)
   - Company vision & mission
   - Core values (6 values)
   - Technology stack (19 technologies)
   - Company statistics

6. **Blog** (`/blog`)
   - 6 blog post previews
   - Newsletter subscription form (UI only)

7. **Contact** (`/contact`)
   - Contact form (Name, Email, Company, Phone, Message)
   - Contact information cards
   - Google Maps embed
   - Business hours

#### Components Created
- `Navbar.jsx` - Sticky navigation with mobile menu
- `Footer.jsx` - Complete footer with links
- `HeroSection.jsx` - Spline 3D integration
- `ServiceCard.jsx` - Reusable service display
- `IndustryCard.jsx` - Industry solution cards
- `CaseStudyCard.jsx` - Case study display
- `TestimonialCard.jsx` - Client testimonials

#### Data & Styling
- `mock.js` - Complete mock data for all sections
- `App.css` - Dark theme design system
- Typography classes (display-huge to body-small)
- Button styles (btn-primary, btn-secondary)
- Animation utilities with framer-motion

#### Dependencies Installed
- @splinetool/react-spline@latest
- @splinetool/runtime@latest
- framer-motion@12.29.2
- react-intersection-observer@10.0.2

### Phase 2: Backend Integration (Completed: Jan 26, 2025)

#### Backend APIs Created
1. **Contact Form API** (`POST /api/contact`)
   - Accepts: name, email, company, phone, message
   - Stores submission in MongoDB
   - Sends email notification
   - Returns: ContactFormSubmission object

2. **Get Contact Submissions** (`GET /api/contact`)
   - Admin endpoint to view all submissions
   - Sorted by created_at (newest first)

#### Backend Files Created
- `models.py` - Pydantic models for contact form
- `email_service.py` - Email notification service
- `server.py` - Updated with contact endpoints

#### Email Service Features
- HTML email templates
- SMTP configuration via environment variables
- Graceful fallback if SMTP not configured
- Detailed form data in email body

---

## API Contracts

### POST /api/contact
**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+1 555-0000",
  "message": "Interested in AI solutions"
}
```

**Response (201):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+1 555-0000",
  "message": "Interested in AI solutions",
  "created_at": "2025-01-26T16:00:00"
}
```

### GET /api/contact
**Response (200):**
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Inc",
    "phone": "+1 555-0000",
    "message": "Interested in AI solutions",
    "created_at": "2025-01-26T16:00:00"
  }
]
```

---

## Environment Variables Required

### Backend (.env)
```
# MongoDB
MONGO_URL=<configured>
DB_NAME=<configured>

# Email Service (TO BE CONFIGURED)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=<your-email>
SMTP_PASSWORD=<your-app-password>
FROM_EMAIL=noreply@apexnexon.com
ADMIN_EMAIL=admin@apexnexon.com

# CORS
CORS_ORIGINS=*
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<configured>
```

---

## Prioritized Backlog

### P0 - Critical (Next Sprint)
✅ Backend contact form with email notifications  
⏳ Configure SMTP credentials for email service  
⏳ Set up actual Google Analytics ID  
⏳ Replace Google Maps placeholder with actual location  

### P1 - High Priority
⏳ Blog CMS backend (create, edit, delete posts)  
⏳ Admin dashboard for viewing contact submissions  
⏳ Newsletter subscription backend  
⏳ Form validation and error handling improvements  
⏳ Add loading states to contact form  

### P2 - Medium Priority
⏳ SEO meta tags for all pages  
⏳ Open Graph images  
⏳ Sitemap.xml generation  
⏳ Performance optimization  
⏳ Image lazy loading  
⏳ Add more case studies (user-provided)  
⏳ Testimonials carousel  

### P3 - Nice to Have
⏳ Dark/light theme toggle  
⏳ Multi-language support  
⏳ Blog search and filtering  
⏳ Social media sharing buttons  
⏳ Live chat integration  
⏳ Cookie consent banner  

---

## Next Tasks

1. **Email Configuration**
   - User needs to provide SMTP credentials
   - Update .env file with email settings
   - Test email notifications end-to-end

2. **Google Analytics**
   - Replace 'GA_MEASUREMENT_ID' with actual ID
   - Verify tracking is working

3. **Content Updates**
   - Replace placeholder contact information
   - Add real company address for Google Maps
   - Update social media links

4. **Testing**
   - Test contact form submission flow
   - Verify email notifications
   - Test all page navigation
   - Mobile responsiveness check

5. **Deployment Preparation**
   - Environment variable configuration
   - Production build testing
   - Performance audit

---

## Known Issues & Notes

### Current Status
- Frontend fully functional with mock data
- Backend contact API implemented and ready
- Email service configured but needs SMTP credentials
- Google Analytics placeholder needs actual ID
- All 7 pages are responsive and animated

### Dependencies on User
1. SMTP email credentials (Gmail/SendGrid/etc.)
2. Google Analytics tracking ID
3. Actual company address for Google Maps
4. Any content updates or additions

### Technical Notes
- Spline 3D animation loads from CDN (prod.spline.design)
- Images loaded from Unsplash (should be replaced with optimized assets)
- All routes use React Router (client-side routing)
- Backend uses FastAPI with async MongoDB
- Email service has graceful fallback if SMTP not configured

---

## Success Metrics

### Phase 1 Success Criteria ✅
- [x] 7 functional pages with navigation
- [x] Dark theme with #00FFD1 brand color
- [x] Spline 3D hero animation
- [x] Responsive design (mobile/tablet/desktop)
- [x] Contact form with backend API
- [x] Email notification system

### Phase 2 Target Metrics (To Track)
- Contact form conversion rate > 3%
- Average time on site > 2 minutes
- Bounce rate < 60%
- Mobile traffic > 40%
- Page load time < 3 seconds

---

*Last Updated: January 26, 2025*
