import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface HeaderFooterItem {
  secIdx: number;
  isHeader: boolean;
  applyTo: number;
  paraCount: number;
  hidden: boolean;
}

interface HeaderFooterDialogProps {
  onClose: () => void;
  headerFooterList: HeaderFooterItem[];
  onRefreshList: () => void;
  onCreateHeaderFooter: (secIdx: number, isHeader: boolean) => void;
  onDeleteHeaderFooter: (
    secIdx: number,
    isHeader: boolean,
    applyTo: number
  ) => void;
  onToggleHide: (secIdx: number, isHeader: boolean, applyTo: number) => void;
  onNavigateByPage: (secIdx: number, isHeader: boolean, pageNum: number) => void;
  onApplyTemplate: (
    secIdx: number,
    isHeader: boolean,
    applyTo: number,
    templateId: number
  ) => void;
  onInsertField: (
    secIdx: number,
    isHeader: boolean,
    applyTo: number,
    fieldType: string
  ) => void;
  onEnterEditMode: (secIdx: number, isHeader: boolean) => void;
  sectionCount: number;
  currentPage: number;
  pageCount: number;
}

/* ── Constants ── */

const TEMPLATES = [
  { id: 1, label: '페이지 번호 중앙' },
  { id: 2, label: '페이지 번호 오른쪽' },
  { id: 3, label: '날짜' },
  { id: 4, label: '파일명' },
];

const FIELD_TYPES = [
  { type: 'page_number', label: '페이지 번호' },
  { type: 'total_pages', label: '전체 페이지' },
  { type: 'date', label: '날짜' },
  { type: 'time', label: '시간' },
  { type: 'filename', label: '파일명' },
];

const APPLY_TO_LABELS: Record<number, string> = {
  0: '양쪽',
  1: '짝수 쪽',
  2: '홀수 쪽',
};

/* ── Component ────────────────────────────────────────────────────────── */

