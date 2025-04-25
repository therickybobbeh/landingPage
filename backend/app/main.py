from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Developer Portfolio API",
    description="API for Developer Portfolio Landing Page",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OAuth2 scheme for token authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")

@app.get("/")
async def root():
    """Root endpoint to check if the API is running."""
    return {"message": "Welcome to the Developer Portfolio API!"}

@app.get("/health", status_code=200)
async def health_check():
    """Health check endpoint for Docker container monitoring."""
    return {"status": "healthy"}

# Import and include API routes
from app.api.router import api_router
app.include_router(api_router, prefix="/api")

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)