Risque = Menace × Vulnérabilité × Impact
```

**Exemple Concret :**

**Scénario : Ransomware sur serveur de production**

- **Menace** : Attaquant externe avec ransomware
- **Vulnérabilité** : Serveur Windows non patché (CVE-2021-34527 - PrintNightmare)
- **Probabilité** : 70% sur 1 an (attaques ransomware très fréquentes)
- **Impact si réalisé** :
  - Production arrêtée pendant 5 jours
  - Perte de CA : 500k€
  - Rançon demandée : 100k€
  - Atteinte à la réputation
  - **Impact total** : 800k€

**Calcul du Risque :**
```
Risque Brut = 70% × 800k€ = 560k€ (exposition annuelle)
```

**Contrôles pour Réduire le Risque :**

1. **Patcher le serveur** : Élimine la vulnérabilité → Probabilité passe à 20%
2. **Sauvegardes quotidiennes** : Réduit l'impact → Impact passe à 50k€ (1 jour d'arrêt)
3. **Antivirus + EDR** : Détection précoce → Probabilité passe à 5%
```
Risque Résiduel = 5% × 50k€ = 2.5k€ (exposition après contrôles)
Réduction du risque = 560k€ - 2.5k€ = 557.5k€ économisés !
```

**Stratégies de Traitement du Risque :**

1. **ÉVITER** : Supprimer la cause du risque
   - Exemple : Fermer le service FTP obsolète et vulnérable

2. **RÉDUIRE** : Implémenter des contrôles
   - Exemple : Installer un pare-feu, former les utilisateurs

3. **TRANSFÉRER** : Faire porter le risque par un tiers
   - Exemple : Assurance cyber (10k€/an pour couvrir 1M€)

4. **ACCEPTER** : Assumer le risque si faible
   - Exemple : Risque de perte d'un vieux laptop (valeur 200€)

**Matrice de Risques (Heat Map) :**
```
Impact →
↑         | 2  | 4  | 6  | 8  | 10 |
Vraisem-  |----|----|----|----|----| 
blance    | 2  | 4  | 6  | 8  | 10 |
          |----|----|----|----|----| 
          | 2  | 4  | 6  | 8  | 10 |
          |----|----|----|----|----| 
          | 1  | 2  | 3  | 4  | 5  |
          |----|----|----|----|----| 
          | 1  | 2  | 3  | 4  | 5  |

Légende :
🟢 Vert (1-3) : Risque Faible - Surveillance
🟡 Jaune (4-6) : Risque Moyen - Plan d'action
🟠 Orange (8-12) : Risque Élevé - Action immédiate
🔴 Rouge (15-25) : Risque Critique - Escalade COMEX
```

---

## 3. ARCHITECTURE SIMPLIFIÉE POUR PROJET ACADÉMIQUE

### 3.1 Version MVP (Minimum Viable Product)

Pour un projet scolaire, vous n'avez pas besoin de tout développer. Voici la version simplifiée recommandée :

**Scope Réaliste pour 3-4 Mois de Projet :**

✅ **À Développer Obligatoirement (Core Features)**
1. Dashboard avec métriques clés
2. Module Scan basique (Nmap uniquement)
3. Gestion des actifs (CRUD simple)
4. Liste des vulnérabilités trouvées
5. Génération d'un rapport PDF
6. Base de données PostgreSQL fonctionnelle

⚠️ **À Simplifier (Nice to Have)**
7. Module conformité : 1 seul framework (ISO 27001) avec 20 contrôles au lieu de 93
8. Module risques : Calcul simple sans historique
9. Planification des scans : Juste lancement manuel

❌ **À Laisser de Côté (Hors Scope MVP)**
10. OpenVAS (complexe à installer/configurer)
11. Intégrations externes (Jira, Slack, etc.)
12. Multi-tenancy complet
13. Authentification avancée (OAuth, SSO)
14. Mode temps réel avec WebSocket

### 3.2 Stack Technologique Recommandée

**Frontend : React (Web) - PAS Electron**

**Pourquoi ?**
- Electron est complexe à packager pour un projet académique
- Une application web est plus simple à développer et démontrer
- Déployable facilement pour la démo (Netlify, Vercel gratuits)

**Technologies :**
- **React 18** avec Hooks
- **Tailwind CSS** pour le design (rapide, moderne)
- **Recharts** pour les graphiques
- **React Router** pour la navigation

**Backend : Python avec FastAPI**

**Pourquoi Python ?**
- Écosystème riche pour cybersécurité (python-nmap, requests)
- FastAPI est moderne et performant
- Documentation auto-générée (Swagger)
- Plus facile que Node.js pour traiter les données

**Technologies :**
- **FastAPI** (framework backend)
- **Python-Nmap** (interfaçage avec Nmap)
- **SQLAlchemy** (ORM pour base de données)
- **Pydantic** (validation de données)
- **ReportLab** (génération de PDF)

**Base de Données : PostgreSQL**

**Pourquoi ?**
- Gratuit et open-source
- Robuste et professionnel
- Supporte JSON (JSONB) pour données flexibles
- Vues matérialisées pour dashboards

**Outils de Scan :**
- **Nmap** : Scan réseau/ports (gratuit, préinstallé Linux)
- **Commandes Python** : Appel via subprocess

### 3.3 Architecture Technique Simplifiée
```
┌─────────────────────────────────────────────┐
│         FRONTEND (React - Port 3000)        │
│  ┌─────────┐  ┌─────────┐  ┌──────────┐   │
│  │Dashboard│  │  Scans  │  │ Vulns    │   │
│  └─────────┘  └─────────┘  └──────────┘   │
└─────────────────┬───────────────────────────┘
                  │ HTTP REST API
┌─────────────────▼───────────────────────────┐
│       BACKEND (FastAPI - Port 8000)         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │  API     │  │  Scan    │  │  Report  │ │
│  │ Routes   │  │ Service  │  │ Generator│ │
│  └──────────┘  └──────────┘  └──────────┘ │
└─────────────────┬───────────────────────────┘
                  │ SQL Queries
┌─────────────────▼───────────────────────────┐
│       PostgreSQL Database (Port 5432)       │
│  ┌────────┐  ┌──────────┐  ┌──────────┐   │
│  │ assets │  │ scans    │  │ scan_    │   │
│  │        │  │          │  │ results  │   │
│  └────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────┘
