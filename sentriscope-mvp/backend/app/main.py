from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import auth
from app.core.config import settings

app = FastAPI(
    title="SentriScope API",
    version="1.0.0",
    description="API de gestion de la sécurité réseau"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclure les routes d'authentification
app.include_router(auth.router, prefix="/api/v1")

@app.get("/")
def root():
    return {
        "message": "SentriScope API is running",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}