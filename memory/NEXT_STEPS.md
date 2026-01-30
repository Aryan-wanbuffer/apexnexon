# What to Do Now — ApexNexon College Project

Your site is already hosted at **apexnexon.tech**. Here’s a clear order of what to do next.

---

## 1. Deploy the latest code (do this first)

All the “real business” changes are in your repo but may not be live yet.

- **If you use Git + auto-deploy (e.g. Vercel/Netlify):**  
  Commit and push. Your host will rebuild and update apexnexon.tech.
- **If you deploy manually:**  
  Run `yarn build` (or `npm run build`) in `frontend/`, then upload the `build/` output to your host.

After this, apexnexon.tech will show: favicon, Privacy/Terms, Trusted by strip, per-page titles, no Emergent/PostHog, case study “Anonymized” and testimonial “Case study client” labels.

---

## 2. Check the contact form

- Your frontend uses **`REACT_APP_BACKEND_URL`** (currently `https://apexnexon-web.preview.emergentagent.com`).
- On **apexnexon.tech**, the build must use the **same** backend URL (set in your host’s environment variables).
- Submit a test message from the live site and confirm:
  - Success toast appears.
  - Entry is stored (e.g. in MongoDB) and, if configured, an email is sent.

If the form fails on the live site, set `REACT_APP_BACKEND_URL` in your hosting dashboard to your real API URL and redeploy.

---

## 3. Optional: Google Analytics

- Create a **Google Analytics 4** property (free) and get the **Measurement ID** (e.g. `G-XXXXXXXXXX`).
- In your **hosting** env (Vercel/Netlify/etc.), add:
  - `REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- Redeploy. The site already loads GA only when this variable is set.

---

## 4. Optional: Real contact & social links

- **Email:** If you want form replies to go to a real inbox, use an address that receives mail (e.g. one you set up for apexnexon.tech or your college email). The site already shows **contact@apexnexon.tech**; ensure that mailbox or forwarding works.
- **Footer social links** currently point to placeholder URLs (e.g. `linkedin.com/company/apexnexon`). When you have real profiles, update them in `frontend/src/components/Footer.jsx`.

---

## 5. Before you submit the project

- [ ] Open **apexnexon.tech** and click through every page (Home, Services, Solutions, Case Studies, About, Blog, Contact, Privacy, Terms).
- [ ] Test the contact form (name, email, message) and confirm success message and backend storage/email.
- [ ] Check on a phone or narrow window: nav, buttons, and text look good (no horizontal scroll, no broken layout).
- [ ] If your report or demo requires it: note the **tech stack** (React, Tailwind, Framer Motion, FastAPI, MongoDB, etc.) and **hosting** (e.g. “Frontend on Vercel, backend on …”).

---

## 6. Optional: Better link preview image

- Right now, shared links use **favicon.svg** as the preview image.
- For a stronger look (e.g. LinkedIn/Twitter): add a **1200×630** image (e.g. `public/og-image.png`) with ApexNexon logo or tagline, then update in `public/index.html`:
  - `og:image` and `twitter:image` to `https://apexnexon.tech/og-image.png`.

---

## Quick summary

| Priority | Action |
|----------|--------|
| **Must** | Deploy latest code so apexnexon.tech is up to date. |
| **Must** | Verify contact form works on the live site. |
| **Should** | Before submission: test all pages + mobile. |
| **Optional** | Add GA (REACT_APP_GA_MEASUREMENT_ID), real email/social links, og-image. |

If you tell me how you deploy (e.g. “Vercel” or “manual FTP”), I can give exact steps for step 1 and 2.
