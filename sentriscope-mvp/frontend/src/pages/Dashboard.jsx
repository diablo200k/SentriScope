import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shield, LogOut, Server, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              backgroundColor: '#3b82f6',
              padding: '8px',
              borderRadius: '8px'
            }}>
              <Shield style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
              SentriScope
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#374151', fontWeight: '500' }}>{user?.email}</span>
            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
            >
              <LogOut style={{ width: '16px', height: '16px' }} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', marginBottom: '32px' }}>
          Tableau de bord
        </h2>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Assets */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', margin: '0 0 8px 0' }}>
                  Assets surveillés
                </p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  0
                </p>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
                  Aucun asset ajouté
                </p>
              </div>
              <div style={{
                backgroundColor: '#dbeafe',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <Server style={{ width: '32px', height: '32px', color: '#3b82f6' }} />
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', margin: '0 0 8px 0' }}>
                  Alertes actives
                </p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  0
                </p>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
                  Aucune alerte
                </p>
              </div>
              <div style={{
                backgroundColor: '#fee2e2',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <AlertTriangle style={{ width: '32px', height: '32px', color: '#ef4444' }} />
              </div>
            </div>
          </div>

          {/* Scans */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', margin: '0 0 8px 0' }}>
                  Scans réussis
                </p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  0
                </p>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
                  Aucun scan effectué
                </p>
              </div>
              <div style={{
                backgroundColor: '#dcfce7',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <CheckCircle style={{ width: '32px', height: '32px', color: '#22c55e' }} />
              </div>
            </div>
          </div>

          {/* Activity */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', margin: '0 0 8px 0' }}>
                  Activité
                </p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  En ligne
                </p>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
                  Système actif
                </p>
              </div>
              <div style={{
                backgroundColor: '#f3e8ff',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <Activity style={{ width: '32px', height: '32px', color: '#a855f7' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Card */}
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          color: 'white',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            🎉 Bienvenue sur SentriScope !
          </h3>
          <p style={{ opacity: 0.9, marginBottom: '16px', lineHeight: '1.6' }}>
            Votre plateforme de gestion de sécurité réseau est opérationnelle.
            Commencez par ajouter vos premiers assets pour surveiller votre infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: 'white',
              color: '#3b82f6',
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Ajouter un Asset
            </button>
            <button style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Lancer un Scan
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Activité récente
          </h3>
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#6b7280' }}>
            <Activity style={{ width: '64px', height: '64px', margin: '0 auto 16px', color: '#d1d5db' }} />
            <p style={{ margin: '0 0 8px 0' }}>Aucune activité récente</p>
            <p style={{ fontSize: '14px', margin: 0 }}>
              Les activités apparaîtront ici une fois que vous aurez commencé à utiliser la plateforme.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;