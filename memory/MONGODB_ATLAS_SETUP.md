# MongoDB Atlas setup for ApexNexon backend

Your backend needs **MONGO_URL** and **DB_NAME** in `backend/.env`. Follow these steps in Atlas.

---

## 1. Create a cluster

- On the **Project Overview** page, click the green **"+ Create"** button (or **Create a cluster**).
- Choose **M0 FREE** (shared, free tier).
- Pick a **region** close to you (or where your backend will run).
- Cluster name: e.g. **Cluster0** (default is fine).
- Click **Create**.

Wait until the cluster status is **Available** (a few minutes).

---

## 2. Create a database user

- In the left sidebar go to **Security** → **Database Access** → **+ Add New Database User**.
- **Authentication:** Password.
- Set a **username** and **password** (save the password; you’ll use it in the connection string).
- **Database User Privileges:** **Atlas admin** (or **Read and write to any database**).
- Click **Add User**.

---

## 3. Allow network access

- In the left sidebar go to **Security** → **Network Access** → **+ Add IP Address**.
- For development / flexible hosting: choose **Allow Access from Anywhere** (adds `0.0.0.0/0`).
- Click **Confirm**.

---

## 4. Get the connection string

- Go back to **Database** → **Clusters**.
- Click **Connect** on your cluster.
- Choose **Drivers** (or **Connect your application**).
- Copy the **connection string**. It looks like:
  ```text
  mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace **`<username>`** with your database user name.
- Replace **`<password>`** with your database user password (if the password has special characters, URL-encode them, e.g. `@` → `%40`).

---

## 5. Update `backend/.env`

Set these (use your real values). You can use **one database** or **multiple** on the same cluster:

**Single database (simplest):**
```env
MONGO_URL="mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="apexnexon"
CORS_ORIGINS="*"
```

**Multiple databases (contact, blog, main):**
```env
MONGO_URL="mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="apexnexon"
DB_CONTACT="apexnexon_contact"
DB_BLOG="apexnexon_blog"
CORS_ORIGINS="*"
```

- **MONGO_URL:** Connection string from step 4, with `<username>` and `<password>` replaced.
- **DB_NAME:** Main database (status checks, general data).
- **DB_CONTACT:** (optional) Database for contact form submissions. If unset, `DB_NAME` is used.
- **DB_BLOG:** (optional) Database for blog posts. If unset, `DB_NAME` is used.

Save the file. Do **not** commit `.env` to Git (it should be in `.gitignore`).

---

## 6. Test the backend

From the project root:

```bash
cd backend && pip install -r requirements.txt && uvicorn server:app --reload
```

Submit a message from the Contact form (with frontend pointing to this backend). If it succeeds, the submission is stored in Atlas; you can check in **Database** → **Browse Collections** and open your **DB_NAME** database.

---

## Quick checklist

- [ ] Cluster created (M0 FREE) and status **Available**
- [ ] Database user created (username + password saved)
- [ ] Network Access: **Allow from anywhere** (or your server IP)
- [ ] Connection string copied and `<username>` / `<password>` replaced
- [ ] `backend/.env` updated with **MONGO_URL** and **DB_NAME**
- [ ] Backend started and contact form tested
