import { useState, useRef, useCallback } from 'react';

type AiProvider = 'claude' | 'openai';

const STORAGE_KEY_PROVIDER = 'hwp_ai_provider';
const STORAGE_KEY_CLAUDE = 'hwp_ai_claude_key';
const STORAGE_KEY_OPENAI = 'hwp_ai_openai_key';
const STORAGE_KEY_MODEL_CLAUDE = 'hwp_ai_claude_model';
const STORAGE_KEY_MODEL_OPENAI = 'hwp_ai_openai_model';

export interface UseAiAssistReturn {
  generating: boolean;
  generatedText: string;
  generate: (prompt: string) => Promise<string>;
  stop: () => void;
}

export function useAiAssist(): UseAiAssistReturn {
  const [generating, setGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const generate = useCallback(async (prompt: string): Promise<string> => {
    const provider = (localStorage.getItem(STORAGE_KEY_PROVIDER) as AiProvider) || 'claude';
    const claudeKey = localStorage.getItem(STORAGE_KEY_CLAUDE) || '';
    const openaiKey = localStorage.getItem(STORAGE_KEY_OPENAI) || '';
    const claudeModel = localStorage.getItem(STORAGE_KEY_MODEL_CLAUDE) || 'claude-sonnet-4-20250514';
    const openaiModel = localStorage.getItem(STORAGE_KEY_MODEL_OPENAI) || 'gpt-4o';

    const apiKey = provider === 'claude' ? claudeKey : openaiKey;
    if (!apiKey) throw new Error('API 키가 설정되지 않았습니다. 상단에서 API 키를 입력해 주세요.');

    setGenerating(true);
    setGeneratedText('');
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      let content = '';
      if (provider === 'claude') {
        content = await streamClaude(prompt, claudeKey, claudeModel, controller.signal, (text) => {
          setGeneratedText(text);
        });
      } else {
        content = await streamOpenAI(prompt, openaiKey, openaiModel, controller.signal, (text) => {
          setGeneratedText(text);
        });
      }
      return content;
    } finally {
      setGenerating(false);
      abortRef.current = null;
    }
  }, []);

  return { generating, generatedText, generate, stop };
}

async function streamClaude(
  prompt: string,
  apiKey: string,
  model: string,
  signal: AbortSignal,
  onUpdate: (text: string) => void,
): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      stream: true,
      messages: [{ role: 'user', content: prompt }],
      system: '당신은 한국 사업계획서 작성 전문가입니다. 요청받은 항목을 전문적이고 구체적으로 작성해 주세요. 마크다운 서식 없이 순수 텍스트만 출력해 주세요.',
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
          onUpdate(content);
        }
      } catch {
        // skip non-JSON lines
      }
    }
  }
  return content;
}

async function streamOpenAI(
  prompt: string,
  apiKey: string,
  model: string,
  signal: AbortSignal,
  onUpdate: (text: string) => void,
): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      stream: true,
      messages: [
        {
          role: 'system',
          content: '당신은 한국 사업계획서 작성 전문가입니다. 요청받은 항목을 전문적이고 구체적으로 작성해 주세요. 마크다운 서식 없이 순수 텍스트만 출력해 주세요.',
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
          onUpdate(content);
        }
      } catch {
        // skip
      }
    }
  }
  return content;
}