const HeaderFooterDialog: React.FC<HeaderFooterDialogProps> = ({
  onClose,
  headerFooterList,
  onRefreshList,
  onCreateHeaderFooter,
  onDeleteHeaderFooter,
  onToggleHide,
  onNavigateByPage,
  onApplyTemplate,
  onInsertField,
  onEnterEditMode,
  sectionCount,
  currentPage,
  pageCount,
}) => {
  /* ── State ── */
  const [selectedSecIdx, setSelectedSecIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'header' | 'footer'>('header');
  const [pageNavInput, setPageNavInput] = useState(String(currentPage));
  const [selectedTemplateId, setSelectedTemplateId] = useState(TEMPLATES[0].id);

  /* ── Derived ── */
  const isHeader = activeTab === 'header';
  const filteredItems = headerFooterList.filter(
    (item) => item.secIdx === selectedSecIdx && item.isHeader === isHeader
  );

  /* ── Handlers ── */
  const handleCreate = () => {
    onCreateHeaderFooter(selectedSecIdx, isHeader);
    onRefreshList();
  };

  const handleDelete = (item: HeaderFooterItem) => {
    const typeLabel = item.isHeader ? '머리말' : '꼬리말';
    if (window.confirm(`이 ${typeLabel}을 삭제하시겠습니까?`)) {
      onDeleteHeaderFooter(item.secIdx, item.isHeader, item.applyTo);
      onRefreshList();
    }
  };

  const handleToggleHide = (item: HeaderFooterItem) => {
    onToggleHide(item.secIdx, item.isHeader, item.applyTo);
    onRefreshList();
  };

  const handleEdit = (item: HeaderFooterItem) => {
    onEnterEditMode(item.secIdx, item.isHeader);
    onClose();
  };

  const handleNavigate = () => {
    const pageNum = Math.max(1, Math.min(pageCount, Number(pageNavInput) || 1));
    onNavigateByPage(selectedSecIdx, isHeader, pageNum);
  };

  const handleApplyTemplate = (item: HeaderFooterItem) => {
    onApplyTemplate(item.secIdx, item.isHeader, item.applyTo, selectedTemplateId);
    onRefreshList();
  };

  const handleInsertField = (item: HeaderFooterItem, fieldType: string) => {
    onInsertField(item.secIdx, item.isHeader, item.applyTo, fieldType);
  };

  /* ── Shared inline styles ── */
  const selectStyle: React.CSSProperties = {
    padding: '5px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.85rem',
  };

  const smallBtnStyle: React.CSSProperties = {
    padding: '4px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.78rem',
    cursor: 'pointer',
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    marginBottom: 8,
    marginTop: 16,
  };

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 560, maxWidth: '90vw' }}
      >
        <h3>머리말/꼬리말</h3>

        {/* ── Section selector ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            구역
          </label>
          <select
            value={selectedSecIdx}
            onChange={(e) => setSelectedSecIdx(Number(e.target.value))}
            style={selectStyle}
          >
            {Array.from({ length: sectionCount }, (_, i) => (
              <option key={i} value={i}>
                구역 {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* ── Tabs ── */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
          {(['header', 'footer'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '8px 0',
                border: '1px solid var(--border-color)',
                borderBottom:
                  activeTab === tab ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                background: activeTab === tab ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: activeTab === tab ? 'var(--primary)' : 'var(--text-secondary)',
                fontWeight: activeTab === tab ? 600 : 400,
                fontSize: '0.85rem',
                cursor: 'pointer',
                borderRadius:
                  tab === 'header'
                    ? 'var(--radius-sm) 0 0 0'
                    : '0 var(--radius-sm) 0 0',
              }}
            >
              {tab === 'header' ? '머리말' : '꼬리말'}
            </button>
          ))}
        </div>

        {/* ── List of items ── */}
        <div
          style={{
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            maxHeight: 200,
            overflowY: 'auto',
            marginBottom: 8,
          }}
        >
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: 20,
                textAlign: 'center',
                fontSize: '0.82rem',
                color: 'var(--text-tertiary)',
              }}
            >
              {isHeader ? '머리말' : '꼬리말'}이 없습니다
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 14px',
                  borderBottom:
                    idx < filteredItems.length - 1
                      ? '1px solid var(--border-color)'
                      : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                {/* Item info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    {isHeader ? '머리말' : '꼬리말'}{' '}
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                        marginLeft: 4,
                      }}
                    >
                      적용: {APPLY_TO_LABELS[item.applyTo] || `#${item.applyTo}`}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      marginTop: 2,
                    }}
                  >
                    문단 수: {item.paraCount}
                    {item.hidden && (
                      <span style={{ color: 'var(--warning, #e6a817)', marginLeft: 8 }}>
                        (숨김)
                      </span>
                    )}
                  </div>
                </div>

                {/* Item actions */}
                <button onClick={() => handleEdit(item)} style={smallBtnStyle}>
                  편집
                </button>
                <button onClick={() => handleToggleHide(item)} style={smallBtnStyle}>
                  {item.hidden ? '표시' : '숨김'}
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  style={{ ...smallBtnStyle, color: 'var(--danger, #c00)' }}
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>

        {/* ── Page navigation ── */}
        <div style={sectionLabel}>페이지별 탐색</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <input
            type="number"
            min={1}
            max={pageCount}
            value={pageNavInput}
            onChange={(e) => setPageNavInput(e.target.value)}
            style={{
              width: 80,
              padding: '5px 10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            / {pageCount} 페이지
          </span>
          <button onClick={handleNavigate} style={smallBtnStyle}>
            이동
          </button>
        </div>

        {/* ── Templates ── */}
        <div style={sectionLabel}>템플릿 적용</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <select
            value={selectedTemplateId}
            onChange={(e) => setSelectedTemplateId(Number(e.target.value))}
            style={{ ...selectStyle, flex: 1 }}
          >
            {TEMPLATES.map((tmpl) => (
              <option key={tmpl.id} value={tmpl.id}>
                {tmpl.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              if (filteredItems.length > 0) {
                handleApplyTemplate(filteredItems[0]);
              }
            }}
            disabled={filteredItems.length === 0}
            style={smallBtnStyle}
          >
            적용
          </button>
        </div>

        {/* ── Field insert ── */}
        <div style={sectionLabel}>필드 삽입</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 8,
          }}
        >
          {FIELD_TYPES.map((field) => (
            <button
              key={field.type}
              onClick={() => {
                if (filteredItems.length > 0) {
                  handleInsertField(filteredItems[0], field.type);
                }
              }}
              disabled={filteredItems.length === 0}
              style={smallBtnStyle}
            >
              {field.label}
            </button>
          ))}
        </div>

        {/* ── Bottom actions ── */}
        <div className="hwp-dialog-actions" style={{ marginTop: 16 }}>
          <button onClick={handleCreate}>
            새 {isHeader ? '머리말' : '꼬리말'}
          </button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooterDialog;
