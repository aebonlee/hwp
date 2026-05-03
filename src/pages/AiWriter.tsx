import { useState, useRef, useCallback, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import '../styles/ai-writer.css';

type AiProvider = 'claude' | 'openai';

interface DocPreset {
  id: string;
  iconKo: string;
  labelKo: string;
  labelEn: string;
  descKo: string;
  descEn: string;
  promptKo: string;
  promptEn: string;
}

const DOC_PRESETS: DocPreset[] = [
  {
    id: 'report',
    iconKo: '📊',
    labelKo: '보고서',
    labelEn: 'Report',
    descKo: '업무/프로젝트/연구 보고서',
    descEn: 'Business/project/research report',
    promptKo: '다음 주제에 대한 전문적인 보고서를 마크다운 형식으로 작성해 주세요. 목차, 요약, 본문, 결론을 포함해 주세요.',
    promptEn: 'Write a professional report in markdown format on the following topic. Include table of contents, summary, body, and conclusion.',
  },
  {
    id: 'proposal',
    iconKo: '💡',
    labelKo: '제안서/기획서',
    labelEn: 'Proposal',
    descKo: '사업/프로젝트 제안서',
    descEn: 'Business/project proposal',
    promptKo: '다음 주제에 대한 제안서를 마크다운 형식으로 작성해 주세요. 배경, 목적, 추진계획, 기대효과, 예산을 포함해 주세요.',
    promptEn: 'Write a proposal in markdown format on the following topic. Include background, objectives, plan, expected outcomes, and budget.',
  },
  {
    id: 'minutes',
    iconKo: '📝',
    labelKo: '회의록',
    labelEn: 'Minutes',
    descKo: '회의/미팅 회의록',
    descEn: 'Meeting minutes',
    promptKo: '다음 내용을 바탕으로 회의록을 마크다운 형식으로 작성해 주세요. 일시, 참석자, 안건, 논의사항, 결정사항, 후속조치를 포함해 주세요.',
    promptEn: 'Write meeting minutes in markdown format based on the following. Include date, attendees, agenda, discussion, decisions, and action items.',
  },
  {
    id: 'email',
    iconKo: '✉️',
    labelKo: '공문/이메일',
    labelEn: 'Official Letter',
    descKo: '공식 서한/이메일 초안',
    descEn: 'Official letter or email draft',
    promptKo: '다음 내용을 바탕으로 격식있는 공문/이메일을 마크다운 형식으로 작성해 주세요.',
    promptEn: 'Write a formal official letter/email in markdown format based on the following.',
  },
  {
    id: 'resume',
    iconKo: '👤',
    labelKo: '이력서/자기소개서',
    labelEn: 'Resume/CV',
    descKo: '이력서 또는 자기소개서',
    descEn: 'Resume or cover letter',
    promptKo: '다음 정보를 바탕으로 전문적인 이력서와 자기소개서를 마크다운 형식으로 작성해 주세요.',
    promptEn: 'Write a professional resume and cover letter in markdown format based on the following information.',
  },
  {
    id: 'lecture',
    iconKo: '🎓',
    labelKo: '강의자료/교안',
    labelEn: 'Lecture Material',
    descKo: '강의안/교육 교재',
    descEn: 'Lecture notes/educational material',
    promptKo: '다음 주제에 대한 강의자료를 마크다운 형식으로 작성해 주세요. 학습 목표, 개요, 핵심 내용, 실습/과제, 참고자료를 포함해 주세요.',
    promptEn: 'Write lecture material in markdown format on the following topic. Include learning objectives, overview, key content, exercises, and references.',
  },
  {
    id: 'contract',
    iconKo: '📋',
    labelKo: '계약서/약관',
    labelEn: 'Contract/Terms',
    descKo: '계약서 또는 이용약관 초안',
    descEn: 'Contract or terms of service draft',
    promptKo: '다음 내용을 바탕으로 계약서/약관 초안을 마크다운 형식으로 작성해 주세요. 조항별로 명확하게 구분해 주세요.',
    promptEn: 'Write a contract/terms draft in markdown format based on the following. Clearly separate each clause.',
  },
  {
    id: 'free',
    iconKo: '✨',
    labelKo: '자유 작성',
    labelEn: 'Free Writing',
    descKo: '직접 프롬프트를 입력하여 문서 생성',
    descEn: 'Write your own prompt for document generation',
    promptKo: '',
    promptEn: '',
  },
];

const STORAGE_KEY_PROVIDER = 'hwp_ai_provider';
const STORAGE_KEY_CLAUDE = 'hwp_ai_claude_key';
const STORAGE_KEY_OPENAI = 'hwp_ai_openai_key';
const STORAGE_KEY_MODEL_CLAUDE = 'hwp_ai_claude_model';
const STORAGE_KEY_MODEL_OPENAI = 'hwp_ai_openai_model';

const CLAUDE_MODELS = [
  { id: 'claude-sonnet-4-20250514', label: 'Claude Sonnet 4' },
  { id: 'claude-3-5-haiku-20241022', label: 'Claude 3.5 Haiku' },
];

const OPENAI_MODELS = [
  { id: 'gpt-4o', label: 'GPT-4o' },
  { id: 'gpt-4o-mini', label: 'GPT-4o Mini' },
  { id: 'gpt-4.1', label: 'GPT-4.1' },
  { id: 'gpt-4.1-mini', label: 'GPT-4.1 Mini' },
];

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

  html = html.replace(/^\|(.+)\|$/gm, (line: string) => {
    if (/^\|[\s-:|]+\|$/.test(line)) return '';
    const cells = line.split('|').filter(c => c.trim());
    return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
  });
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)/g, '<table>$1</table>');
  html = html.replace(/<\/table>\s*<table>/g, '');

  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<table') || p.startsWith('<blockquote') || p.startsWith('<tr')) return p;
    return `<p>${p}</p>`;
  }).join('\n');

  return html;
}

