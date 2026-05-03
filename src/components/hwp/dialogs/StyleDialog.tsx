import React, { useState, useEffect } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface StyleDialogProps {
  onClose: () => void;
  styleList: Array<{ id: number; name: string; type: string }>;
  onCreateStyle: (opts: {
    name: string;
    engName: string;
    type: string;
    nextStyleId: number;
  }) => void;
  onUpdateStyle: (id: number, props: Record<string, unknown>) => void;
  onDeleteStyle: (id: number) => void;
  onGetStyleDetail: (id: number) => Record<string, unknown> | null;
  onApplyStyle: (id: number) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const StyleDialog: React.FC<StyleDialogProps> = ({
  onClose,
  styleList,
  onCreateStyle,
  onUpdateStyle,
  onDeleteStyle,
  onGetStyleDetail,
  onApplyStyle,
}) => {
  /* ── State ── */
  const [selectedStyleId, setSelectedStyleId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [detail, setDetail] = useState<Record<string, unknown> | null>(null);

  const [newStyleForm, setNewStyleForm] = useState({
    name: '',
    engName: '',
    type: 'paragraph',
    nextStyleId: 0,
  });

  const [editForm, setEditForm] = useState({
    name: '',
    engName: '',
  });

  /* ── Effects ── */
  useEffect(() => {
    if (selectedStyleId !== null) {
      const d = onGetStyleDetail(selectedStyleId);
      setDetail(d);
      if (d) {
        setEditForm({
          name: (d.name as string) || '',
          engName: (d.engName as string) || '',
        });
      }
    } else {
      setDetail(null);
    }
  }, [selectedStyleId, onGetStyleDetail]);

  /* ── Handlers ── */
  const handleCreate = () => {
    if (!newStyleForm.name.trim()) return;
    onCreateStyle({
      name: newStyleForm.name.trim(),
      engName: newStyleForm.engName.trim(),
      type: newStyleForm.type,
      nextStyleId: newStyleForm.nextStyleId,
    });
    setNewStyleForm({ name: '', engName: '', type: 'paragraph', nextStyleId: 0 });
    setIsCreating(false);
  };

  const handleUpdate = () => {
    if (selectedStyleId === null) return;
    onUpdateStyle(selectedStyleId, {
      name: editForm.name.trim(),
      engName: editForm.engName.trim(),
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedStyleId === null) return;
    const style = styleList.find((s) => s.id === selectedStyleId);
    if (style && window.confirm(`"${style.name}" 스타일을 삭제하시겠습니까?`)) {
      onDeleteStyle(selectedStyleId);
      setSelectedStyleId(null);
      setIsEditing(false);
    }
  };

  const handleApply = () => {
    if (selectedStyleId === null) return;
    onApplyStyle(selectedStyleId);
    onClose();
  };

  /* ── Helpers ── */
  const typeLabel = (type: string) => {
    switch (type) {
      case 'paragraph':
        return '문단';
      case 'character':
        return '글자';
      default:
        return type;
    }
  };

  const formatPropSummary = (
    label: string,
    props: Record<string, unknown> | undefined
  ): string => {
    if (!props || typeof props !== 'object') return '정보 없음';
    const entries = Object.entries(props)
      .filter(([, v]) => v !== undefined && v !== null)
      .map(([k, v]) => `${k}: ${v}`)
      .slice(0, 6);
    return entries.length > 0 ? entries.join(', ') : `${label} 정보 없음`;
  };

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 640, maxWidth: '90vw' }}
      >
        <h3>스타일 관리</h3>

        <div style={{ display: 'flex', gap: 16, minHeight: 320 }}>
          {/* ── Left panel: Style list ── */}
          <div
            style={{
              width: 200,
              minWidth: 200,
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
              }}
            >
              스타일 목록 ({styleList.length})
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {styleList.length === 0 && (
                <div
                  style={{
                    padding: 16,
                    fontSize: '0.82rem',
                    color: 'var(--text-tertiary)',
                    textAlign: 'center',
                  }}
                >
                  스타일이 없습니다
                </div>
              )}
              {styleList.map((style) => (
                <div
                  key={style.id}
                  onClick={() => {
                    setSelectedStyleId(style.id);
                    setIsCreating(false);
                    setIsEditing(false);
                  }}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    background:
                      selectedStyleId === style.id
                        ? 'var(--primary-light, rgba(0,70,200,0.1))'
                        : 'transparent',
                    borderBottom: '1px solid var(--border-color)',
                    transition: 'background 0.15s',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: selectedStyleId === style.id ? 600 : 400,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {style.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-tertiary)',
                      marginTop: 2,
                    }}
                  >
                    {typeLabel(style.type)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel: Detail / Create form ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* ── Create form ── */}
            {isCreating && (
              <div
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: 12,
                    color: 'var(--text-primary)',
                  }}
                >
                  새 스타일 만들기
                </div>
                <div className="hwp-dialog-grid">
                  <label>이름</label>
                  <input
                    type="text"
                    value={newStyleForm.name}
                    onChange={(e) =>
                      setNewStyleForm({ ...newStyleForm, name: e.target.value })
                    }
                    placeholder="스타일 이름"
                  />

                  <label>영문 이름</label>
                  <input
                    type="text"
                    value={newStyleForm.engName}
                    onChange={(e) =>
                      setNewStyleForm({ ...newStyleForm, engName: e.target.value })
                    }
                    placeholder="English name"
                  />

                  <label>유형</label>
                  <select
                    value={newStyleForm.type}
                    onChange={(e) =>
                      setNewStyleForm({ ...newStyleForm, type: e.target.value })
                    }
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
                    <option value="paragraph">문단 스타일</option>
                    <option value="character">글자 스타일</option>
                  </select>

                  <label>다음 스타일</label>
                  <select
                    value={newStyleForm.nextStyleId}
                    onChange={(e) =>
                      setNewStyleForm({
                        ...newStyleForm,
                        nextStyleId: Number(e.target.value),
                      })
                    }
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
                    <option value={0}>— 같은 스타일 —</option>
                    {styleList.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 8,
                    marginTop: 12,
                  }}
                >
                  <button
                    onClick={() => setIsCreating(false)}
                    style={{
                      padding: '5px 14px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    취소
                  </button>
                  <button
                    onClick={handleCreate}
                    style={{
                      padding: '5px 14px',
                      border: '1px solid var(--primary)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--primary)',
                      color: 'white',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    만들기
                  </button>
                </div>
              </div>
            )}

            {/* ── Detail view ── */}
            {!isCreating && selectedStyleId !== null && detail && (
              <div
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 16,
                  flex: 1,
                  overflowY: 'auto',
                }}
              >
                <div className="hwp-dialog-grid">
                  <label>이름</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                    />
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      {(detail.name as string) || '—'}
                    </span>
                  )}

                  <label>영문 이름</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.engName}
                      onChange={(e) =>
                        setEditForm({ ...editForm, engName: e.target.value })
                      }
                    />
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      {(detail.engName as string) || '—'}
                    </span>
                  )}

                  <label>유형</label>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    {typeLabel((detail.type as string) || '')}
                  </span>
                </div>

                {/* CharShape summary */}
                <div style={{ marginTop: 16 }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: 6,
                    }}
                  >
                    글자 모양 (CharShape)
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      background: 'var(--bg-secondary)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      lineHeight: 1.5,
                      wordBreak: 'break-all',
                    }}
                  >
                    {formatPropSummary(
                      '글자 모양',
                      detail.charShape as Record<string, unknown> | undefined
                    )}
                  </div>
                </div>

                {/* ParaShape summary */}
                <div style={{ marginTop: 12 }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: 6,
                    }}
                  >
                    문단 모양 (ParaShape)
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      background: 'var(--bg-secondary)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      lineHeight: 1.5,
                      wordBreak: 'break-all',
                    }}
                  >
                    {formatPropSummary(
                      '문단 모양',
                      detail.paraShape as Record<string, unknown> | undefined
                    )}
                  </div>
                </div>

                {/* Edit-mode save button */}
                {isEditing && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      gap: 8,
                      marginTop: 12,
                    }}
                  >
                    <button
                      onClick={() => setIsEditing(false)}
                      style={{
                        padding: '5px 14px',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                      }}
                    >
                      취소
                    </button>
                    <button
                      onClick={handleUpdate}
                      style={{
                        padding: '5px 14px',
                        border: '1px solid var(--primary)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--primary)',
                        color: 'white',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                      }}
                    >
                      저장
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── No selection placeholder ── */}
            {!isCreating && selectedStyleId === null && (
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
                왼쪽 목록에서 스타일을 선택하세요
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom actions ── */}
        <div className="hwp-dialog-actions" style={{ marginTop: 16 }}>
          <button
            onClick={() => {
              setIsCreating(true);
              setIsEditing(false);
              setSelectedStyleId(null);
            }}
          >
            새 스타일
          </button>
          <button
            onClick={() => setIsEditing(true)}
            disabled={selectedStyleId === null || isCreating}
          >
            수정
          </button>
          <button onClick={handleDelete} disabled={selectedStyleId === null || isCreating}>
            삭제
          </button>
          <button
            className="primary"
            onClick={handleApply}
            disabled={selectedStyleId === null || isCreating}
          >
            적용
          </button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default StyleDialog;
