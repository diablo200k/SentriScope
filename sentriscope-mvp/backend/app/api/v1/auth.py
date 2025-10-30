from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import verify_password, create_access_token
from app.schemas.user import UserCreate, UserLogin, Token, UserResponse
from app.crud.user import get_user_by_email, create_user

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    """Créer un nouveau compte utilisateur"""
    # Vérifier si l'email existe déjà
    db_user = get_user_by_email(db, user_data.email)
    if db_user:
        raise HTTPException(
            status_code=400, 
            detail="Cet email est déjà enregistré"
        )
    
    # Créer l'utilisateur
    new_user = create_user(
        db=db,
        email=user_data.email,
        password=user_data.password,
        full_name=user_data.full_name
    )
    return new_user

@router.post("/login", response_model=Token)
def login(user_data: UserLogin, db: Session = Depends(get_db)):
    """Se connecter et obtenir un token JWT"""
    # Vérifier l'utilisateur
    user = get_user_by_email(db, user_data.email)
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Créer le token JWT
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}