import { useState, useEffect, useMemo, type ReactElement } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import { downloadText } from '../utils/fileUtils';
import type { HwpTemplate, TemplateFieldDef } from '../types';
import '../styles/templates.css';

/** {{key}} field auto-detection */
function detectFields(content: string): TemplateFieldDef[] {
  const regex = /\{\{([^}]+)\}\}/g;
  const keys = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1].trim());
  }
  return Array.from(keys).map(key => ({
    key,
    label: key,
    type: key.length > 20 ? 'textarea' as const : 'text' as const,
    placeholder: '',
  }));
}

interface SampleData {
  title: string;
  description: string;
  content: string;
  fields: TemplateFieldDef[];
}

const TemplateDetail = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isKo = language === 'ko';

  const [template, setTemplate] = useState<HwpTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [showExport, setShowExport] = useState(false);

  // Check if this is a sample template passed via navigation state
  const sampleData = (location.state as { sample?: SampleData } | null)?.sample ?? null;

  useEffect(() => {
    // If it's a sample template from state, use directly
    if (sampleData) {
      setTemplate({
        id: id || '__sample',
        user_id: '',
        title: sampleData.title,
        description: sampleData.description,
        content: sampleData.content,
        fields: sampleData.fields,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      setLoading(false);
      return;
    }

    // Otherwise load from DB
    if (!user || !id) { setLoading(false); return; }
    const load = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }
      const { data, error } = await client
        .from(TABLES.templates)
        .select('*')
        .eq('id', id)
        .eq('user_id', user.id)
        .single();
      if (!error && data) setTemplate(data as HwpTemplate);
      setLoading(false);
    };
    load();
  }, [user, id, sampleData]);

  // Detect fields from content or use stored fields
  const fields = useMemo(() => {
    if (!template) return [];
    return template.fields?.length ? template.fields : detectFields(template.content);
  }, [template]);

  // Live preview
  const preview = useMemo(() => {
    if (!template) return '';
    let result = template.content;
    for (const field of fields) {
      const value = fieldValues[field.key] || `{{${field.key}}}`;
      result = result.replace(new RegExp(`\\{\\{${field.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\}`, 'g'), value);
    }
    return result;
  }, [template, fields, fieldValues]);

  // Filled content (empty string for unfilled fields)
  const filledContent = useMemo(() => {
    if (!template) return '';
    let result = template.content;
    for (const field of fields) {
      const value = fieldValues[field.key] || '';
      result = result.replace(new RegExp(`\\{\\{${field.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\}`, 'g'), value);
    }
    return result;
  }, [template, fields, fieldValues]);

  const handleOpenInEditor = () => {
    navigate('/md-editor', { state: { content: filledContent, title: template?.title || '' } });
  };

  const handleExport = async (format: 'md' | 'hwpx' | 'html') => {
    setShowExport(false);
    const fileName = template?.title || 'document';
    if (format === 'md') {
      downloadText(filledContent, `${fileName}.md`, 'text/markdown');
    } else if (format === 'html') {
      const htmlContent = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>${fileName}</title>
<style>body{font-family:'Malgun Gothic',sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}</style></head><body><pre style="white-space:pre-wrap;font-family:inherit">${filledContent}</pre></body></html>`;
      downloadText(htmlContent, `${fileName}.html`, 'text/html');
    } else {
      try {
        const { generateHwpx } = await import('../lib/hwpxWriter/generator');
        const blob = await generateHwpx(filledContent, fileName);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.hwpx`;
        a.click();
        URL.revokeObjectURL(url);
        showToast(isKo ? 'HWPX 파일이 다운로드되었습니다' : 'HWPX file downloaded', 'success');
      } catch (err) {
        console.error('HWPX export error:', err);
        showToast((err as Error).message || 'HWPX export failed', 'error');
      }
    }
  };

  // Save filled document to hwp_documents
  const handleSaveToDocuments = async () => {
    if (!user) {
      showToast(isKo ? '로그인이 필요합니다' : 'Login required', 'warning');
      return;
    }
    const client = getSupabase();
    if (!client) return;
    const { error } = await client.from(TABLES.documents).insert({
      user_id: user.id,
      title: template?.title || 'Untitled',
      content: filledContent,
      template_id: template?.id?.startsWith('__sample') ? null : template?.id,
    });
    if (error) {
      showToast(error.message, 'error');
    } else {
      showToast(isKo ? '문서함에 저장했습니다' : 'Saved to Documents', 'success');
    }
  };

  if (loading) {
    return (
      <section className="section">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
          <div className="loading-spinner"></div>
        </div>
      </section>
    );
  }

  if (!template) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2>{t('site.templates.notFound')}</h2>
          <button className="editor-btn" onClick={() => navigate('/templates')} style={{ marginTop: 16 }}>
            {isKo ? '템플릿 목록' : 'Template List'}
          </button>
        </div>
      </section>
    );
  }

  const filledCount = fields.filter(f => fieldValues[f.key]?.trim()).length;

  return (
    <>
      <SEOHead title={template.title} path={`/templates/${id}`} />

      <section className="page-header">
        <div className="container">
          <h2>{template.title}</h2>
          {template.description && <p>{template.description}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container template-detail">
          {fields.length > 0 && (
            <div className="template-detail-fields">
              <div className="template-detail-fields-header">
                <h3>{t('site.templates.detectedFields')} ({fields.length})</h3>
                <span className="template-detail-progress">
                  {filledCount}/{fields.length} {isKo ? '입력됨' : 'filled'}
                </span>
              </div>
              <div className="template-fields">
                {fields.map(field => (
                  <div key={field.key} className="template-field">
                    <label>{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={fieldValues[field.key] || ''}
                        onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                        placeholder={field.placeholder || `{{${field.key}}}`}
                        rows={3}
                      />
                    ) : (
                      <input
                        type="text"
                        value={fieldValues[field.key] || ''}
                        onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                        placeholder={field.placeholder || `{{${field.key}}}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="template-detail-preview">
            <h3>{t('site.templates.preview')}</h3>
            <div className="template-preview-box">{preview}</div>
          </div>

          <div className="template-detail-actions">
            <button className="editor-btn primary" onClick={handleOpenInEditor}>
              {t('site.templates.openInEditor')}
            </button>

            {user && (
              <button className="editor-btn" onClick={handleSaveToDocuments}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                </svg>
                {isKo ? '문서함에 저장' : 'Save to Documents'}
              </button>
            )}

            <div className="template-export-wrapper">
              <button className="editor-btn" onClick={() => setShowExport(!showExport)}>
                {t('site.templates.export')} &#9662;
              </button>
              {showExport && (
                <div className="template-export-dropdown">
                  <button onClick={() => handleExport('md')}>{t('site.templates.exportMd')}</button>
                  <button onClick={() => handleExport('hwpx')}>{t('site.templates.exportHwpx')}</button>
                  <button onClick={() => handleExport('html')}>HTML (.html)</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TemplateDetail;
