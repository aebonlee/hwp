import React, { useState, useRef, useCallback } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface EquationDialogProps {
  mode: 'insert' | 'edit';
  onClose: () => void;
  // For edit mode
  equationProps?: {
    script: string;
    fontSize: number;
    textColor: number;
    baselineShift: number;
  } | null;
  onInsert?: (script: string, fontSize: number) => void;
  onApply?: (props: Record<string, unknown>) => void;
  onRenderPreview: (script: string) => string | null; // Returns SVG string
}

/* ── Symbol palette data ── */

interface SymbolGroup {
  label: string;
  symbols: string[];
}

const SYMBOL_GROUPS: SymbolGroup[] = [
  {
    label: 'Greek',
    symbols: [
      '\u03B1', '\u03B2', '\u03B3', '\u03B4', '\u03B5', '\u03B6', '\u03B7', '\u03B8',
      '\u03B9', '\u03BA', '\u03BB', '\u03BC', '\u03BD', '\u03BE', '\u03C0', '\u03C1',
      '\u03C3', '\u03C4', '\u03C5', '\u03C6', '\u03C7', '\u03C8', '\u03C9',
    ],
  },
  {
    label: 'Operators',
    symbols: [
      '+', '\u2212', '\u00D7', '\u00F7', '\u00B1', '\u2213', '\u00B7', '\u2218',
      '\u2295', '\u2297', '\u2211', '\u220F', '\u222B', '\u222E',
    ],
  },
  {
    label: 'Relations',
    symbols: [
      '=', '\u2260', '<', '>', '\u2264', '\u2265', '\u2248', '\u221D', '\u221E',
      '\u2208', '\u2209', '\u2282', '\u2283', '\u222A', '\u2229',
    ],
  },
  {
    label: 'Arrows',
    symbols: [
      '\u2190', '\u2192', '\u2191', '\u2193', '\u2194', '\u21D0', '\u21D2', '\u21D4',
    ],
  },
];

interface TemplateItem {
  label: string;
  insert: string;
}

const TEMPLATES: TemplateItem[] = [
  { label: 'a/b', insert: '{a} over {b}' },
  { label: '\u221A', insert: 'sqrt {a}' },
  { label: 'x\u00B2', insert: '{x} ^{2}' },
  { label: 'x\u2082', insert: '{x} _{2}' },
  { label: '\u2211', insert: 'sum from {i=1} to {n}' },
  { label: '\u222B', insert: 'int from {a} to {b}' },
  { label: 'matrix', insert: 'left( matrix {a # b ## c # d} right)' },
];

/* ── Component ────────────────────────────────────────────────────────── */

const EquationDialog: React.FC<EquationDialogProps> = ({
  mode,
  onClose,
  equationProps,
  onInsert,
  onApply,
  onRenderPreview,
}) => {
  // ── State ──
  const [script, setScript] = useState(equationProps?.script ?? '');
  const [fontSize, setFontSize] = useState(equationProps?.fontSize ?? 10);
  const [previewSvg, setPreviewSvg] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Insert text at cursor position ──
  const insertAtCursor = useCallback((text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setScript((prev) => prev + text);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = script.slice(0, start);
    const after = script.slice(end);
    const newScript = before + text + after;
    setScript(newScript);

    // Restore cursor position after React re-render
    requestAnimationFrame(() => {
      textarea.selectionStart = start + text.length;
      textarea.selectionEnd = start + text.length;
      textarea.focus();
    });
  }, [script]);

  // ── Preview ──
  const handlePreview = () => {
    const svg = onRenderPreview(script);
    setPreviewSvg(svg);
  };

  // ── Submit ──
  const handleSubmit = () => {
    if (mode === 'insert' && onInsert) {
      onInsert(script, fontSize);
    } else if (mode === 'edit' && onApply) {
      onApply({
        script,
        fontSize,
        textColor: equationProps?.textColor ?? 0,
        baselineShift: equationProps?.baselineShift ?? 0,
      });
    }
    onClose();
  };

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 600, maxWidth: '90vw' }}
      >
        <h3>{mode === 'insert' ? '수식 삽입' : '수식 편집'}</h3>

        {/* ── Editor area ── */}
        <div className="hwp-dialog-grid">
          <label>수식 스크립트</label>
          <div style={{ gridColumn: '1 / -1' }}>
            <textarea
              ref={textareaRef}
              value={script}
              onChange={(e) => setScript(e.target.value)}
              rows={6}
              style={{
                width: '100%',
                fontFamily: 'Consolas, "Courier New", monospace',
                fontSize: '0.9rem',
                padding: '10px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm, 4px)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
              placeholder="수식을 입력하세요... (예: {a} over {b})"
            />
          </div>

          <label>글자 크기 (pt)</label>
          <input
            type="number"
            min={1}
            max={200}
            value={fontSize}
            onChange={(e) => setFontSize(Math.max(1, Number(e.target.value)))}
            style={{ width: 100 }}
          />
        </div>

        {/* ── Symbol palette ── */}
        <h4
          style={{
            fontSize: '0.9rem',
            margin: '12px 0 8px',
            color: 'var(--text-primary)',
          }}
        >
          기호 팔레트
        </h4>

        {/* Group tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap' }}>
          {SYMBOL_GROUPS.map((group, idx) => (
            <button
              key={group.label}
              onClick={() => setActiveGroup(idx)}
              style={{
                padding: '4px 10px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm, 4px)',
                background: activeGroup === idx
                  ? 'rgba(var(--primary-rgb), 0.1)'
                  : 'var(--bg-primary)',
                color: activeGroup === idx ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontWeight: activeGroup === idx ? 600 : 400,
                cursor: 'pointer',
              }}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Symbol buttons */}
        <div className="hwp-symbol-palette">
          {SYMBOL_GROUPS[activeGroup].symbols.map((sym, idx) => (
            <button
              key={`${activeGroup}-${idx}`}
              className="hwp-symbol-btn"
              onClick={() => insertAtCursor(sym)}
              title={sym}
            >
              {sym}
            </button>
          ))}
        </div>

        {/* ── Templates ── */}
        <h4
          style={{
            fontSize: '0.9rem',
            margin: '12px 0 8px',
            color: 'var(--text-primary)',
          }}
        >
          템플릿
        </h4>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 12 }}>
          {TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.label}
              onClick={() => insertAtCursor(tmpl.insert)}
              style={{
                padding: '6px 12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm, 4px)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
              title={tmpl.insert}
            >
              {tmpl.label}
            </button>
          ))}
        </div>

        {/* ── Preview area ── */}
        <h4
          style={{
            fontSize: '0.9rem',
            margin: '12px 0 8px',
            color: 'var(--text-primary)',
          }}
        >
          미리보기
        </h4>

        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <button
            onClick={handlePreview}
            style={{
              padding: '6px 16px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm, 4px)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            미리보기
          </button>
        </div>

        <div className="hwp-equation-preview">
          {previewSvg ? (
            <div dangerouslySetInnerHTML={{ __html: previewSvg }} />
          ) : (
            <span
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-tertiary)',
              }}
            >
              미리보기 없음
            </span>
          )}
        </div>

        {/* ── Actions ── */}
        <div className="hwp-dialog-actions">
          <button onClick={onClose}>취소</button>
          <button className="primary" onClick={handleSubmit}>
            {mode === 'insert' ? '삽입' : '적용'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquationDialog;
