from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context
import sys
from pathlib import Path

# Ajouter le path parent pour importer les modules
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

# Import de la configuration et des modèles
from app.core.config import settings
from app.core.database import Base
from app.models.user import User  # Import du modèle User

# Configuration Alembic
config = context.config

# Définir l'URL de la base de données depuis .env
database_url = settings.DATABASE_URL.replace("postgresql://", "postgresql+psycopg://")
# Échapper les % pour ConfigParser (% devient %%)
database_url_escaped = database_url.replace('%', '%%')
config.set_main_option('sqlalchemy.url', database_url_escaped)

# Interpréter le fichier de config pour la journalisation Python
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Métadonnées pour les migrations
target_metadata = Base.metadata

def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, 
            target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()