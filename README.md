# AMPATH Informatics Website

This repository contains the official codebase for the **AMPATH Informatics Website**, aimed at sharing content, workflows, training videos, and documentation related to AMPATH's EMR and health informatics initiatives.

---

## 📁 Project Structure

```

ampath-informatics-website/
├── backend/           # Hapi.js backend server
│   ├── src/
│   │   ├── config/    # Environment configs, DB setup
│   │   ├── routes/    # Route definitions
│   │   ├── controllers/ # Request handlers
│   │   ├── services/  # Business logic
│   │   ├── models/    # DB models (if ORM used)
│   │   └── index.js   # Hapi server entry point
│   └── package.json
│
├── client/            # Vite + React frontend with TailwindCSS
│   ├── src/
│   │   ├── assets/    # Static assets like images
│   │   ├── components/# Reusable UI components
│   │   ├── pages/     # Pages/views
│   │   ├── routes/    # Frontend routing
│   │   └── main.jsx   # React entry point
│   └── package.json
│
└── README.md          # Project instructions

````

---

## 🧑‍💻 Developer Guidelines

### 1. Fork the Repository

To begin development:

- Go to the [AMPATH GitHub repository](https://github.com/AMPATH/ampath-informatics-website)
- Click on the **Fork** button (top right)
- Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/ampath-informatics-website.git
cd ampath-informatics-website
````

### 2. Create a Feature Branch

> Use meaningful names for feature branches.

```bash
git checkout -b feat/<feature-name>
```

Examples:

* `feat/admin-auth`
* `fix/video-embed-bug`
* `chore/docs-update`

---

## ⚙️ Local Setup

### Prerequisites

* Node.js >= 18
* MySQL >= 8
* Git

### 1. Backend Setup (Hapi.js + MySQL2)

```bash
cd backend
cp .env.example .env   # Update database credentials in .env
npm install
npm run dev
```

Create a new MySQL database and configure `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=ampath_informatics
```

> ⚠️ DB schema/migrations will be added later via Sequelize or SQL scripts.

### 2. Frontend Setup (Vite + TailwindCSS)

```bash
cd client
npm install
npm run dev
```

---

## ✅ Contribution Workflow

1. Fork and clone the repo
2. Create a new branch
3. Commit frequently with meaningful messages
4. Push to your fork
5. Open a Pull Request to `main` branch
6. PRs will be reviewed and merged after approval

### Commit Message Style

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add admin dashboard
fix: correct bug in video modal
docs: update readme
```

---

## 🔐 Admin Section Requirements

The site will have an **admin dashboard** to upload/update content (e.g., images, document links). This requires:

* Authentication (via session or JWT)
* Content management endpoints in backend
* Protected frontend routes (e.g., `/admin`)

---

## 🗂️ Static Content & Media

* Images may be uploaded via backend to a designated folder or cloud storage (e.g., Cloudinary)
* Training videos will be embedded from **YouTube**
* Documents/PDFs can be stored either in the repo or in a content folder via admin UI

---

## 📬 Contact

For onboarding issues or technical questions, please reach out to US.
