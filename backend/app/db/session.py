from app.db.base import SessionLocal

def get_db():
    """
    Dependency for obtaining a database session.
    Yields a session that is automatically closed after use.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()