import { useState, useEffect, useMemo, type ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import { downloadText } from '../utils/fileUtils';
import type { HwpTemplate, TemplateFieldDef } from '../types';
import '../styles/templates.css';

/** {{key}} 필드 자동 감지 */
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

const TemplateDetail = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [template, setTemplate] = useState<HwpTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [showExport, setShowExport] = useState(false);

  useEffect(() => {
    if (!user || !id) return;
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
  }, [user, id]);

  // content에서 {{key}} 자동 감지
  const fields = useMemo(() => {
    if (!template) return [];
    // DB에 저장된 fields 우선, 없으면 content에서 재감지
    return template.fields?.length ? template.fields : detectFields(template.content);
  }, [template]);

  // 실시간 미리보기
  const preview = useMemo(() => {
    if (!template) return '';
    let result = template.content;
    for (const field of fields) {
      const value = fieldValues[field.key] || `{{${field.key}}}`;
      result = result.replace(new RegExp(`\\{\\{${field.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\}`, 'g'), value);
    }
    return result;
  }, [template, fields, fieldValues]);

  // 필드가 모두 채워진 최종 콘텐츠
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
    navigate('/editor', { state: { content: filledContent, title: template?.title || '' } });
  };

  const handleExport = async (format: 'md' | 'hwpx') => {
    setShowExport(false);
    const fileName = template?.title || 'document';
    if (format === 'md') {
      downloadText(filledContent, `${fileName}.md`, 'text/markdown');
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
      } catch (err) {
        console.error('HWPX export error:', err);
      }
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
        </div>
      </section>
    );
  }

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
            <>
              <h3>{t('site.templates.detectedFields')} ({fields.length})</h3>
              <div className="template-fields">
                {fields.map(field => (
                  <div key={field.key} className="template-field">
                    <label>{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={fieldValues[field.key] || ''}
                        onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                        placeholder={field.placeholder || `{{${field.key}}}`}
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
            </>
          )}

          <h3>{t('site.templates.preview')}</h3>
          <div className="template-preview-box">{preview}</div>

          <div className="template-detail-actions">
            <button className="editor-btn primary" onClick={handleOpenInEditor}>
              {t('site.templates.openInEditor')}
            </button>

            <div className="template-export-wrapper">
              <button className="editor-btn" onClick={() => setShowExport(!showExport)}>
                {t('site.templates.export')} ▾
              </button>
              {showExport && (
                <div className="template-export-dropdown">
                  <button onClick={() => handleExport('md')}>{t('site.templates.exportMd')}</button>
                  <button onClick={() => handleExport('hwpx')}>{t('site.templates.exportHwpx')}</button>
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
