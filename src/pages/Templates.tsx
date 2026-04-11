import { useState, useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import type { HwpTemplate } from '../types';
import '../styles/templates.css';

const Templates = (): ReactElement => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const [templates, setTemplates] = useState<HwpTemplate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const loadTemplates = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }
      const { data, error } = await client
        .from(TABLES.templates)
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
      if (!error && data) setTemplates(data as HwpTemplate[]);
      setLoading(false);
    };
    loadTemplates();
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!confirm(t('site.templates.deleteConfirm'))) return;
    const client = getSupabase();
    if (!client || !user) return;
    const { error } = await client
      .from(TABLES.templates)
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (!error) {
      setTemplates(prev => prev.filter(tmpl => tmpl.id !== id));
      showToast(t('site.templates.deleted'), 'success');
    }
  };

  return (
    <>
      <SEOHead title={t('site.templates.title')} path="/templates" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.templates.title')}</h2>
          <p>{t('site.templates.subtitle')}</p>
        </div>
      </section>

      <section className="section templates-page">
        <div className="container">
          <div className="templates-header">
            <h3>{t('site.templates.title')}</h3>
            <Link to="/templates/new">
              <button className="editor-btn primary">{t('site.templates.create')}</button>
            </Link>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
              <div className="loading-spinner"></div>
            </div>
          ) : templates.length === 0 ? (
            <div className="templates-empty">
              <svg className="templates-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h3>{t('site.templates.empty')}</h3>
              <p>{t('site.templates.emptyHint')}</p>
              <Link to="/templates/new">
                <button className="editor-btn primary" style={{ padding: '12px 32px' }}>
                  {t('site.templates.create')}
                </button>
              </Link>
            </div>
          ) : (
            <div className="template-grid">
              {templates.map(tmpl => (
                <div key={tmpl.id} className="template-card">
                  <h3>{tmpl.title}</h3>
                  {tmpl.description && <p>{tmpl.description}</p>}
                  <div className="template-card-meta">
                    <span className="template-card-badge">
                      {tmpl.fields?.length || 0} {t('site.templates.fields')}
                    </span>
                    <span>{new Date(tmpl.updated_at).toLocaleDateString()}</span>
                  </div>
                  <div className="template-card-actions">
                    <Link to={`/templates/${tmpl.id}`}>
                      <button className="primary">{t('site.templates.use')}</button>
                    </Link>
                    <button className="danger" onClick={() => handleDelete(tmpl.id)}>
                      {t('site.templates.delete')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Templates;
