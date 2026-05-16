import { useState, useEffect, type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { updateProfile } from '../utils/auth';
import getSupabase, { TABLES } from '../utils/supabase';
import SEOHead from '../components/SEOHead';
import '../styles/auth.css';

interface CreditInfo {
  balance: number;
  total_charged: number;
  total_used: number;
}

interface CreditLog {
  id: string;
  type: 'charge' | 'usage';
  amount: number;
  description: string;
  created_at: string;
}

const MyPage = (): ReactElement => {
  const { t, language } = useLanguage();
  const { user, profile, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ displayName: '', avatarUrl: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [credits, setCredits] = useState<CreditInfo | null>(null);
  const [logs, setLogs] = useState<CreditLog[]>([]);

  useEffect(() => {
    if (profile) {
      setForm({
        displayName: profile.display_name || '',
        avatarUrl: profile.avatar_url || ''
      });
    }
  }, [profile]);

  useEffect(() => {
    if (!user) return;
    const client = getSupabase();
    if (!client) return;

    const fetchCredits = async () => {
      try {
        const { data } = await client
          .from(TABLES.credits)
          .select('balance, total_charged, total_used')
          .eq('user_id', user.id)
          .single();
        if (data) setCredits(data);
      } catch {
        // table may not exist yet
      }
    };

    const fetchLogs = async () => {
      try {
        const { data } = await client
          .from(TABLES.creditLogs)
          .select('id, type, amount, description, created_at')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(20);
        if (data) setLogs(data);
      } catch {
        // table may not exist yet
      }
    };

    fetchCredits();
    fetchLogs();
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      await updateProfile(user!.id, {
        display_name: form.displayName,
        avatar_url: form.avatarUrl
      });
      await refreshProfile();
      setEditing(false);
      setMessage(t('auth.profileUpdated'));
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const balance = credits?.balance ?? 0;
  const totalCharged = credits?.total_charged ?? 0;
  const totalUsed = credits?.total_used ?? 0;
  const usagePercent = totalCharged > 0 ? Math.min((totalUsed / totalCharged) * 100, 100) : 0;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return language === 'ko'
      ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
      : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <SEOHead title="마이페이지" path="/mypage" noindex />
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('auth.myPage')}</h1>
        </div>
      </section>

      <section className="auth-section">
        <div className="container">
          <div className="mypage-card">
            <div className="mypage-avatar">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt={profile.display_name} loading="lazy" />
              ) : (
                <div className="mypage-avatar-placeholder">
                  {(profile?.display_name || user?.email || '?')[0].toUpperCase()}
                </div>
              )}
            </div>

            <div className="mypage-info">
              {editing ? (
                <div className="mypage-edit-form">
                  <div className="auth-form-group">
                    <label>{t('auth.displayName')}</label>
                    <input
                      type="text"
                      value={form.displayName}
                      onChange={e => setForm({ ...form, displayName: e.target.value })}
                    />
                  </div>
                  <div className="mypage-edit-actions">
                    <button className="board-btn primary" onClick={handleSave} disabled={saving}>
                      {saving ? t('auth.saving') : t('auth.save')}
                    </button>
                    <button className="board-btn" onClick={() => setEditing(false)}>
                      {t('community.cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mypage-name">{profile?.display_name || t('auth.noName')}</h2>
                  <p className="mypage-email">{user?.email}</p>
                  <p className="mypage-provider">
                    {profile?.provider ? `${t('auth.loginWith')} ${profile.provider}` : t('auth.emailAccount')}
                  </p>
                  {profile?.role === 'admin' && (
                    <span className="mypage-role-badge">{t('auth.admin')}</span>
                  )}
                  <button className="board-btn" onClick={() => setEditing(true)} style={{ marginTop: '16px' }}>
                    {t('auth.editProfile')}
                  </button>
                </>
              )}

              {message && <div className="auth-message">{message}</div>}
            </div>

            {/* AI 크레딧 섹션 */}
            <div className="mypage-credits">
              <div className="credits-header">
                <h3>{t('site.mypage.creditsTitle')}</h3>
                <Link to="/pricing" className="credits-topup-link">
                  {t('site.mypage.topupLink')}
                </Link>
              </div>
              <div className="credits-balance">
                <span className="credits-balance-value">{balance.toLocaleString()}</span>
                <span className="credits-balance-unit">{t('site.mypage.creditsUnit')}</span>
              </div>
              <div className="credits-usage">
                <div className="credits-bar">
                  <div className="credits-bar-fill" style={{ width: `${usagePercent}%` }} />
                </div>
                <div className="credits-stats">
                  <span>{t('site.mypage.totalCharged')}: {totalCharged.toLocaleString()}{t('site.mypage.creditsUnit')}</span>
                  <span>{t('site.mypage.totalUsed')}: {totalUsed.toLocaleString()}{t('site.mypage.creditsUnit')}</span>
                </div>
              </div>
            </div>

            {/* 크레딧 사용 내역 */}
            <div className="mypage-credit-logs">
              <h3>{t('site.mypage.logsTitle')}</h3>
              {logs.length === 0 ? (
                <p className="credit-logs-empty">{t('site.mypage.logsEmpty')}</p>
              ) : (
                <div className="credit-logs-list">
                  {logs.map(log => (
                    <div key={log.id} className={`credit-log-item credit-log-${log.type}`}>
                      <div className="credit-log-left">
                        <span className={`credit-log-badge ${log.type}`}>
                          {log.type === 'charge' ? t('site.mypage.logCharge') : t('site.mypage.logUsage')}
                        </span>
                        <span className="credit-log-desc">{log.description}</span>
                      </div>
                      <div className="credit-log-right">
                        <span className={`credit-log-amount ${log.type}`}>
                          {log.type === 'charge' ? '+' : '-'}{log.amount.toLocaleString()}{t('site.mypage.creditsUnit')}
                        </span>
                        <span className="credit-log-date">{formatDate(log.created_at)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mypage-sections">
              <Link to="/mypage/orders" className="mypage-link-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>{t('auth.orderHistory')}</span>
              </Link>
            </div>

            <div className="mypage-footer">
              <button className="board-btn danger" onClick={handleSignOut}>
                {t('auth.logout')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPage;
