from datetime import datetime, timedelta, timezone
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings

# Préfère bcrypt_sha256 (pas de limite 72 octets) mais sait vérifier d'anciens hashes bcrypt
pwd_context = CryptContext(
    schemes=["bcrypt_sha256", "bcrypt"],
    deprecated="auto",
)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Vérifie le mot de passe en détectant automatiquement le schéma (bcrypt_sha256/bcrypt).
    """
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """
    Hash un mot de passe en bcrypt_sha256 (pré-hash SHA-256 -> plus de limite 72 octets).
    """
    return pwd_context.hash(password)

def create_access_token(data: dict) -> str:
    """
    Crée un JWT en ajoutant exp/iat/nbf.
    Conserve l'interface de ta fonction existante (paramètre `data`).
    """
    now = datetime.now(timezone.utc)
    expire = now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {
        **data,
        "iat": int(now.timestamp()),
        "nbf": int(now.timestamp()),
        "exp": int(expire.timestamp()),
    }
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
