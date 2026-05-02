import { useState, useMemo, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import { businessPlanTemplates } from '../data/businessPlanTemplates';
import type { BusinessPlanTemplate, BusinessPlanType } from '../types';
import '../styles/business-plan.css';

type Step = 1 | 2 | 3 | 4;

/** Simple markdown → HTML for preview */
function mdToHtml(md: string): string {
  let html = md
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (line: string) => {
    if (/^\|[\s-:|]+\|$/.test(line)) return '';
    const cells = line.split('|').filter(c => c.trim());
    const tag = 'td';
    return '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
  });
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)/g, '<table>$1</table>');
  // Merge consecutive tables
  html = html.replace(/<\/table>\s*<table>/g, '');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<table') || p.startsWith('<blockquote') || p.startsWith('<tr')) return p;
    return `<p>${p}</p>`;
  }).join('\n');

  return html;
}

const BusinessPlan = (): ReactElement => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';

  const [step, setStep] = useState<Step>(1);
  const [selectedType, setSelectedType] = useState<BusinessPlanType | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [previewTab, setPreviewTab] = useState<'markdown' | 'preview'>('preview');
  const [saving, setSaving] = useState(false);

  const template: BusinessPlanTemplate | null = useMemo(
    () => businessPlanTemplates.find(t => t.type === selectedType) ?? null,
    [selectedType],
  );

  // Generate markdown from template + form data
  const generatedMarkdown = useMemo(() => {
    if (!template) return '';
    let md = template.markdownTemplate;
    for (const section of template.sections) {
      for (const field of section.fields) {
        const value = formData[field.key] || '';
        const regex = new RegExp(`\\{\\{${field.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\}`, 'g');
        md = md.replace(regex, value || `(${isKo ? field.labelKo : field.labelEn})`);
      }
    }
    return md;
  }, [template, formData, isKo]);

  // Progress calculation
  const progress = useMemo(() => {
    if (!template) return 0;
    const requiredFields = template.sections.flatMap(s => s.fields.filter(f => f.required));
    if (requiredFields.length === 0) return 100;
    const filled = requiredFields.filter(f => formData[f.key]?.trim()).length;
    return Math.round((filled / requiredFields.length) * 100);
  }, [template, formData]);

  // Handlers
  const handleTypeSelect = (type: BusinessPlanType) => {
    setSelectedType(type);
    setFormData({});
    const tmpl = businessPlanTemplates.find(t => t.type === type);
    if (tmpl) {
      setOpenSections({ [tmpl.sections[0].id]: true });
    }
    setStep(2);
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFieldChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleDownloadMd = () => {
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || 'business-plan'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${formData.businessName || formData.companyName || 'Business Plan'}</title>
<style>body{font-family:sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}blockquote{border-left:4px solid #0046C8;padding:8px 16px;margin:16px 0;background:#f9f9f9}</style></head>
<body>${mdToHtml(generatedMarkdown)}</body></html>`;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || 'business-plan'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHwpx = async () => {
    try {
      const { generateHwpx } = await import('../lib/hwpxWriter/generator');
      const title = formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || 'business-plan';
      const blob = await generateHwpx(generatedMarkdown, title);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || 'business-plan'}.hwpx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      showToast((err as Error).message || 'HWPX export failed', 'error');
    }
  };

  const handleSaveToDb = async () => {
    if (!user) {
      showToast(isKo ? '로그인이 필요합니다' : 'Login required', 'warning');
      return;
    }
    const client = getSupabase();
    if (!client) return;

    setSaving(true);
    const { error } = await client.from(TABLES.businessPlans).insert({
      user_id: user.id,
      plan_type: selectedType,
      title: formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || '',
      data: formData,
      generated_content: generatedMarkdown,
    });
    setSaving(false);

    if (error) {
      showToast(error.message, 'error');
    } else {
      showToast(t('site.businessPlan.saved'), 'success');
    }
  };

  const handleOpenInEditor = () => {
    navigate('/editor', { state: { content: generatedMarkdown } });
  };

  const stepLabels = [
    t('site.businessPlan.step1'),
    t('site.businessPlan.step2'),
    t('site.businessPlan.step3'),
    t('site.businessPlan.step4'),
  ];

  return (
    <>
      <SEOHead title={t('site.businessPlan.title')} path="/business-plan" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.businessPlan.title')}</h2>
          <p>{t('site.businessPlan.subtitle')}</p>
        </div>
      </section>

      <section className="section bp-wizard">
        <div className="container">
          {/* Steps indicator */}
          <div className="bp-steps">
            {([1, 2, 3, 4] as Step[]).map((s, i) => (
              <div key={s} style={{ display: 'contents' }}>
                {i > 0 && <div className="bp-step-connector" />}
                <div className={`bp-step ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}>
                  <span className="bp-step-num">{s}</span>
                  {stepLabels[i]}
                </div>
              </div>
            ))}
          </div>

          {/* Step 1: Type Selection */}
          {step === 1 && (
            <div className="bp-type-grid">
              {businessPlanTemplates.map(tmpl => (
                <div
                  key={tmpl.type}
                  className={`bp-type-card ${selectedType === tmpl.type ? 'selected' : ''}`}
                  onClick={() => handleTypeSelect(tmpl.type)}
                >
                  <div className="bp-type-icon">{tmpl.icon}</div>
                  <h3>{isKo ? tmpl.nameKo : tmpl.nameEn}</h3>
                  <p>{isKo ? tmpl.descKo : tmpl.descEn}</p>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Form Input */}
          {step === 2 && template && (
            <div className="bp-form-section">
              <div className="bp-progress-bar">
                <span className="bp-progress-bar-label">{t('site.businessPlan.progress')}</span>
                <div className="bp-progress-bar-track">
                  <div className="bp-progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="bp-progress-bar-pct">{progress}%</span>
              </div>

              {template.sections.map(section => (
                <div key={section.id} className="bp-accordion">
                  <button
                    className={`bp-accordion-header ${openSections[section.id] ? 'open' : ''}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    {isKo ? section.titleKo : section.titleEn}
                    <svg className="bp-accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openSections[section.id] && (
                    <div className="bp-accordion-body">
                      {section.fields.map(field => (
                        <div key={field.key} className="bp-field">
                          <label>
                            {isKo ? field.labelKo : field.labelEn}
                            {field.required && <span className="required">*</span>}
                          </label>
                          {field.type === 'textarea' ? (
                            <textarea
                              value={formData[field.key] || ''}
                              onChange={e => handleFieldChange(field.key, e.target.value)}
                              placeholder={field.placeholder}
                            />
                          ) : field.type === 'select' && field.options ? (
                            <select
                              value={formData[field.key] || ''}
                              onChange={e => handleFieldChange(field.key, e.target.value)}
                            >
                              <option value="">{isKo ? '선택하세요' : 'Select...'}</option>
                              {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
                              value={formData[field.key] || ''}
                              onChange={e => handleFieldChange(field.key, e.target.value)}
                              placeholder={field.placeholder}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="bp-actions">
                <button className="bp-btn" onClick={() => { setStep(1); setSelectedType(null); }}>
                  {t('site.businessPlan.prev')}
                </button>
                <button className="bp-btn primary" onClick={() => setStep(3)}>
                  {t('site.businessPlan.next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Preview */}
          {step === 3 && (
            <div className="bp-preview-section">
              <div className="bp-preview-tabs">
                <button
                  className={`bp-preview-tab ${previewTab === 'preview' ? 'active' : ''}`}
                  onClick={() => setPreviewTab('preview')}
                >
                  {t('site.businessPlan.previewTab')}
                </button>
                <button
                  className={`bp-preview-tab ${previewTab === 'markdown' ? 'active' : ''}`}
                  onClick={() => setPreviewTab('markdown')}
                >
                  {t('site.businessPlan.markdownTab')}
                </button>
              </div>

              <div className="bp-preview-content">
                {previewTab === 'markdown' ? (
                  <pre>{generatedMarkdown}</pre>
                ) : (
                  <div
                    className="bp-preview-rendered"
                    dangerouslySetInnerHTML={{ __html: mdToHtml(generatedMarkdown) }}
                  />
                )}
              </div>

              <div className="bp-actions">
                <button className="bp-btn" onClick={() => setStep(2)}>
                  {t('site.businessPlan.prev')}
                </button>
                <button className="bp-btn primary" onClick={() => setStep(4)}>
                  {t('site.businessPlan.next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Export */}
          {step === 4 && (
            <div className="bp-export-section">
              <div className="bp-export-success">{template?.icon}</div>
              <div className="bp-export-title">
                {formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle || t('site.businessPlan.title')}
              </div>
              <div className="bp-export-subtitle">
                {isKo ? '사업계획서가 준비되었습니다. 원하는 형식으로 내보내세요.' : 'Your business plan is ready. Export in your preferred format.'}
              </div>

              <div className="bp-export-buttons">
                <button className="bp-export-btn primary" onClick={handleDownloadHwpx}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {t('site.businessPlan.downloadHwpx')}
                </button>
                <button className="bp-export-btn" onClick={handleDownloadMd}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {t('site.businessPlan.downloadMd')}
                </button>
                <button className="bp-export-btn" onClick={handleDownloadHtml}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  {t('site.businessPlan.downloadHtml')}
                </button>
                {user && (
                  <button className="bp-export-btn" onClick={handleSaveToDb} disabled={saving}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    {saving ? '...' : t('site.businessPlan.saveToDb')}
                  </button>
                )}
                <button className="bp-export-btn" onClick={handleOpenInEditor}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  {t('site.businessPlan.openInEditor')}
                </button>
              </div>

              <button
                className="bp-btn"
                onClick={() => {
                  setStep(1);
                  setSelectedType(null);
                  setFormData({});
                  setOpenSections({});
                }}
              >
                {t('site.businessPlan.startNew')}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BusinessPlan;
