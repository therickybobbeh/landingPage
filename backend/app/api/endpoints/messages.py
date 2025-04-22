from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from jose import jwt, JWTError
from pydantic import BaseModel, EmailStr, Field

from app.db.session import get_db
from app.core.security import ALGORITHM
from app.models.message import Message
from app.models.user import User
from app.core.config import settings
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")

# Pydantic models for request/response validation
class MessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    content: str

class MessageResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: Optional[str] = None
    content: str
    is_read: bool
    
    class Config:
        orm_mode = True

# Helper function to get current user from token
async def get_current_user(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
) -> User:
    """
    Get the current user based on the JWT token.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[ALGORITHM]
        )
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
        
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise credentials_exception
    return user

# Public endpoint for message submission
@router.post("/submit", status_code=status.HTTP_201_CREATED)
def submit_message(
    message: MessageCreate,
    db: Session = Depends(get_db)
):
    """
    Public endpoint for visitors to submit contact messages.
    Does not require authentication.
    """
    db_message = Message(
        name=message.name,
        email=message.email,
        subject=message.subject,
        content=message.content
    )
    db.add(db_message)
    db.commit()
    
    return {"status": "success", "message": "Your message has been submitted."}

# Admin endpoints for message management
@router.get("/", response_model=List[MessageResponse])
def get_messages(
    skip: int = 0, 
    limit: int = 100,
    is_read: Optional[bool] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get all messages (admin only).
    """
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to view messages"
        )
        
    # Build query based on filters
    query = db.query(Message)
    
    # Apply read/unread filter if provided
    if is_read is not None:
        query = query.filter(Message.is_read == is_read)
        
    # Apply pagination and return results
    messages = query.order_by(Message.created_at.desc()).offset(skip).limit(limit).all()
    return messages

@router.get("/{message_id}", response_model=MessageResponse)
def get_message(
    message_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get a specific message by ID (admin only).
    """
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to view messages"
        )
        
    message = db.query(Message).filter(Message.id == message_id).first()
    if message is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message not found"
        )
    return message

@router.patch("/{message_id}/read")
def mark_message_read(
    message_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Mark a message as read (admin only).
    """
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update messages"
        )
        
    message = db.query(Message).filter(Message.id == message_id).first()
    if message is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message not found"
        )
        
    message.is_read = True
    db.commit()
    
    return {"status": "success", "message": "Message marked as read"}

@router.delete("/{message_id}")
def delete_message(
    message_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Delete a message (admin only).
    """
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete messages"
        )
        
    message = db.query(Message).filter(Message.id == message_id).first()
    if message is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message not found"
        )
        
    db.delete(message)
    db.commit()
    
    return {"status": "success", "message": "Message deleted"}