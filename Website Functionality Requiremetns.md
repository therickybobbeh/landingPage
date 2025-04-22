# 🧾 Project Requirements Document

## 1. Project Overview

**Name:** Dialysis Management App  
**Description:**  
A full-stack application for managing patient health data with a modern frontend (Next.js), a Python-based backend (FastAPI), and a PostgreSQL relational database. Designed for both patients and providers.

---

## 2. Tech Stack

| Layer       | Technology     | Notes                              |
|-------------|----------------|------------------------------------|
| Frontend    | Next.js        | Located in `/nextjs-fronend`      |
| Backend     | FastAPI        | RESTful API framework              |
| Database    | PostgreSQL     | Managed via Docker                 |
| Container   | Docker         | Dev and Prod parity                |
| Orchestration | Docker Compose | For service orchestration         |
| Auth        | JWT / OAuth2   | Token-based authentication         |

---

## 3. Project Structure
project-root/
├── nextjs-fronend/          # Next.js frontend
├── backend/                 # FastAPI backend
│   └── app/
│       ├── main.py
│       ├── api/
│       ├── models/
│       └── services/
├── docker-compose.yml       # Service orchestration
├── .env                     # Environment variables
└── README.md


---

## 4. Environment Variables (`.env`)

POSTGRES_USER=postgres
POSTGRES_PASSWORD=admin
POSTGRES_DB=myapp_db
DATABASE_URL=postgresql://postgres:admin@db:5432/myapp_db
SECRET_KEY=supersecretkey
FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000

---

## 5. Docker Compose Services

### ✅ Frontend (Next.js)
- Port: `3000`
- Depends on: Backend
- Config: `NEXT_PUBLIC_API_URL=http://localhost:8000`

### ✅ Backend (FastAPI)
- Port: `8000`
- Depends on: PostgreSQL
- Reads from: `DATABASE_URL`

### ✅ Database (PostgreSQL)
- Port: `5432`
- Volumes for data persistence
- Initialized with optional seed SQL scripts

---

## 6. Functional Requirements

- User Authentication (JWT)
- Dashboard to view and update patient dialysis sessions
- Alerts and Notifications module
- Secure role-based access for providers vs patients
- Real-time or periodic session analytics

---

## 7. Non-Functional Requirements

- **Security:** HTTPS in prod, secrets via env vars, secure CORS policy
- **Scalability:** Microservice-ready containers
- **Maintainability:** Clear separation of concerns, typed models
- **Portability:** Full container support with Docker Compose
- **Logging:** Log to file or stdout; track errors and API calls

---

## 8. Best Practices

### Frontend (Next.js)
- `.env.local` for dev, `.env.production` for prod
- Use functional components and hooks
- Separate API layer with reusable client
- Validate data on client and server side

### Backend (FastAPI)
- Use `pydantic` for validation and models
- Route modules for clean APIs (e.g., `/api/patients`)
- Dependency injection with `Depends()`
- Enable Swagger UI (`/docs`) in dev only

### Database
- SQLAlchemy or ORM to abstract raw queries
- Alembic for version-controlled migrations
- Seed scripts for staging/testing environments

### DevOps
- Dockerize everything
- Health checks for critical services
- Use volumes for DB persistence
- Use a Makefile or `bootstrap.sh` to spin up the dev environment quickly

---

## 9. Deployment Plan

- Staging & Production environments on separate branches
- Reverse proxy with Nginx or Caddy
- SSL termination (Let's Encrypt)
- Use GitHub Actions or similar CI/CD pipeline
- Secrets managed via `.env` or secrets manager

---

## ✅ Optional Extras

- Implement caching with Redis (optional)
- Admin dashboard for user/session management
- Audit logging for all sensitive data changes