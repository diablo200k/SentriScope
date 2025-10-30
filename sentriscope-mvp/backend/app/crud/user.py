from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import get_password_hash

def get_user_by_email(db: Session, email: str):
    """Récupérer un utilisateur par email"""
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, email: str, password: str, full_name: str = None):
    """Créer un nouvel utilisateur"""
    hashed_password = get_password_hash(password)
    db_user = User(
        email=email,
        hashed_password=hashed_password,
        full_name=full_name
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user