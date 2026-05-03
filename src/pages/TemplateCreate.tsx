import { useState, useEffect, useMemo, useCallback, type ReactElement, type DragEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import { getFileExtension } from '../utils/fileUtils';
import type { TemplateFieldDef } from '../types';
import '../styles/templates.css';

type Step = 1 | 2 | 3;

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

const TemplateCreate = (): ReactElement => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isKo = language === 'ko';

  const editId = searchParams.get('edit');
  const isEdit = !!editId;

  const [step, setStep] = useState<Step>(isEdit ? 2 : 1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [converting, setConverting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);

  // Load existing template for editing
  useEffect(() => {
    if (!editId || !user) return;
    setLoadingEdit(true);
    const load = async () => {
      const client = getSupabase();
      if (!client) { setLoadingEdit(false); return; }
      const { data, error } = await client
        .from(TABLES.templates)
        .select('*')
        .eq('id', editId)
        .eq('user_id', user.id)
        .single();
      if (!error && data) {
        setTitle(data.title || '');
        setDescription(data.description || '');
        setContent(data.content || '');
        setStep(2);
      }
      setLoadingEdit(false);
    };
    load();
  }, [editId, user]);

  // Field auto-detection
  const detectedFields = useMemo(() => detectFields(content), [content]);

  // Step 3: live preview
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const preview = useMemo(() => {
    let result = content;
    for (const field of detectedFields) {
      const value = fieldValues[field.key] || `{{${field.key}}}`;
      result = result.replace(new RegExp(`\\{\\{${field.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\}`, 'g'), value);
    }
    return result;
  }, [content, detectedFields, fieldValues]);

  // File upload handler
  const handleFile = useCallback(async (f: File) => {
    const ext = getFileExtension(f.name);
    if (ext !== 'hwp' && ext !== 'hwpx') return;

    setConverting(true);
    try {
      if (ext === 'hwpx') {
        const { parseHwpx } = await import('../lib/hwpx/parser');
        const buf = await f.arrayBuffer();
        const doc = await parseHwpx(buf);
        const { irToMarkdown } = await import('../lib/ir/toMarkdown');
        setContent(irToMarkdown(doc));
      } else {
        const { parseHwp } = await import('../lib/hwp/parser');
        const buf = await f.arrayBuffer();
        const doc = await parseHwp(buf);
        const { irToMarkdown } = await import('../lib/ir/toMarkdown');
        setContent(irToMarkdown(doc));
      }
      if (!title) setTitle(f.name.replace(/\.(hwp|hwpx)$/i, ''));
      setStep(2);
    } catch (err) {
      console.error('Parse error:', err);
      showToast((err as Error).message || (isKo ? '변환 중 오류가 발생했습니다' : 'Conversion error'), 'error');
    } finally {
      setConverting(false);
    }
  }, [title, showToast, isKo]);

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
  };

  const onFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files && input.files.length > 0) handleFile(input.files[0]);
    };
    input.click();
  };

  // Save (create or update)
  const handleSave = async () => {
    if (!title.trim() || !content.trim() || !user) return;
    setSaving(true);
    const client = getSupabase();
    if (!client) { setSaving(false); return; }

    if (isEdit && editId) {
      // Update existing
      const { error } = await client
        .from(TABLES.templates)
        .update({
          title: title.trim(),
          description: description.trim(),
          content,
          fields: detectedFields,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editId)
        .eq('user_id', user.id);

      setSaving(false);
      if (error) {
        showToast(error.message, 'error');
      } else {
        showToast(isKo ? '템플릿이 수정되었습니다' : 'Template updated', 'success');
        navigate('/templates');
      }
    } else {
      // Create new
      const { error } = await client.from(TABLES.templates).insert({
        user_id: user.id,
        title: title.trim(),
        description: description.trim(),
        content,
        fields: detectedFields,
      });

      setSaving(false);
      if (error) {
        showToast(error.message, 'error');
      } else {
        showToast(t('site.templates.saved'), 'success');
        navigate('/templates');
      }
    }
  };

  if (loadingEdit) {
    return (
      <section className="section">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
          <div className="loading-spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead title={isEdit ? (isKo ? '템플릿 편집' : 'Edit Template') : t('site.templates.create')} path="/templates/new" />

      <section className="page-header">
        <div className="container">
          <h2>{isEdit ? (isKo ? '템플릿 편집' : 'Edit Template') : t('site.templates.create')}</h2>
          <p>{t('site.templates.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container template-create">
          {/* Steps indicator */}
          <div className="template-steps">
            {([1, 2, 3] as Step[]).map(s => (
              <div key={s} className={`template-step ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}>
                <span className="template-step-num">{step > s ? '\u2713' : s}</span>
                {t(`site.templates.step${s}`)}
              </div>
            ))}
          </div>

          {/* Step 1: Source Selection */}
          {step === 1 && !isEdit && (
            converting ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div className="loading-spinner"></div>
                <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                  {isKo ? '변환 중...' : 'Converting...'}
                </p>
              </div>
            ) : (
              <div className="source-cards">
                <div
                  className={`source-card ${dragOver ? 'drag-over' : ''}`}
                  onClick={onFileSelect}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                >
                  <svg className="source-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <h3>{t('site.templates.upload')}</h3>
                  <p>{t('site.templates.uploadHint')}</p>
                </div>

                <div className="source-card" onClick={() => setStep(2)}>
                  <svg className="source-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  <h3>{t('site.templates.write')}</h3>
                  <p>{t('site.templates.writeHint')}</p>
                </div>
              </div>
            )
          )}

          {/* Step 2: Content Edit + Field Marking */}
          {step === 2 && (
            <div className="template-edit-section">
              <input
                className="template-title-input"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder={t('site.templates.titlePlaceholder')}
              />
              <input
                className="template-desc-input"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={t('site.templates.descPlaceholder')}
              />

              <div className="template-field-hint">
                {t('site.templates.fieldHint')}
              </div>

              <textarea
                className="template-content-editor"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder={isKo ? '마크다운으로 템플릿을 작성하세요...\n\n예시:\n# {{회사명}} 계약서\n\n계약일: {{계약일}}\n내용: {{계약내용}}' : 'Write your template in Markdown...\n\nExample:\n# {{company}} Contract\n\nDate: {{date}}\nContent: {{content}}'}
              />

              {/* Detected fields */}
              <div className="detected-fields">
                <div className="detected-fields-title">
                  {t('site.templates.detectedFields')} ({detectedFields.length})
                </div>
                {detectedFields.length > 0 ? (
                  <div className="detected-fields-list">
                    {detectedFields.map(f => (
                      <span key={f.key} className="detected-field-tag">{`{{${f.key}}}`}</span>
                    ))}
                  </div>
                ) : (
                  <div className="detected-fields-empty">{t('site.templates.noFields')}</div>
                )}
              </div>

              <div className="template-step-actions">
                {!isEdit && (
                  <button className="editor-btn" onClick={() => { setStep(1); }}>
                    {t('site.templates.prev')}
                  </button>
                )}
                <button
                  className="editor-btn primary"
                  onClick={() => { setFieldValues({}); setStep(3); }}
                  disabled={!title.trim() || !content.trim()}
                >
                  {t('site.templates.next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Preview + Save */}
          {step === 3 && (
            <div className="template-edit-section">
              {detectedFields.length > 0 && (
                <>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                    {t('site.templates.detectedFields')}
                  </h3>
                  <div className="template-fields">
                    {detectedFields.map(field => (
                      <div key={field.key} className="template-field">
                        <label>{field.label}</label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={fieldValues[field.key] || ''}
                            onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                            placeholder={`{{${field.key}}}`}
                            rows={3}
                          />
                        ) : (
                          <input
                            type="text"
                            value={fieldValues[field.key] || ''}
                            onChange={e => setFieldValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                            placeholder={`{{${field.key}}}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                {t('site.templates.preview')}
              </h3>
              <div className="template-preview-box">{preview}</div>

              <div className="template-step-actions">
                <button className="editor-btn" onClick={() => setStep(2)}>
                  {t('site.templates.prev')}
                </button>
                <button
                  className="editor-btn primary"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? '...' : isEdit ? (isKo ? '수정 저장' : 'Save Changes') : t('site.templates.save')}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TemplateCreate;
