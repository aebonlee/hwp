import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface FieldItem {
  index: number;
  type: string;
  name: string;
  path: string;
  value: string;
}

interface ClickHereProps {
  name: string;
  guide: string;
  memo: string;
  editable: boolean;
}

interface FieldDialogProps {
  onClose: () => void;
  fieldList: FieldItem[];
  onRefreshFieldList: () => void;
  onGetFieldValue: (name: string) => string;
  onSetFieldValue: (name: string, value: string) => void;
  onSetActiveField: (index: number) => void;
  onClearActiveField: () => void;
  onRemoveField: (secIdx: number, paraIdx: number) => void;
  // Click-here (누름틀)
  clickHereProps: ClickHereProps | null;
  onUpdateClickHere: (props: Partial<ClickHereProps>) => void;
  // Navigation
  onGotoField: (index: number) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const FieldDialog: React.FC<FieldDialogProps> = ({
  onClose,
  fieldList,
  onRefreshFieldList,
  onGetFieldValue,
  onSetFieldValue,
  onSetActiveField,
  onClearActiveField,
  onRemoveField,
  clickHereProps,
  onUpdateClickHere,
  onGotoField,
}) => {
  /* ── State ── */
  const [activeTab, setActiveTab] = useState<'fields' | 'clickhere'>('fields');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  // Click-here editing state
  const [chName, setChName] = useState(clickHereProps?.name ?? '');
  const [chGuide, setChGuide] = useState(clickHereProps?.guide ?? '');
  const [chMemo, setChMemo] = useState(clickHereProps?.memo ?? '');
  const [chEditable, setChEditable] = useState(clickHereProps?.editable ?? true);

  /* ── Derived ── */
  const selectedField =
    selectedIndex !== null
      ? fieldList.find((f) => f.index === selectedIndex) ?? null
      : null;

  /* ── Handlers ── */
  const handleSelectField = (field: FieldItem) => {
    setSelectedIndex(field.index);
    const currentValue = onGetFieldValue(field.name);
    setEditValue(currentValue || field.value);
  };

  const handleSetValue = () => {
    if (!selectedField) return;
    onSetFieldValue(selectedField.name, editValue);
    onRefreshFieldList();
  };

  const handleGotoField = () => {
    if (selectedIndex === null) return;
    onGotoField(selectedIndex);
    onClose();
  };

  const handleRemoveField = () => {
    if (!selectedField) return;
    if (window.confirm(`"${selectedField.name}" 필드를 삭제하시겠습니까?`)) {
      // Parse secIdx and paraIdx from the field path (format: "sec/para" or similar)
      const parts = selectedField.path.split('/');
      const secIdx = Number(parts[0]) || 0;
      const paraIdx = Number(parts[1]) || 0;
      onRemoveField(secIdx, paraIdx);
      setSelectedIndex(null);
      onRefreshFieldList();
    }
  };

  const handleActivateField = () => {
    if (selectedIndex === null) return;
    onSetActiveField(selectedIndex);
  };

  const handleDeactivateField = () => {
    onClearActiveField();
  };

  const handleApplyClickHere = () => {
    onUpdateClickHere({
      name: chName,
      guide: chGuide,
      memo: chMemo,
      editable: chEditable,
    });
  };

  // Reset click-here form when props change
  const syncClickHereForm = () => {
    if (clickHereProps) {
      setChName(clickHereProps.name);
      setChGuide(clickHereProps.guide);
      setChMemo(clickHereProps.memo);
      setChEditable(clickHereProps.editable);
    }
  };

  /* ── Shared inline styles ── */
  const smallBtnStyle: React.CSSProperties = {
    padding: '4px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.78rem',
    cursor: 'pointer',
  };

  const inputStyle: React.CSSProperties = {
    padding: '5px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.85rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: 60,
    resize: 'vertical',
    fontFamily: 'inherit',
  };

  const truncate = (str: string, max: number) =>
    str.length > max ? str.slice(0, max) + '...' : str;

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 600, maxWidth: '90vw' }}
      >
        <h3>필드 / 누름틀</h3>

        {/* ── Tabs ── */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
          {(['fields', 'clickhere'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === 'clickhere') syncClickHereForm();
              }}
              style={{
                flex: 1,
                padding: '8px 0',
                border: '1px solid var(--border-color)',
                borderBottom:
                  activeTab === tab
                    ? '2px solid var(--primary)'
                    : '1px solid var(--border-color)',
                background:
                  activeTab === tab ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color:
                  activeTab === tab ? 'var(--primary)' : 'var(--text-secondary)',
                fontWeight: activeTab === tab ? 600 : 400,
                fontSize: '0.85rem',
                cursor: 'pointer',
                borderRadius:
                  tab === 'fields'
                    ? 'var(--radius-sm) 0 0 0'
                    : '0 var(--radius-sm) 0 0',
              }}
            >
              {tab === 'fields' ? '필드 목록' : '누름틀'}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── Fields tab ── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'fields' && (
          <div style={{ display: 'flex', gap: 14, minHeight: 280 }}>
            {/* ── Left: field list ── */}
            <div
              style={{
                width: 220,
                minWidth: 220,
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  padding: '8px 12px',
                  background: 'var(--bg-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>필드 ({fieldList.length})</span>
                <button
                  onClick={onRefreshFieldList}
                  style={{
                    padding: '2px 8px',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                  }}
                  title="새로고침"
                >
                  새로고침
                </button>
              </div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {fieldList.length === 0 && (
                  <div
                    style={{
                      padding: 16,
                      textAlign: 'center',
                      fontSize: '0.82rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    필드가 없습니다
                  </div>
                )}
                {fieldList.map((field) => (
                  <div
                    key={field.index}
                    onClick={() => handleSelectField(field)}
                    style={{
                      padding: '8px 12px',
                      cursor: 'pointer',
                      background:
                        selectedIndex === field.index
                          ? 'var(--primary-light, rgba(0,70,200,0.1))'
                          : 'transparent',
                      borderBottom: '1px solid var(--border-color)',
                      transition: 'background 0.15s',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--text-tertiary)',
                          background: 'var(--bg-secondary)',
                          padding: '1px 5px',
                          borderRadius: 3,
                        }}
                      >
                        {field.type}
                      </span>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight:
                            selectedIndex === field.index ? 600 : 400,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {field.name || `#${field.index}`}
                      </span>
                    </div>
                    {field.value && (
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--text-tertiary)',
                          marginTop: 3,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {truncate(field.value, 30)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: field detail ── */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {selectedField ? (
                <div
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 16,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <div className="hwp-dialog-grid">
                    <label>유형</label>
                    <span
                      style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}
                    >
                      {selectedField.type}
                    </span>

                    <label>이름</label>
                    <span
                      style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}
                    >
                      {selectedField.name || '(이름 없음)'}
                    </span>

                    <label>경로</label>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-tertiary)',
                        wordBreak: 'break-all',
                      }}
                    >
                      {selectedField.path || '—'}
                    </span>

                    <label>값</label>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      style={inputStyle}
                      placeholder="필드 값을 입력하세요"
                    />
                  </div>

                  {/* Action buttons */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginTop: 'auto',
                      paddingTop: 12,
                    }}
                  >
                    <button
                      onClick={handleSetValue}
                      style={{
                        ...smallBtnStyle,
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                      }}
                    >
                      값 설정
                    </button>
                    <button onClick={handleGotoField} style={smallBtnStyle}>
                      이동
                    </button>
                    <button onClick={handleActivateField} style={smallBtnStyle}>
                      활성화
                    </button>
                    <button onClick={handleDeactivateField} style={smallBtnStyle}>
                      비활성화
                    </button>
                    <button
                      onClick={handleRemoveField}
                      style={{ ...smallBtnStyle, color: 'var(--danger, #c00)' }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.85rem',
                  }}
                >
                  왼쪽 목록에서 필드를 선택하세요
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── Click-here (누름틀) tab ── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'clickhere' && (
          <div
            style={{
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 16,
              minHeight: 280,
            }}
          >
            {clickHereProps === null ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 200,
                  color: 'var(--text-tertiary)',
                  fontSize: '0.85rem',
                }}
              >
                현재 위치에 누름틀이 없습니다
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Name */}
                <div className="hwp-dialog-grid">
                  <label>이름</label>
                  <input
                    type="text"
                    value={chName}
                    onChange={(e) => setChName(e.target.value)}
                    style={inputStyle}
                    placeholder="누름틀 이름"
                  />
                </div>

                {/* Guide text */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 6,
                    }}
                  >
                    안내문
                  </label>
                  <textarea
                    value={chGuide}
                    onChange={(e) => setChGuide(e.target.value)}
                    style={textareaStyle}
                    placeholder="사용자에게 표시되는 안내 문구를 입력하세요"
                  />
                </div>

                {/* Memo */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 6,
                    }}
                  >
                    메모
                  </label>
                  <textarea
                    value={chMemo}
                    onChange={(e) => setChMemo(e.target.value)}
                    style={textareaStyle}
                    placeholder="내부 참고용 메모"
                  />
                </div>

                {/* Editable checkbox */}
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={chEditable}
                    onChange={(e) => setChEditable(e.target.checked)}
                  />
                  <span>편집 가능</span>
                </label>

                {/* Apply */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                  <button
                    onClick={handleApplyClickHere}
                    style={{
                      padding: '6px 18px',
                      border: '1px solid var(--primary)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--primary)',
                      color: 'white',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    적용
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Bottom actions ── */}
        <div className="hwp-dialog-actions" style={{ marginTop: 16 }}>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default FieldDialog;
