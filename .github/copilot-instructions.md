📎 Project Requirements Document1. Project OverviewName: Developer Portfolio Landing PageDescription:A full-stack personal portfolio application to showcase development work. Visitors can view a resume, explore GitHub repositories, and leave messages. Includes a secure admin dashboard for managing submissions and donations.
2. Tech StackLayerTechnologyNotesFrontendNext.jsNew work should go in /frontendBackendFastAPIRESTful API frameworkDatabasePostgreSQLManaged via DockerContainerDockerDev and Prod parityOrchestrationDocker ComposeFor service orchestrationAuthJWT / OAuth2Token-based authentication3. Project Structureproject-root/
├── frontend/                # ✅ New Next.js frontend (build here)
├── nextjs-fronend/         # Legacy template (do not modify, use as reference)
├── backend/                # FastAPI backend
│   └── app/
│       ├── main.py
│       ├── api/
│       ├── models/
│       └── services/
├── docker-compose.yml      # Service orchestration
├── .env                    # Environment variables
└── README.md
4. Environment Variables (.env)POSTGRES_USER=postgres
POSTGRES_PASSWORD=admin
POSTGRES_DB=myapp_db
DATABASE_URL=postgresql://postgres:admin@db:5432/myapp_db
SECRET_KEY=supersecretkey
FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:80005. Docker Compose Services✅ Frontend (/frontend)Port: 3000
Depends on: Backend
Config: NEXT_PUBLIC_API_URL=http://localhost:8000
Note: Do not modify /nextjs-fronend; use it for inspiration only.
✅ Backend (FastAPI)Port: 8000
Depends on: PostgreSQL
Reads from: DATABASE_URL
✅ Database (PostgreSQL)Port: 5432
Volumes for data persistence
Initialized with optional seed SQL scripts
6. Functional RequirementsUser Authentication (OAuth2/JWT)
Landing page with:
Embedded PDF resume
GitHub link
Profile picture placeholder
Donation section via Stripe/PayPal (planned)
Message submission form saved to database
Owner login with secure dashboard to view/manage messages
7. Non-Functional RequirementsSecurity: HTTPS in prod, secrets via env vars, secure CORS policy
Scalability: Microservice-ready containers
Maintainability: Clear separation of concerns, typed models
Portability: Full container support with Docker Compose
Logging: Log to file or stdout; track errors and API calls
8. Best PracticesFrontend (Next.js).env.local for dev, .env.production for prod
Use functional components and hooks
Separate API layer with reusable client
Validate data on client and server side
Start new work in /frontend, do not modify /nextjs-fronend
Backend (FastAPI)Use pydantic for validation and models
Route modules for clean APIs (e.g., /api/messages)
Dependency injection with Depends()
Enable Swagger UI (/docs) in dev only
DatabaseSQLAlchemy or ORM to abstract raw queries
Alembic for version-controlled migrations
Seed scripts for staging/testing environments
DevOpsDockerize everything
Health checks for critical services
Use volumes for DB persistence
Use a Makefile or bootstrap.sh to spin up the dev environment quickly
9. Deployment PlanStaging & Production environments on separate branches
Reverse proxy with Nginx or Caddy
SSL termination (Let’s Encrypt)
Use GitHub Actions or similar CI/CD pipeline
Secrets managed via .env or secrets manager
✅ Optional ExtrasImplement caching with Redis (optional)
Admin dashboard for user/message management
Audit logging for all sensitive data changes