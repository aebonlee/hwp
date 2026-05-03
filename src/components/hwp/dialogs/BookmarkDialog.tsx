import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface BookmarkItem {
  name: string;
  secIdx: number;
  paraIdx: number;
  charOffset: number;
  controlIdx?: number;
}

interface BookmarkDialogProps {
  onClose: () => void;
  bookmarkList: BookmarkItem[];
  onRefresh: () => void;
  onAdd: (name: string) => void;
  onDelete: (bm: BookmarkItem) => void;
  onRename: (bm: BookmarkItem, newName: string) => void;
  onGoto: (bm: BookmarkItem) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const BookmarkDialog: React.FC<BookmarkDialogProps> = ({
  onClose,
  bookmarkList,
  onRefresh,
  onAdd,
  onDelete,
  onRename,
  onGoto,
}) => {
  // ── State ──
  const [newName, setNewName] = useState('');
  const [renamingIndex, setRenamingIndex] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');

  // ── Handlers ──
  const handleAdd = () => {
    const trimmed = newName.trim();
    if (!trimmed) return;

    // Check for duplicate names
    if (bookmarkList.some((bm) => bm.name === trimmed)) {
      return;
    }

    onAdd(trimmed);
    setNewName('');
    onRefresh();
  };

  const handleAddKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleDelete = (bm: BookmarkItem) => {
    onDelete(bm);
    onRefresh();
  };

  const handleStartRename = (index: number, currentName: string) => {
    setRenamingIndex(index);
    setRenameValue(currentName);
  };

  const handleConfirmRename = (bm: BookmarkItem) => {
    const trimmed = renameValue.trim();
    if (!trimmed || trimmed === bm.name) {
      setRenamingIndex(null);
      return;
    }

    // Check for duplicate names
    if (bookmarkList.some((b) => b.name === trimmed && b !== bm)) {
      return;
    }

    onRename(bm, trimmed);
    setRenamingIndex(null);
    onRefresh();
  };

  const handleRenameKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    bm: BookmarkItem
  ) => {
    if (e.key === 'Enter') {
      handleConfirmRename(bm);
    } else if (e.key === 'Escape') {
      setRenamingIndex(null);
    }
  };

  const handleGoto = (bm: BookmarkItem) => {
    onGoto(bm);
  };

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 400 }}
      >
        <h3>책갈피</h3>

        {/* ── Add bookmark section ── */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 16,
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="책갈피 이름 입력"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleAddKeyDown}
            style={{
              flex: 1,
              padding: '6px 10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
            }}
          />
          <button
            onClick={handleAdd}
            disabled={!newName.trim()}
            style={{
              padding: '6px 16px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: newName.trim()
                ? 'var(--primary, #0046C8)'
                : 'var(--bg-secondary)',
              color: newName.trim() ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              cursor: newName.trim() ? 'pointer' : 'default',
              whiteSpace: 'nowrap',
            }}
          >
            추가
          </button>
        </div>

        {/* ── Bookmark list ── */}
        <h4
          style={{
            fontSize: '0.9rem',
            margin: '0 0 8px',
            color: 'var(--text-primary)',
          }}
        >
          책갈피 목록 ({bookmarkList.length}개)
        </h4>
        <div
          style={{
            maxHeight: 300,
            overflowY: 'auto',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 12,
          }}
        >
          {bookmarkList.length === 0 ? (
            <div
              style={{
                padding: 20,
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.82rem',
              }}
            >
              등록된 책갈피가 없습니다
            </div>
          ) : (
            bookmarkList.map((bm, index) => (
              <div
                key={`${bm.name}-${index}`}
                style={{
                  padding: '10px 12px',
                  borderBottom:
                    index < bookmarkList.length - 1
                      ? '1px solid var(--border-color)'
                      : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                {/* Name row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {renamingIndex === index ? (
                    <input
                      type="text"
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onKeyDown={(e) => handleRenameKeyDown(e, bm)}
                      onBlur={() => handleConfirmRename(bm)}
                      autoFocus
                      style={{
                        flex: 1,
                        padding: '4px 8px',
                        border: '1px solid var(--primary, #0046C8)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        marginRight: 8,
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: '0.88rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {bm.name}
                    </span>
                  )}

                  {/* Position info */}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      whiteSpace: 'nowrap',
                      marginLeft: 8,
                    }}
                  >
                    섹션 {bm.secIdx + 1}, 문단 {bm.paraIdx + 1}
                  </span>
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: 6,
                    justifyContent: 'flex-end',
                  }}
                >
                  <button
                    onClick={() => handleGoto(bm)}
                    style={{
                      padding: '3px 10px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--primary, #0046C8)',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    이동
                  </button>
                  <button
                    onClick={() => handleStartRename(index, bm.name)}
                    style={{
                      padding: '3px 10px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    이름변경
                  </button>
                  <button
                    onClick={() => handleDelete(bm)}
                    style={{
                      padding: '3px 10px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      color: '#c8102e',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    삭제
                  </button>
                </div>
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

export default BookmarkDialog;
