import { useState, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { useAiAssist } from '../hooks/useAiAssist';

interface AiFieldButtonProps {
  fieldKey: string;
  fieldLabel: string;
  sectionTitle: string;
  templateName: string;
  allFormData: Record<string, string>;
  onAccept: (value: string) => void;
}

const AiFieldButton = ({
  fieldLabel,
  sectionTitle,
  templateName,
  allFormData,
  onAccept,
}: AiFieldButtonProps): ReactElement => {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isKo = language === 'ko';

  const [open, setOpen] = useState(false);
  const { generating, generatedText, generate, stop } = useAiAssist();

  const buildPrompt = (): string => {
    // Collect already-filled fields for context
    const filledFields: Record<string, string> = {};
    for (const [k, v] of Object.entries(allFormData)) {
      if (v && v.trim()) filledFields[k] = v;
    }

    return `당신은 한국 사업계획서 작성 전문가입니다.
사업유형: ${templateName}
섹션: ${sectionTitle}
작성 항목: ${fieldLabel}
이미 입력된 정보: ${JSON.stringify(filledFields, null, 2)}

위 맥락을 참고하여 '${fieldLabel}' 항목을 전문적이고 구체적으로 작성해 주세요.
- 실제 사업계획서에 바로 사용할 수 있는 수준으로 작성
- 구체적인 수치나 예시를 포함
- 3~5개 문단 또는 항목으로 구성
- 마크다운 서식 없이 순수 텍스트만 출력`;
  };

  const handleGenerate = async () => {
    try {
      await generate(buildPrompt());
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        showToast((err as Error).message, 'error');
      }
    }
  };

  const handleAccept = () => {
    onAccept(generatedText);
    setOpen(false);
  };

  const handleClose = () => {
    if (generating) stop();
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        type="button"
        className="ai-field-btn"
        onClick={() => { setOpen(true); handleGenerate(); }}
        title={isKo ? 'AI로 작성' : 'Write with AI'}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </button>
    );
  }

  return (
    <div className="ai-field-popover">
      <div className="ai-field-popover-header">
        <span>{isKo ? `AI 작성: ${fieldLabel}` : `AI Write: ${fieldLabel}`}</span>
        <button className="ai-field-popover-close" onClick={handleClose}>&times;</button>
      </div>

      <div className="ai-field-preview">
        {generatedText || (generating ? (isKo ? '생성 중...' : 'Generating...') : '')}
        {generating && <span className="ai-cursor-blink">|</span>}
      </div>

      <div className="ai-field-actions">
        {!generating && generatedText && (
          <>
            <button className="bp-btn primary" onClick={handleAccept}>
              {isKo ? '적용' : 'Apply'}
            </button>
            <button className="bp-btn" onClick={handleGenerate}>
              {isKo ? '재생성' : 'Regenerate'}
            </button>
          </>
        )}
        {generating && (
          <button className="bp-btn" onClick={stop}>
            {isKo ? '중지' : 'Stop'}
          </button>
        )}
        <button className="bp-btn" onClick={handleClose}>
          {isKo ? '취소' : 'Cancel'}
        </button>
      </div>
    </div>
  );
};

export default AiFieldButton;
