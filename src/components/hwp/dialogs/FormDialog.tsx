import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface FormObject {
  index: number;
  type: 'checkbox' | 'radio' | 'combo' | 'text' | 'button';
  name: string;
  value: string;
  options?: string[];
  checked?: boolean;
  groupName?: string;
}

interface FormDialogProps {
  onClose: () => void;
  formObjects: FormObject[];
  onRefresh: () => void;
  onSetValue: (index: number, value: string) => void;
  onSetValueInCell: (index: number, value: string) => void;
  editMode: 'body' | 'cell' | 'header' | 'footer' | 'footnote';
}

/* ── Constants ────────────────────────────────────────────────────────── */

const TYPE_ICONS: Record<FormObject['type'], string> = {
  checkbox: '\u2611', // ☑
  radio: '\u25C9',    // ◉
  combo: '\u25BC',    // ▼
  text: '\u270E',     // ✎
  button: '\u25A3',   // ▣
};

const TYPE_LABELS: Record<FormObject['type'], string> = {
  checkbox: '체크박스',
  radio: '라디오',
  combo: '콤보박스',
  text: '텍스트',
  button: '버튼',
};

/* ── Component ────────────────────────────────────────────────────────── */

const FormDialog: React.FC<FormDialogProps> = ({
  onClose,
  formObjects,
  onRefresh,
  onSetValue,
  onSetValueInCell,
  editMode,
}) => {
  // ── Per-object edit state: map from index to pending value ──
  const [editValues, setEditValues] = useState<Record<number, string>>({});

  // ── Helpers ──
  const getEditValue = (obj: FormObject): string => {
    if (editValues[obj.index] !== undefined) {
      return editValues[obj.index];
    }
    return obj.value;
  };

  const updateEditValue = (index: number, value: string) => {
    setEditValues((prev) => ({ ...prev, [index]: value }));
  };

  const handleSetValue = (obj: FormObject) => {
    const value = getEditValue(obj);
    if (editMode === 'cell') {
      onSetValueInCell(obj.index, value);
    } else {
      onSetValue(obj.index, value);
    }
    // Clear pending edit
    setEditValues((prev) => {
      const next = { ...prev };
      delete next[obj.index];
      return next;
    });
    onRefresh();
  };

  const handleCheckboxToggle = (obj: FormObject) => {
    const newValue = obj.checked ? '0' : '1';
    updateEditValue(obj.index, newValue);
  };

  const handleRadioToggle = (obj: FormObject) => {
    const newValue = obj.checked ? '0' : '1';
    updateEditValue(obj.index, newValue);
  };

  // ── Edit mode badge ──
  const editModeLabels: Record<string, string> = {
    body: '본문',
    cell: '셀',
    header: '머리말',
    footer: '꼬리말',
    footnote: '각주',
  };

  // ── Render individual form object edit interface ──
  const renderEditInterface = (obj: FormObject) => {
    switch (obj.type) {
      case 'checkbox': {
        const isChecked = editValues[obj.index] !== undefined
          ? editValues[obj.index] === '1'
          : obj.checked ?? false;
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <button
              onClick={() => handleCheckboxToggle(obj)}
              style={{
                fontSize: '1.2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: 'var(--text-primary)',
              }}
            >
              {isChecked ? '\u2611' : '\u2610'}
            </button>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {isChecked ? '선택됨' : '선택 안 됨'}
            </span>
          </div>
        );
      }

      case 'radio': {
        const isSelected = editValues[obj.index] !== undefined
          ? editValues[obj.index] === '1'
          : obj.checked ?? false;
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <button
              onClick={() => handleRadioToggle(obj)}
              style={{
                fontSize: '1.2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: 'var(--text-primary)',
              }}
            >
              {isSelected ? '\u25C9' : '\u25CB'}
            </button>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {isSelected ? '선택됨' : '선택 안 됨'}
              {obj.groupName && (
                <span style={{ marginLeft: 6, color: 'var(--text-tertiary, #999)' }}>
                  (그룹: {obj.groupName})
                </span>
              )}
            </span>
          </div>
        );
      }

      case 'combo': {
        const currentValue = getEditValue(obj);
        return (
          <select
            value={currentValue}
            onChange={(e) => updateEditValue(obj.index, e.target.value)}
            style={{
              width: '100%',
              padding: '5px 10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          >
            {(!obj.options || obj.options.length === 0) && (
              <option value="">-- 옵션 없음 --</option>
            )}
            {obj.options?.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      }

      case 'text': {
        const currentValue = getEditValue(obj);
        return (
          <input
            type="text"
            value={currentValue}
            onChange={(e) => updateEditValue(obj.index, e.target.value)}
            style={{
              width: '100%',
              padding: '5px 10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              boxSizing: 'border-box',
            }}
          />
        );
      }

      case 'button':
        return (
          <span
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
            }}
          >
            버튼 (읽기 전용)
          </span>
        );

      default:
        return null;
    }
  };

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 440 }}
      >
        <h3>양식 개체</h3>

        {/* Edit mode indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
            fontSize: '0.82rem',
          }}
        >
          <span style={{ color: 'var(--text-secondary)' }}>편집 모드:</span>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--primary-light, #e8f0fe)',
              color: 'var(--primary, #0046C8)',
              fontWeight: 500,
            }}
          >
            {editModeLabels[editMode] || editMode}
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            ({formObjects.length}개 개체)
          </span>
        </div>

        {/* Form objects list */}
        <div
          style={{
            maxHeight: 400,
            overflowY: 'auto',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 12,
          }}
        >
          {formObjects.length === 0 ? (
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.82rem',
              }}
            >
              양식 개체가 없습니다
            </div>
          ) : (
            formObjects.map((obj) => (
              <div
                key={obj.index}
                style={{
                  padding: '12px',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {/* Header row: type badge + name + current value */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {/* Type badge */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary, #f0f0f0)',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>{TYPE_ICONS[obj.type]}</span>
                    <span>{TYPE_LABELS[obj.type]}</span>
                  </span>

                  {/* Name */}
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: '0.88rem',
                      color: 'var(--text-primary)',
                      flex: 1,
                    }}
                  >
                    {obj.name || `(이름 없음 #${obj.index})`}
                  </span>

                  {/* Current value display */}
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      maxWidth: 120,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    title={`현재 값: ${obj.value}`}
                  >
                    현재: {obj.value || '(없음)'}
                  </span>
                </div>

                {/* Edit interface */}
                <div>{renderEditInterface(obj)}</div>

                {/* Set value button */}
                {obj.type !== 'button' && (
                  <div style={{ textAlign: 'right' }}>
                    <button
                      onClick={() => handleSetValue(obj)}
                      style={{
                        padding: '4px 14px',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--primary, #0046C8)',
                        color: '#fff',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      값 설정
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* ── Close button ── */}
        <div className="hwp-dialog-actions">
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default FormDialog;
