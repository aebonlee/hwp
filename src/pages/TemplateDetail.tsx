import { useState, useMemo, type ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { templates } from '../data/templates';
import '../styles/templates.css';

const TemplateDetail = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const template = useMemo(() => templates.find(tmpl => tmpl.id === id), [id]);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  if (!template) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2>템플릿을 찾을 수 없습니다</h2>
        </div>
      </section>
    );
  }

  const preview = useMemo(() => {
    let content = template.content;
    for (const field of template.fields) {
      const value = fieldValues[field.key] || field.placeholder;
      content = content.replace(new RegExp(`\\{\\{${field.key}\\}\\}`, 'g'), value);
    }
    return content;
  }, [template, fieldValues]);

  const handleGenerate = () => {
    navigate('/editor', { state: { content: preview, title: language === 'en' ? template.title_en : template.title } });
  };

  return (
    <>
      <SEOHead title={language === 'en' ? template.title_en : template.title} path={`/templates/${id}`} />

      <section className="page-header">
        <div className="container">
          <h2>{language === 'en' ? template.title_en : template.title}</h2>
          <p>{template.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container template-detail">
          <h3>{t('site.templates.fillFields')}</h3>
          <div className="template-fields">
            {template.fields.map(field => (
              <div key={field.key} className="template-field">
                <label>{language === 'en' ? field.label_en : field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={fieldValues[field.key] || ''}
                    onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={fieldValues[field.key] || ''}
                    onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>

          <h3>{t('site.templates.preview')}</h3>
          <div className="template-preview-box">
            {preview}
          </div>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <button
              className="editor-btn primary"
              onClick={handleGenerate}
              style={{ padding: '12px 32px', fontSize: '16px' }}
            >
              {t('site.templates.generate')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TemplateDetail;
