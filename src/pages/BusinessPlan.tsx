import { useState, useEffect, useMemo, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import AiKeySetup from '../components/AiKeySetup';
import AiFieldButton from '../components/AiFieldButton';
import getSupabase, { TABLES } from '../utils/supabase';
import { businessPlanTemplates } from '../data/businessPlanTemplates';
import type { BusinessPlanTemplate, BusinessPlanType, BusinessPlan as BPType } from '../types';
import '../styles/business-plan.css';
import '../styles/ai-field-assist.css';

type Step = 1 | 2 | 3 | 4;

const AUTOSAVE_KEY = 'hwp_bp_autosave';

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

  // Saved plans (load from DB)
  const [savedPlans, setSavedPlans] = useState<BPType[]>([]);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [showSavedPlans, setShowSavedPlans] = useState(false);

  // Search/filter for type cards
  const [typeSearch, setTypeSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'general' | 'government'>('all');

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

  // Autosave to localStorage on formData change
  useEffect(() => {
    if (!selectedType || Object.keys(formData).length === 0) return;
    const data = { type: selectedType, formData, timestamp: Date.now() };
    try { localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(data)); } catch { /* quota */ }
  }, [selectedType, formData]);

  // Restore autosave on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTOSAVE_KEY);
      if (!raw) return;
      const { type, formData: saved, timestamp } = JSON.parse(raw);
      // Only restore if less than 24h old
      if (Date.now() - timestamp > 86400000) return;
      if (type && saved && Object.keys(saved).length > 0) {
        setSelectedType(type);
        setFormData(saved);
        const tmpl = businessPlanTemplates.find(t => t.type === type);
        if (tmpl) {
          setOpenSections({ [tmpl.sections[0].id]: true });
          setStep(2);
          showToast(isKo ? '자동 저장된 내용을 복원했습니다' : 'Restored autosaved draft', 'info');
        }
      }
    } catch { /* parse error */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load saved plans from DB
  const loadSavedPlans = async () => {
    if (!user) return;
    setLoadingPlans(true);
    const client = getSupabase();
    if (!client) { setLoadingPlans(false); return; }
    const { data, error } = await client
      .from(TABLES.businessPlans)
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(20);
    if (!error && data) setSavedPlans(data as BPType[]);
    setLoadingPlans(false);
    setShowSavedPlans(true);
  };

  const loadPlan = (plan: BPType) => {
    setSelectedType(plan.plan_type);
    setFormData(plan.data);
    const tmpl = businessPlanTemplates.find(t => t.type === plan.plan_type);
    if (tmpl) {
      // Open all sections
      const allOpen: Record<string, boolean> = {};
      tmpl.sections.forEach(s => { allOpen[s.id] = true; });
      setOpenSections(allOpen);
    }
    setShowSavedPlans(false);
    setStep(2);
    showToast(isKo ? '저장된 계획서를 불러왔습니다' : 'Loaded saved plan', 'success');
  };

  const deletePlan = async (id: string) => {
    if (!confirm(isKo ? '이 사업계획서를 삭제하시겠습니까?' : 'Delete this business plan?')) return;
    const client = getSupabase();
    if (!client || !user) return;
    const { error } = await client.from(TABLES.businessPlans).delete().eq('id', id).eq('user_id', user.id);
    if (!error) {
      setSavedPlans(prev => prev.filter(p => p.id !== id));
      showToast(isKo ? '삭제되었습니다' : 'Deleted', 'success');
    }
  };

  // Filter business plan types
  const filteredTemplates = useMemo(() => {
    let list = businessPlanTemplates;
    if (categoryFilter !== 'all') {
      list = list.filter(t => t.category === categoryFilter);
    }
    if (typeSearch.trim()) {
      const q = typeSearch.toLowerCase();
      list = list.filter(t =>
        t.nameKo.toLowerCase().includes(q) ||
        t.nameEn.toLowerCase().includes(q) ||
        t.descKo.toLowerCase().includes(q) ||
        t.descEn.toLowerCase().includes(q)
      );
    }
    return list;
  }, [typeSearch, categoryFilter]);

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

  const openAllSections = () => {
    if (!template) return;
    const all: Record<string, boolean> = {};
    template.sections.forEach(s => { all[s.id] = true; });
    setOpenSections(all);
  };

  const handleFieldChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getTitle = () =>
    formData.businessName || formData.companyName || formData.invCompanyName || formData.projectTitle ||
    formData.eduName || formData.npName || formData.brandName || formData.ecName ||
    formData.itemTitle || formData.earlyCompanyName || formData.sbName || formData.rndTitle || formData.seName || '';

  const handleDownloadMd = () => {
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${getTitle() || 'business-plan'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${getTitle() || 'Business Plan'}</title>
<style>body{font-family:'Malgun Gothic',sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}blockquote{border-left:4px solid #0046C8;padding:8px 16px;margin:16px 0;background:#f9f9f9}
@media print{body{margin:0;padding:20px}h2{page-break-before:auto}}</style></head>
<body>${mdToHtml(generatedMarkdown)}</body></html>`;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${getTitle() || 'business-plan'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHwpx = async () => {
    try {
      const { markdownToHwpx } = await import('../lib/kordoc/index');
      const title = getTitle() || 'business-plan';
      const arrayBuffer = await markdownToHwpx(generatedMarkdown);
      const blob = new Blob([arrayBuffer], { type: 'application/hwp+zip' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.hwpx`;
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
      title: getTitle(),
      data: formData,
      generated_content: generatedMarkdown,
    });
    setSaving(false);

    if (error) {
      showToast(error.message, 'error');
    } else {
      showToast(t('site.businessPlan.saved'), 'success');
      // Clear autosave
      try { localStorage.removeItem(AUTOSAVE_KEY); } catch { /* ok */ }
    }
  };

  const handleOpenInEditor = () => {
    navigate('/md-editor', { state: { content: generatedMarkdown } });
  };

  const handleStartNew = () => {
    setStep(1);
    setSelectedType(null);
    setFormData({});
    setOpenSections({});
    setShowSavedPlans(false);
    try { localStorage.removeItem(AUTOSAVE_KEY); } catch { /* ok */ }
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
                <div
                  className={`bp-step ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
                  onClick={() => { if (step > s) setStep(s); }}
                  style={{ cursor: step > s ? 'pointer' : 'default' }}
                >
                  <span className="bp-step-num">{step > s ? '\u2713' : s}</span>
                  {stepLabels[i]}
                </div>
              </div>
            ))}
          </div>

          {/* Step 1: Type Selection */}
          {step === 1 && (
            <div className="bp-step1-section">
              {/* Search + Load Saved */}
              <div className="bp-step1-actions">
                <div className="bp-search-wrap">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    value={typeSearch}
                    onChange={e => setTypeSearch(e.target.value)}
                    placeholder={isKo ? '유형 검색...' : 'Search types...'}
                    className="bp-search-input"
                  />
                </div>
                {user && (
                  <button className="bp-btn" onClick={loadSavedPlans} disabled={loadingPlans}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {isKo ? '저장된 계획서' : 'Saved Plans'}
                  </button>
                )}
              </div>

              {/* Saved Plans Modal */}
              {showSavedPlans && (
                <div className="bp-saved-overlay" onClick={() => setShowSavedPlans(false)}>
                  <div className="bp-saved-modal" onClick={e => e.stopPropagation()}>
                    <div className="bp-saved-header">
                      <h3>{isKo ? '저장된 사업계획서' : 'Saved Business Plans'}</h3>
                      <button className="bp-saved-close" onClick={() => setShowSavedPlans(false)}>&times;</button>
                    </div>
                    {loadingPlans ? (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                        <div className="loading-spinner"></div>
                      </div>
                    ) : savedPlans.length === 0 ? (
                      <div className="bp-saved-empty">
                        {isKo ? '저장된 사업계획서가 없습니다' : 'No saved business plans'}
                      </div>
                    ) : (
                      <div className="bp-saved-list">
                        {savedPlans.map(plan => {
                          const tmpl = businessPlanTemplates.find(t => t.type === plan.plan_type);
                          return (
                            <div key={plan.id} className="bp-saved-item">
                              <div className="bp-saved-item-icon">{tmpl?.icon || '\u{1F4C4}'}</div>
                              <div className="bp-saved-item-info">
                                <strong>{plan.title || (isKo ? '제목 없음' : 'Untitled')}</strong>
                                <span>{isKo ? tmpl?.nameKo : tmpl?.nameEn} &middot; {new Date(plan.updated_at).toLocaleDateString()}</span>
                              </div>
                              <div className="bp-saved-item-actions">
                                <button className="bp-btn primary" onClick={() => loadPlan(plan)}>
                                  {isKo ? '불러오기' : 'Load'}
                                </button>
                                <button className="bp-btn danger" onClick={() => deletePlan(plan.id)}>
                                  {isKo ? '삭제' : 'Delete'}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Category Tabs */}
              <div className="bp-category-tabs">
                {(['all', 'general', 'government'] as const).map(cat => (
                  <button
                    key={cat}
                    className={`bp-category-tab ${categoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat === 'all' ? (isKo ? '전체' : 'All') :
                     cat === 'general' ? (isKo ? '일반 사업계획서' : 'General') :
                     (isKo ? '정부지원사업' : 'Government')}
                  </button>
                ))}
              </div>

              {/* Type Grid */}
              <div className="bp-type-grid">
                {filteredTemplates.map(tmpl => (
                  <div
                    key={tmpl.type}
                    className={`bp-type-card ${selectedType === tmpl.type ? 'selected' : ''}`}
                    onClick={() => handleTypeSelect(tmpl.type)}
                  >
                    {tmpl.category === 'government' && (
                      <span className="bp-gov-badge">{isKo ? '🏛️ 정부지원' : '🏛️ Gov'}</span>
                    )}
                    <div className="bp-type-icon">{tmpl.icon}</div>
                    <h3>{isKo ? tmpl.nameKo : tmpl.nameEn}</h3>
                    <p>{isKo ? tmpl.descKo : tmpl.descEn}</p>
                    <span className="bp-type-badge">
                      {tmpl.sections.length} {isKo ? '섹션' : 'sections'} &middot; {tmpl.sections.reduce((acc, s) => acc + s.fields.length, 0)} {isKo ? '항목' : 'fields'}
                    </span>
                  </div>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="bp-empty-search">
                  {isKo ? '검색 결과가 없습니다' : 'No results found'}
                </div>
              )}
            </div>
          )}

          {/* Step 2: Form Input */}
          {step === 2 && template && (
            <div className="bp-form-section">
              <AiKeySetup collapsed />

              <div className="bp-form-header">
                <div className="bp-form-header-left">
                  <span className="bp-form-type-icon">{template.icon}</span>
                  <span className="bp-form-type-name">{isKo ? template.nameKo : template.nameEn}</span>
                </div>
                <button className="bp-btn-text" onClick={openAllSections}>
                  {isKo ? '모두 펼치기' : 'Expand All'}
                </button>
              </div>

              <div className="bp-progress-bar">
                <span className="bp-progress-bar-label">{t('site.businessPlan.progress')}</span>
                <div className="bp-progress-bar-track">
                  <div className="bp-progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="bp-progress-bar-pct">{progress}%</span>
              </div>

              {template.sections.map((section, sIdx) => {
                const sectionFilled = section.fields.filter(f => formData[f.key]?.trim()).length;
                return (
                  <div key={section.id} className="bp-accordion">
                    <button
                      className={`bp-accordion-header ${openSections[section.id] ? 'open' : ''}`}
                      onClick={() => toggleSection(section.id)}
                    >
                      <span className="bp-accordion-header-left">
                        <span className="bp-section-num">{sIdx + 1}</span>
                        {isKo ? section.titleKo : section.titleEn}
                        <span className="bp-section-count">{sectionFilled}/{section.fields.length}</span>
                      </span>
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
                              {field.type === 'textarea' && (
                                <AiFieldButton
                                  fieldKey={field.key}
                                  fieldLabel={isKo ? field.labelKo : field.labelEn}
                                  sectionTitle={isKo ? section.titleKo : section.titleEn}
                                  templateName={isKo ? template.nameKo : template.nameEn}
                                  allFormData={formData}
                                  onAccept={(value) => handleFieldChange(field.key, value)}
                                />
                              )}
                            </label>
                            {field.type === 'textarea' ? (
                              <textarea
                                value={formData[field.key] || ''}
                                onChange={e => handleFieldChange(field.key, e.target.value)}
                                placeholder={field.placeholder}
                                rows={3}
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
                );
              })}

              <div className="bp-autosave-hint">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                {isKo ? '자동 저장 중' : 'Auto-saving'}
              </div>

              <div className="bp-actions">
                <button className="bp-btn" onClick={() => { setStep(1); setSelectedType(null); }}>
                  {t('site.businessPlan.prev')}
                </button>
                <button className="bp-btn primary" onClick={() => setStep(3)} disabled={progress < 10}>
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
                {getTitle() || t('site.businessPlan.title')}
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

              <button className="bp-btn" onClick={handleStartNew}>
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
