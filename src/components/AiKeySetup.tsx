import { useState, useCallback, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type AiProvider = 'claude' | 'openai';

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

interface AiKeySetupProps {
  collapsed?: boolean;
}

const AiKeySetup = ({ collapsed = true }: AiKeySetupProps): ReactElement => {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [isOpen, setIsOpen] = useState(!collapsed);
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

  const apiKey = provider === 'claude' ? claudeKey : openaiKey;
  const model = provider === 'claude' ? claudeModel : openaiModel;
  const models = provider === 'claude' ? CLAUDE_MODELS : OPENAI_MODELS;
  const hasKey = apiKey.trim().length > 0;

  const handleProviderChange = useCallback((p: AiProvider) => {
    setProvider(p);
    localStorage.setItem(STORAGE_KEY_PROVIDER, p);
  }, []);

  const saveApiKey = useCallback((key: string) => {
    if (provider === 'claude') {
      setClaudeKey(key);
      localStorage.setItem(STORAGE_KEY_CLAUDE, key);
    } else {
      setOpenaiKey(key);
      localStorage.setItem(STORAGE_KEY_OPENAI, key);
    }
  }, [provider]);

  const handleModelChange = useCallback((m: string) => {
    if (provider === 'claude') {
      setClaudeModel(m);
      localStorage.setItem(STORAGE_KEY_MODEL_CLAUDE, m);
    } else {
      setOpenaiModel(m);
      localStorage.setItem(STORAGE_KEY_MODEL_OPENAI, m);
    }
  }, [provider]);

  return (
    <div className="ai-key-setup">
      <button className="ai-key-setup-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="ai-key-setup-toggle-left">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>{isKo ? 'AI 작성 설정' : 'AI Writing Setup'}</span>
          <span className={`ai-key-setup-status ${hasKey ? 'configured' : ''}`}>
            {hasKey ? (isKo ? '✓ 설정됨' : '✓ Configured') : (isKo ? '미설정' : 'Not set')}
          </span>
        </span>
        <svg className={`ai-key-setup-arrow ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="ai-key-setup-body">
          <div className="ai-key-setup-providers">
            <button
              className={`ai-key-setup-provider ${provider === 'claude' ? 'active' : ''}`}
              onClick={() => handleProviderChange('claude')}
            >
              <span className="ai-provider-icon">C</span>
              Claude
            </button>
            <button
              className={`ai-key-setup-provider ${provider === 'openai' ? 'active' : ''}`}
              onClick={() => handleProviderChange('openai')}
            >
              <span className="ai-provider-icon">G</span>
              OpenAI
            </button>
          </div>

          <div className="ai-key-setup-row">
            <div className="ai-key-setup-input-wrap">
              <input
                type={showKey ? 'text' : 'password'}
                className="ai-key-setup-input"
                placeholder={provider === 'claude' ? 'sk-ant-api03-...' : 'sk-proj-...'}
                value={apiKey}
                onChange={e => saveApiKey(e.target.value)}
              />
              <button className="ai-key-setup-eye" onClick={() => setShowKey(!showKey)}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  {showKey ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
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
              className="ai-key-setup-model"
              value={model}
              onChange={e => handleModelChange(e.target.value)}
            >
              {models.map(m => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>

          <p className="ai-key-setup-hint">
            {isKo
              ? 'API 키는 브라우저에만 저장되며 서버로 전송되지 않습니다.'
              : 'API keys are stored locally and never sent to our server.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AiKeySetup;
