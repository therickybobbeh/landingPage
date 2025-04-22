📎 Project Requirements Document

1. Project Overview
Name: Developer Portfolio Landing Page
Description:
A full-stack personal portfolio application to showcase development work. Visitors can view a resume, explore GitHub repositories, and leave messages. Includes a secure admin dashboard for managing submissions and donations.

2. Tech Stack
Layer          Technology       Notes
Frontend       Next.js          New work should go in /frontend
                                Use components from /nextjs-fronend as reference
                                Styling should be migrated to Bootstrap
Backend        FastAPI          RESTful API framework
Database       PostgreSQL       Managed via Docker
Container      Docker           Dev and Prod parity
Orchestration  Docker Compose   For service orchestration
Auth           JWT / OAuth2     Token-based authentication

3. Project Structure
project-root/
├── frontend/                # ✅ New Next.js frontend (build here)
├── nextjs-fronend/         # Reference template for components and layout
├── backend/                # FastAPI backend
│   └── app/
│       ├── main.py
│       ├── api/
│       ├── models/
│       └── services/
├── docker-compose.yml      # Service orchestration
├── .env                    # Environment variables
└── README.md

4. Environment Variables (.env)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=admin
POSTGRES_DB=myapp_db
DATABASE_URL=postgresql://postgres:admin@db:5432/myapp_db
SECRET_KEY=supersecretkey
FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000

5. Docker Compose Services
✅ Frontend (/frontend)
Port: 3000
Depends on: Backend
Config: NEXT_PUBLIC_API_URL=http://localhost:8000
Note: Take components and styling reference from /nextjs-fronend
      Convert styles to Bootstrap for consistency

✅ Backend (FastAPI)
Port: 8000
Depends on: PostgreSQL
Reads from: DATABASE_URL

✅ Database (PostgreSQL)
Port: 5432
Volumes for data persistence
Initialized with optional seed SQL scripts

6. Functional Requirements
User Authentication (OAuth2/JWT)
Landing page with:
  - Embedded PDF resume
  - GitHub link
  - Profile picture placeholder
  - Donation section via Stripe/PayPal (planned)
  - Message submission form saved to database
Owner login with secure dashboard to view/manage messages
Component layout following the structure in /nextjs-fronend (Banner, Features, etc.)

7. Non-Functional Requirements
Security: HTTPS in prod, secrets via env vars, secure CORS policy
Scalability: Microservice-ready containers
Maintainability: Clear separation of concerns, typed models
Portability: Full container support with Docker Compose
Logging: Log to file or stdout; track errors and API calls
UI/UX: Responsive design using Bootstrap components

8. Best Practices
Frontend (Next.js)
  - .env.local for dev, .env.production for prod
  - Use functional components and hooks
  - Separate API layer with reusable client
  - Validate data on client and server side
  - Adapt /nextjs-fronend component structure to /frontend
  - Convert Tailwind CSS to Bootstrap 
  - Maintain component organization similar to /nextjs-fronend

Backend (FastAPI)
  - Use pydantic for validation and models
  - Route modules for clean APIs (e.g., /api/messages)
  - Dependency injection with Depends()
  - Enable Swagger UI (/docs) in dev only

Database
  - SQLAlchemy or ORM to abstract raw queries
  - Alembic for version-controlled migrations
  - Seed scripts for staging/testing environments

DevOps
  - Dockerize everything
  - Health checks for critical services
  - Use volumes for DB persistence
  - Use a Makefile or bootstrap.sh to spin up the dev environment quickly

9. Deployment Plan
Staging & Production environments on separate branches
Reverse proxy with Nginx or Caddy
SSL termination (Let's Encrypt)
Use GitHub Actions or similar CI/CD pipeline
Secrets managed via .env or secrets manager

✅ Optional Extras
Implement caching with Redis (optional)
Admin dashboard for user/message management
Audit logging for all sensitive data changes

10. Component Migration Strategy
  - Copy structure and functionality of components from /nextjs-fronend
  - Update package.json to include Bootstrap instead of Tailwind CSS
  - Convert Tailwind classes to Bootstrap equivalents
  - Maintain same component breakdown (Banner, Navbar, Features, etc.)
  - Ensure responsive design across all device sizes
  - Preserve animations and interactive elements where appropriate