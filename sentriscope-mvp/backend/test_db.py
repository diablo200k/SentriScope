# test_db_min.py
from dotenv import load_dotenv
import os
import psycopg

load_dotenv()
url = os.getenv("DATABASE_URL")
if not url:
    print("❌ DATABASE_URL manquant dans .env")
    raise SystemExit(1)

print("🔗 URL récupérée depuis .env")
print(f"📍 {url[:60]}...")
print()

try:
    with psycopg.connect(conninfo=url) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT version();")
            version = cur.fetchone()
            print("✅ Connexion OK !")
            print(f"📊 PostgreSQL : {version[0][:50]}...")
            print()
            
            cur.execute("SELECT current_database(), current_user;")
            db_info = cur.fetchone()
            print(f"🗄️  Base de données : {db_info[0]}")
            print(f"👤 Utilisateur : {db_info[1]}")
            print()
            print("🎉 Votre base Supabase fonctionne parfaitement !")
except Exception as e:
    print("❌ Connexion échouée :", e)