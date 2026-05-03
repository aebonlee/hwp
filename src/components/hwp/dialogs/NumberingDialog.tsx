import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface NumberingItem {
  id: number;
  type: string;
  format: string;
  startNumber: number;
}

interface BulletItem {
  id: number;
  symbol: string;
}

interface NumberingDialogProps {
  onClose: () => void;
  numberingList: NumberingItem[];
  bulletList: BulletItem[];
  onRefreshLists: () => void;
  onCreateNumbering: (opts: { format: string; startNumber: number }) => void;
  onApplyNumbering: (id: number, level: number) => void;
  onApplyBullet: (id: number, level: number) => void;
  onRestartNumbering: (id: number, startNumber: number) => void;
  onRemoveNumbering: () => void;
}

/* ── Constants ────────────────────────────────────────────────────────── */

const FORMAT_OPTIONS = [
  { value: '1.2.3.', label: '1. 2. 3.' },
  { value: '가.나.다.', label: '가. 나. 다.' },
  { value: '(1)(2)(3)', label: '(1) (2) (3)' },
  { value: '①②③', label: '\u2460 \u2461 \u2462' },
  { value: 'I.II.III.', label: 'I. II. III.' },
];

const BULLET_SYMBOLS = [
  '\u25CF', // ●
  '\u25CB', // ○
  '\u25A0', // ■
  '\u25A1', // □
  '\u25C6', // ◆
  '\u25C7', // ◇
  '\u25B6', // ▶
  '\u25B7', // ▷
  '\u2605', // ★
  '\u2606', // ☆
  '\u2713', // ✓
  '\u203B', // ※
  '\u2192', // →
  '-',
  '\u00B7', // ·
];

/* ── Component ────────────────────────────────────────────────────────── */

