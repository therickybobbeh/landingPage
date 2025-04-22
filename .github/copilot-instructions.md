# 🤖 GitHub Copilot Instructions for This Project

Welcome, Copilot! Here's how to best assist with this project.

---

## 🎯 Project Goal

The objective is to build a personal landing page that highlights my development work. The application should include:

- A clean, modern **landing page** built in Next.js.
- A **GitHub link** to showcase my repositories.
- An **embedded PDF viewer** to display my resume.
- A placeholder section to later include my **profile picture**.
- A **message form** for visitors to leave messages, which are saved to a PostgreSQL database.
- An **owner login page** with basic **OAuth2 authentication**.
- A **secure admin dashboard** where I can view and manage incoming messages.

---

## 🧠 Project Context

This is a full-stack application composed of:

- A **Next.js frontend** in the `/nextjs-fronend` directory.
- A **FastAPI backend** under `/backend/`, exposing REST endpoints.
- A **PostgreSQL database**, containerized using Docker.
- Docker Compose orchestrates the services together.

---

## 📂 File Locations

| Component     | Path                  | Notes                          |
|---------------|-----------------------|--------------------------------|
| Frontend      | `/nextjs-fronend`     | Next.js React app              |
| Backend       | `/backend`            | FastAPI service (Python)       |
| Database      | Docker service        | PostgreSQL, .env configured    |
| API Models    | `/backend/app/models` | Pydantic models                |
| API Routes    | `/backend/app/api`    | FastAPI route definitions      |

---

## ✅ Tasks Copilot Should Prioritize

- Help scaffold or improve REST endpoints in FastAPI.
- Assist in creating or updating React components in the frontend.
- Suggest or validate TypeScript types shared between backend and frontend.
- Ensure `.env` variables are used safely and consistently.
- Generate Dockerfiles or docker-compose snippets when needed.
- The `/nextjs-fronend` is originally from a template. Try to avoid deleting existing code until the final structure is complete.

---

## ❌ Tasks Copilot Should Avoid

- Don’t assume the frontend lives at `/frontend`; it's specifically `/nextjs-fronend`.
- Avoid changing `docker-compose.yml` unless explicitly asked.
- Do not alter `.env` secrets.

---

## 🧪 Testing

- Frontend tests: (planned) via Jest.
- Backend tests: Pytest under `/backend/tests/`.
- Copilot may assist in writing unit tests for API routes and utility functions.

---

## 🌐 API Guidelines

- Follow REST principles.
- Use async endpoints in FastAPI.
- Validate requests with Pydantic schemas.
- Responses should be typed.

---

Thanks Copilot. Assist responsibly!