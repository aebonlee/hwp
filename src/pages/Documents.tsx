import { useState, useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import type { HwpDocument } from '../types';
import '../styles/documents.css';

const Documents = (): ReactElement => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [documents, setDocuments] = useState<HwpDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchDocs = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }

      const { data, error } = await client
        .from(TABLES.documents)
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (!error && data) setDocuments(data as HwpDocument[]);
      setLoading(false);
    };
    fetchDocs();
  }, [user]);

  const handleDelete = async (docId: string) => {
    if (!confirm('문서를 삭제하시겠습니까?')) return;
    const client = getSupabase();
    if (!client) return;
    await client.from(TABLES.documents).delete().eq('id', docId);
    setDocuments(prev => prev.filter(d => d.id !== docId));
  };

  return (
    <>
      <SEOHead title={t('site.documents.title')} path="/documents" noindex />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.documents.title')}</h2>
          <p>{t('site.documents.subtitle')}</p>
        </div>
      </section>

      <section className="section documents-page">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <div className="loading-spinner"></div>
            </div>
          ) : documents.length === 0 ? (
            <div className="documents-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p>{t('site.documents.empty')}</p>
              <Link to="/editor" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                {t('site.editor.newDocument')}
              </Link>
            </div>
          ) : (
            <div className="documents-list">
              {documents.map(doc => (
                <div key={doc.id} className="document-card">
                  <div className="document-card-info">
                    <h3>
                      {doc.title}
                      <span className={`document-badge ${doc.is_public ? 'public' : 'private'}`}>
                        {doc.is_public ? t('site.documents.public') : t('site.documents.private')}
                      </span>
                    </h3>
                    <p>{new Date(doc.updated_at).toLocaleDateString('ko-KR')}</p>
                  </div>
                  <div className="document-card-actions">
                    <Link to={`/documents/${doc.id}`}>
                      <button>{t('site.documents.edit')}</button>
                    </Link>
                    <button className="danger" onClick={() => handleDelete(doc.id)}>
                      {t('site.documents.delete')}
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

export default Documents;