const NumberingDialog: React.FC<NumberingDialogProps> = ({
  onClose,
  numberingList,
  bulletList,
  onRefreshLists,
  onCreateNumbering,
  onApplyNumbering,
  onApplyBullet,
  onRestartNumbering,
  onRemoveNumbering,
}) => {
  // ── Tab state ──
  const [activeTab, setActiveTab] = useState<'numbering' | 'bullets'>('numbering');

  // ── Numbering tab state ──
  const [selectedNumberingId, setSelectedNumberingId] = useState<number | null>(null);
  const [newFormat, setNewFormat] = useState('1.2.3.');
  const [newStartNumber, setNewStartNumber] = useState(1);
  const [level, setLevel] = useState(0);
  const [restartNumber, setRestartNumber] = useState(1);

  // ── Bullet tab state ──
  const [selectedBulletId, setSelectedBulletId] = useState<number | null>(null);
  const [selectedBulletSymbol, setSelectedBulletSymbol] = useState<string | null>(null);
  const [bulletLevel, setBulletLevel] = useState(0);

  // ── Handlers: Numbering ──
  const handleCreateNumbering = () => {
    onCreateNumbering({ format: newFormat, startNumber: newStartNumber });
    onRefreshLists();
  };

  const handleApplyNumbering = () => {
    if (selectedNumberingId !== null) {
      onApplyNumbering(selectedNumberingId, level);
    }
  };

  const handleRestartNumbering = () => {
    if (selectedNumberingId !== null) {
      onRestartNumbering(selectedNumberingId, restartNumber);
    }
  };

  const handleRemoveNumbering = () => {
    onRemoveNumbering();
  };

  // ── Handlers: Bullet ──
  const handleApplyBullet = () => {
    if (selectedBulletId !== null) {
      onApplyBullet(selectedBulletId, bulletLevel);
    }
  };

  const handleBulletSymbolClick = (symbol: string) => {
    setSelectedBulletSymbol(symbol);
    // Try to find a matching bullet in the list
    const matched = bulletList.find((b) => b.symbol === symbol);
    if (matched) {
      setSelectedBulletId(matched.id);
    }
  };

  // ── Format preview helper ──
  const getFormatPreview = (format: string): string => {
    switch (format) {
      case '1.2.3.':
        return '1. 2. 3.';
      case '가.나.다.':
        return '가. 나. 다.';
      case '(1)(2)(3)':
        return '(1) (2) (3)';
      case '①②③':
        return '\u2460 \u2461 \u2462';
      case 'I.II.III.':
        return 'I. II. III.';
      default:
        return format;
    }
  };

  // ── Tab styling ──
  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '8px 12px',
    border: 'none',
    borderBottom: isActive ? '2px solid var(--primary, #0046C8)' : '2px solid transparent',
    background: 'transparent',
    color: isActive ? 'var(--primary, #0046C8)' : 'var(--text-secondary)',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.85rem',
    cursor: 'pointer',
  });

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 420 }}
      >
        <h3>번호/글머리표</h3>

        {/* ── Tabs ── */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: 12,
          }}
        >
          <button
            style={tabStyle(activeTab === 'numbering')}
            onClick={() => setActiveTab('numbering')}
          >
            번호 매기기
          </button>
          <button
            style={tabStyle(activeTab === 'bullets')}
            onClick={() => setActiveTab('bullets')}
          >
            글머리표
          </button>
        </div>

        {/* ── Numbering Tab ── */}
        {activeTab === 'numbering' && (
          <div>
            {/* Existing numbering definitions */}
            <h4
              style={{
                fontSize: '0.9rem',
                margin: '0 0 8px',
                color: 'var(--text-primary)',
              }}
            >
              등록된 번호 목록
            </h4>
            <div
              style={{
                maxHeight: 160,
                overflowY: 'auto',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 12,
              }}
            >
              {numberingList.length === 0 ? (
                <div
                  style={{
                    padding: 12,
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                  }}
                >
                  등록된 번호 정의가 없습니다
                </div>
              ) : (
                numberingList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedNumberingId(item.id)}
                    style={{
                      padding: '8px 12px',
                      cursor: 'pointer',
                      background:
                        selectedNumberingId === item.id
                          ? 'var(--primary-light, #e8f0fe)'
                          : 'transparent',
                      borderBottom: '1px solid var(--border-color)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.85rem',
                    }}
                  >
                    <span>
                      <strong>#{item.id}</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {getFormatPreview(item.format)}
                      </span>
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      시작: {item.startNumber}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Create new numbering */}
            <h4
              style={{
                fontSize: '0.9rem',
                margin: '0 0 8px',
                color: 'var(--text-primary)',
              }}
            >
              새 번호 만들기
            </h4>
            <div className="hwp-dialog-grid">
              <label>형식</label>
              <select
                value={newFormat}
                onChange={(e) => setNewFormat(e.target.value)}
                style={{
                  padding: '5px 10px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  width: '100%',
                }}
              >
                {FORMAT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <label>시작 번호</label>
              <input
                type="number"
                min={1}
                value={newStartNumber}
                onChange={(e) => setNewStartNumber(Math.max(1, Number(e.target.value)))}
              />
            </div>

            <div style={{ textAlign: 'right', margin: '8px 0 12px' }}>
              <button
                onClick={handleCreateNumbering}
                style={{
                  padding: '5px 14px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                }}
              >
                번호 생성
              </button>
            </div>

            {/* Level and apply */}
            <div className="hwp-dialog-grid">
              <label>수준 (Level)</label>
              <input
                type="number"
                min={0}
                max={9}
                value={level}
                onChange={(e) =>
                  setLevel(Math.max(0, Math.min(9, Number(e.target.value))))
                }
              />
            </div>

            {/* Restart numbering */}
            {selectedNumberingId !== null && (
              <div style={{ margin: '12px 0' }}>
                <h4
                  style={{
                    fontSize: '0.9rem',
                    margin: '0 0 8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  번호 다시 시작
                </h4>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <label style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                    시작 번호
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={restartNumber}
                    onChange={(e) =>
                      setRestartNumber(Math.max(1, Number(e.target.value)))
                    }
                    style={{ width: 80 }}
                  />
                  <button
                    onClick={handleRestartNumbering}
                    style={{
                      padding: '5px 12px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    다시 시작
                  </button>
                </div>
              </div>
            )}

            {/* Apply / Remove buttons */}
            <div className="hwp-dialog-actions">
              <button onClick={handleRemoveNumbering}>번호 제거</button>
              <button
                className="primary"
                onClick={handleApplyNumbering}
                disabled={selectedNumberingId === null}
              >
                적용
              </button>
            </div>
          </div>
        )}

        {/* ── Bullet Tab ── */}
        {activeTab === 'bullets' && (
          <div>
            {/* Bullet symbol grid */}
            <h4
              style={{
                fontSize: '0.9rem',
                margin: '0 0 8px',
                color: 'var(--text-primary)',
              }}
            >
              글머리표 기호
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 4,
                marginBottom: 12,
              }}
            >
              {BULLET_SYMBOLS.map((symbol) => (
                <button
                  key={symbol}
                  onClick={() => handleBulletSymbolClick(symbol)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    border:
                      selectedBulletSymbol === symbol
                        ? '2px solid var(--primary, #0046C8)'
                        : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background:
                      selectedBulletSymbol === symbol
                        ? 'var(--primary-light, #e8f0fe)'
                        : 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  {symbol}
                </button>
              ))}
            </div>

            {/* Existing bullet list */}
            {bulletList.length > 0 && (
              <>
                <h4
                  style={{
                    fontSize: '0.9rem',
                    margin: '0 0 8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  등록된 글머리표
                </h4>
                <div
                  style={{
                    maxHeight: 120,
                    overflowY: 'auto',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: 12,
                  }}
                >
                  {bulletList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedBulletId(item.id);
                        setSelectedBulletSymbol(item.symbol);
                      }}
                      style={{
                        padding: '8px 12px',
                        cursor: 'pointer',
                        background:
                          selectedBulletId === item.id
                            ? 'var(--primary-light, #e8f0fe)'
                            : 'transparent',
                        borderBottom: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '0.85rem',
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>{item.symbol}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>
                        #{item.id}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Level selector */}
            <div className="hwp-dialog-grid">
              <label>수준 (Level)</label>
              <input
                type="number"
                min={0}
                max={9}
                value={bulletLevel}
                onChange={(e) =>
                  setBulletLevel(Math.max(0, Math.min(9, Number(e.target.value))))
                }
              />
            </div>

            {/* Apply / Remove buttons */}
            <div className="hwp-dialog-actions">
              <button onClick={handleRemoveNumbering}>글머리표 제거</button>
              <button
                className="primary"
                onClick={handleApplyBullet}
                disabled={selectedBulletId === null}
              >
                적용
              </button>
            </div>
          </div>
        )}

        {/* Close (always visible) */}
        <div style={{ textAlign: 'right', marginTop: 8 }}>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default NumberingDialog;