const AiWriter = (): ReactElement => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';
  const abortRef = useRef<AbortController | null>(null);

  // State
  const [provider, setProvider] = useState<AiProvider>(
    () => (localStorage.getItem(STORAGE_KEY_PROVIDER) as AiProvider) || 'claude'
  );
  const [claudeKey, setClaudeKey] = useState(() => localStorage.getItem(STORAGE_KEY_CLAUDE) || '');
  const [openaiKey, setOpenaiKey] = useState(() => localStorage.getItem(STORAGE_KEY_OPENAI) || '');
  const [claudeModel, setClaudeModel] = useState(
    () => localStorage.getItem(STORAGE_KEY_MODEL_CLAUDE) || CLAUDE_MODELS[0].id
  );
  const [openaiModel, setOpenaiModel] = useState(
    () => localStorage.getItem(STORAGE_KEY_MODEL_OPENAI) || OPENAI_MODELS[0].id
  );
  const [showKey, setShowKey] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [topic, setTopic] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [previewTab, setPreviewTab] = useState<'markdown' | 'preview'>('preview');
  const [saving, setSaving] = useState(false);

  const apiKey = provider === 'claude' ? claudeKey : openaiKey;
  const model = provider === 'claude' ? claudeModel : openaiModel;

  const saveApiKey = useCallback((key: string) => {
    if (provider === 'claude') {
      setClaudeKey(key);
      localStorage.setItem(STORAGE_KEY_CLAUDE, key);
    } else {
      setOpenaiKey(key);
      localStorage.setItem(STORAGE_KEY_OPENAI, key);
    }
  }, [provider]);

  const handleProviderChange = useCallback((p: AiProvider) => {
    setProvider(p);
    localStorage.setItem(STORAGE_KEY_PROVIDER, p);
  }, []);

  const handleModelChange = useCallback((m: string) => {
    if (provider === 'claude') {
      setClaudeModel(m);
      localStorage.setItem(STORAGE_KEY_MODEL_CLAUDE, m);
    } else {
      setOpenaiModel(m);
      localStorage.setItem(STORAGE_KEY_MODEL_OPENAI, m);
    }
  }, [provider]);

  // Build final prompt
  const buildPrompt = (): string => {
    const preset = DOC_PRESETS.find(p => p.id === selectedPreset);
    if (!preset) return '';
    if (preset.id === 'free') return customPrompt;
    const base = isKo ? preset.promptKo : preset.promptEn;
    return `${base}\n\n${isKo ? '주제/내용' : 'Topic/Content'}: ${topic}`;
  };

  const canGenerate = apiKey.trim() && selectedPreset && (selectedPreset === 'free' ? customPrompt.trim() : topic.trim());

  // Generate via Claude API
  const generateClaude = async (prompt: string, signal: AbortSignal) => {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': claudeKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: claudeModel,
        max_tokens: 8192,
        stream: true,
        messages: [{ role: 'user', content: prompt }],
        system: isKo
          ? '당신은 전문 문서 작성 AI입니다. 요청받은 문서를 마크다운 형식으로 정확하고 전문적으로 작성해 주세요. 마크다운 코드블록(```)으로 감싸지 말고 순수 마크다운만 출력해 주세요.'
          : 'You are a professional document writing AI. Write the requested document in markdown format accurately and professionally. Do not wrap in markdown code blocks (```), output pure markdown only.',
      }),
      signal,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Claude API error: ${res.status}`);
    }

    const reader = res.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder();
    let buffer = '';
    let content = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            content += parsed.delta.text;
            setGeneratedContent(content);
          }
        } catch {
          // skip non-JSON lines
        }
      }
    }
    return content;
  };

  // Generate via OpenAI API
  const generateOpenAI = async (prompt: string, signal: AbortSignal) => {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: openaiModel,
        max_tokens: 8192,
        stream: true,
        messages: [
          {
            role: 'system',
            content: isKo
              ? '당신은 전문 문서 작성 AI입니다. 요청받은 문서를 마크다운 형식으로 정확하고 전문적으로 작성해 주세요. 마크다운 코드블록(```)으로 감싸지 말고 순수 마크다운만 출력해 주세요.'
              : 'You are a professional document writing AI. Write the requested document in markdown format accurately and professionally. Do not wrap in markdown code blocks (```), output pure markdown only.',
          },
          { role: 'user', content: prompt },
        ],
      }),
      signal,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `OpenAI API error: ${res.status}`);
    }

    const reader = res.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder();
    let buffer = '';
    let content = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            content += delta;
            setGeneratedContent(content);
          }
        } catch {
          // skip
        }
      }
    }
    return content;
  };

  const handleGenerate = async () => {
    const prompt = buildPrompt();
    if (!prompt.trim()) return;

    setGenerating(true);
    setGeneratedContent('');
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      if (provider === 'claude') {
        await generateClaude(prompt, controller.signal);
      } else {
        await generateOpenAI(prompt, controller.signal);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        showToast((err as Error).message || t('site.aiWriter.error'), 'error');
      }
    } finally {
      setGenerating(false);
      abortRef.current = null;
    }
  };

  const handleStop = () => {
    abortRef.current?.abort();
  };

  const handleReset = () => {
    setSelectedPreset(null);
    setTopic('');
    setCustomPrompt('');
    setGeneratedContent('');
  };

  // Export handlers
  const handleDownloadMd = () => {
    const blob = new Blob([generatedContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-document-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Document</title></head><body>${mdToHtml(generatedContent)}</body></html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-document-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedContent);
    showToast(t('site.convert.copied'), 'success');
  };

  const handleSaveToDb = async () => {
    if (!user) {
      showToast(isKo ? '로그인이 필요합니다' : 'Login required', 'error');
      return;
    }
    setSaving(true);
    try {
      const client = getSupabase();
      if (!client) throw new Error('Supabase not configured');
      const title = generatedContent.split('\n')[0]?.replace(/^#+\s*/, '').trim() || 'AI Document';
      await client.from(TABLES.documents).insert({
        user_id: user.id,
        title,
        content: generatedContent,
        metadata: { source: 'ai-writer', provider, model },
      });
      showToast(t('site.aiWriter.saved'), 'success');
    } catch (err) {
      showToast((err as Error).message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleOpenInEditor = () => {
    navigate('/md-editor', { state: { content: generatedContent } });
  };

  const models = provider === 'claude' ? CLAUDE_MODELS : OPENAI_MODELS;

  return (
    <>
      <SEOHead title={t('site.aiWriter.title')} path="/ai-writer" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.aiWriter.title')}</h2>
          <p>{t('site.aiWriter.subtitle')}</p>
        </div>
      </section>

      <section className="section ai-writer-page">
        <div className="container">

          {/* ── API Key Setup ── */}
          <div className="ai-config-panel">
            <div className="ai-config-header">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <h3>{t('site.aiWriter.apiSetup')}</h3>
            </div>

            <div className="ai-provider-tabs">
              <button
                className={`ai-provider-tab ${provider === 'claude' ? 'active' : ''}`}
                onClick={() => handleProviderChange('claude')}
              >
                <span className="ai-provider-icon">C</span>
                Claude (Anthropic)
              </button>
              <button
                className={`ai-provider-tab ${provider === 'openai' ? 'active' : ''}`}
                onClick={() => handleProviderChange('openai')}
              >
                <span className="ai-provider-icon">G</span>
                ChatGPT (OpenAI)
              </button>
            </div>

            <div className="ai-key-row">
              <div className="ai-key-input-wrap">
                <input
                  type={showKey ? 'text' : 'password'}
                  className="ai-key-input"
                  placeholder={provider === 'claude' ? 'sk-ant-api03-...' : 'sk-proj-...'}
                  value={apiKey}
                  onChange={e => saveApiKey(e.target.value)}
                />
                <button className="ai-key-toggle" onClick={() => setShowKey(!showKey)} title={showKey ? 'Hide' : 'Show'}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    {showKey ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
              <select
                className="ai-model-select"
                value={model}
                onChange={e => handleModelChange(e.target.value)}
              >
                {models.map(m => (
                  <option key={m.id} value={m.id}>{m.label}</option>
                ))}
              </select>
            </div>

            <p className="ai-key-hint">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              {t('site.aiWriter.keyHint')}
            </p>
          </div>

          {/* ── Document Type Selection ── */}
          {!generatedContent && (
            <>
              <h3 className="ai-section-title">{t('site.aiWriter.selectType')}</h3>
              <div className="ai-preset-grid">
                {DOC_PRESETS.map(p => (
                  <div
                    key={p.id}
                    className={`ai-preset-card ${selectedPreset === p.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPreset(p.id)}
                  >
                    <div className="ai-preset-icon">{p.iconKo}</div>
                    <h4>{isKo ? p.labelKo : p.labelEn}</h4>
                    <p>{isKo ? p.descKo : p.descEn}</p>
                  </div>
                ))}
              </div>

              {/* ── Prompt Input ── */}
              {selectedPreset && (
                <div className="ai-prompt-section">
                  {selectedPreset === 'free' ? (
                    <>
                      <label className="ai-prompt-label">{t('site.aiWriter.freePromptLabel')}</label>
                      <textarea
                        className="ai-prompt-textarea"
                        rows={6}
                        placeholder={t('site.aiWriter.freePromptPlaceholder')}
                        value={customPrompt}
                        onChange={e => setCustomPrompt(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <label className="ai-prompt-label">{t('site.aiWriter.topicLabel')}</label>
                      <textarea
                        className="ai-prompt-textarea"
                        rows={4}
                        placeholder={t('site.aiWriter.topicPlaceholder')}
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                      />
                    </>
                  )}

                  <div className="ai-generate-row">
                    <button
                      className="bp-btn primary ai-generate-btn"
                      onClick={handleGenerate}
                      disabled={!canGenerate || generating}
                    >
                      {generating ? (
                        <>
                          <div className="loading-spinner-sm"></div>
                          {t('site.aiWriter.generating')}
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                          {t('site.aiWriter.generate')}
                        </>
                      )}
                    </button>
                    {generating && (
                      <button className="bp-btn ai-stop-btn" onClick={handleStop}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <rect x="6" y="6" width="12" height="12" rx="2" />
                        </svg>
                        {t('site.aiWriter.stop')}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Generated Content ── */}
          {(generatedContent || generating) && (
            <div className="ai-result-section">
              <div className="ai-result-header">
                <h3>{t('site.aiWriter.result')}</h3>
                <div className="ai-result-actions">
                  {!generating && (
                    <>
                      <button className="ai-action-btn" onClick={handleCopy} title={t('site.convert.copy')}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        {t('site.convert.copy')}
                      </button>
                      <button className="ai-action-btn" onClick={() => { handleReset(); }} title={t('site.aiWriter.newDoc')}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="12" y1="18" x2="12" y2="12" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        {t('site.aiWriter.newDoc')}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Preview Tabs */}
              <div className="bp-preview-tabs">
                <button
                  className={`bp-preview-tab ${previewTab === 'preview' ? 'active' : ''}`}
                  onClick={() => setPreviewTab('preview')}
                >
                  {t('site.aiWriter.previewTab')}
                </button>
                <button
                  className={`bp-preview-tab ${previewTab === 'markdown' ? 'active' : ''}`}
                  onClick={() => setPreviewTab('markdown')}
                >
                  {t('site.aiWriter.markdownTab')}
                </button>
              </div>

              <div className="bp-preview-content">
                {previewTab === 'markdown' ? (
                  <pre>{generatedContent || ' '}{generating && <span className="ai-cursor-blink">|</span>}</pre>
                ) : (
                  <div className="bp-preview-rendered" dangerouslySetInnerHTML={{ __html: mdToHtml(generatedContent) }} />
                )}
              </div>

              {/* Export Buttons */}
              {generatedContent && !generating && (
                <div className="ai-export-grid">
                  <button className="bp-export-btn" onClick={handleDownloadMd}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Markdown (.md)
                  </button>
                  <button className="bp-export-btn" onClick={handleDownloadHtml}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    HTML (.html)
                  </button>
                  <button className="bp-export-btn" onClick={handleOpenInEditor}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    {t('site.aiWriter.openInEditor')}
                  </button>
                  <button className="bp-export-btn primary" onClick={handleSaveToDb} disabled={saving || !user}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    {saving ? (isKo ? '저장 중...' : 'Saving...') : t('site.aiWriter.saveToDb')}
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default AiWriter;
