from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    """Schéma pour créer un utilisateur"""
    email: EmailStr
    password: str
    full_name: Optional[str] = None

class UserLogin(BaseModel):
    """Schéma pour se connecter"""
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    """Schéma de réponse (sans le mot de passe)"""
    id: str
    email: str
    full_name: Optional[str]
    role: str
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class Token(BaseModel):
    """Schéma pour le token JWT"""
    access_token: str
    token_type: str