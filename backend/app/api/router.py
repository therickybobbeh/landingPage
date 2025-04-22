from fastapi import APIRouter

from app.api.endpoints import auth, messages

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(messages.router, prefix="/messages", tags=["messages"])