import { useState, useEffect, type ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import { downloadText } from '../utils/fileUtils';
import type { HwpDocument } from '../types';
import '../styles/editor.css';

const DocumentDetail = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [doc, setDoc] = useState<HwpDocument | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !id) return;
    const fetchDoc = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }
      const { data, error } = await client
        .from(TABLES.documents)
        .select('*')
        .eq('id', id)
        .single();
      if (!error && data) {
        const d = data as HwpDocument;
        setDoc(d);
        setTitle(d.title);
        setContent(d.content);
      }
      setLoading(false);
    };
    fetchDoc();
  }, [user, id]);

  const handleSave = async () => {
    if (!doc) return;
    setSaving(true);
    const client = getSupabase();
    if (client) {
      await client
        .from(TABLES.documents)
        .update({ title, content, updated_at: new Date().toISOString() })
        .eq('id', doc.id);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!doc) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2>문서를 찾을 수 없습니다</h2>
          <button onClick={() => navigate('/documents')} style={{ marginTop: '16px' }}>목록으로 돌아가기</button>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead title={title} path={`/documents/${id}`} noindex />

      <section className="section editor-page">
        <div className="container">
          <div className="editor-toolbar">
            <input
              className="editor-title-input"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t('site.editor.untitled')}
            />
            <div className="editor-actions">
              <button className="editor-btn" onClick={() => downloadText(content, `${title}.md`)}>
                {t('site.convert.download')}
              </button>
              <button className="editor-btn primary" onClick={handleSave} disabled={saving}>
                {saving ? t('auth.saving') : t('site.editor.save')}
              </button>
            </div>
          </div>

          <div className="md-editor-wrapper">
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              style={{
                width: '100%',
                minHeight: '500px',
                padding: '20px',
                border: 'none',
                outline: 'none',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.6',
                resize: 'vertical',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentDetail;
