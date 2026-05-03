import React, { useRef, useEffect } from 'react';

/* ── Props ────────────────────────────────────────────────────────────── */

interface ContextMenuProps {
  menu: {
    x: number;
    y: number;
    type: 'body' | 'table' | 'image' | 'shape' | 'picture';
    tableInfo?: {
      secIdx: number;
      paraIdx: number;
      controlIdx: number;
      row: number;
      col: number;
      cellIdx: number;
    };
    shapeInfo?: {
      secIdx: number;
      paraIdx: number;
      controlIdx: number;
    };
    pictureInfo?: {
      secIdx: number;
      paraIdx: number;
      controlIdx: number;
    };
  };
  onClose: () => void;

  // Body context
  onUndo: () => void;
  onRedo: () => void;
  onCopy: () => void;
  onCut: () => void;
  onPaste: () => void;

  // Table context
  onEnterCell: () => void;
  onInsertRowBefore: () => void;
  onInsertRowAfter: () => void;
  onDeleteRow: () => void;
  onInsertColBefore: () => void;
  onInsertColAfter: () => void;
  onDeleteCol: () => void;
  onMergeCells: () => void;
  onSplitCell: () => void;
  // Phase 3
  onTableProps: () => void;
  onTableFormula: () => void;
  onDeleteTable: () => void;

  // Phase 4: Shape / Picture context
  onShapeProps: () => void;
  onDeleteShape: () => void;
  onPictureProps: () => void;
  onDeletePicture: () => void;
  onDownloadImage: () => void;
  onZOrderFront: () => void;
  onZOrderBack: () => void;
  onZOrderForward: () => void;
  onZOrderBackward: () => void;
  onGroupShapes: () => void;
  onUngroupShape: () => void;

  // Phase 5: Field
  onFieldProps: () => void;
  onRemoveField: () => void;

  // Phase 8: Navigation
  onFindNextControl: () => void;
  onFindPrevControl: () => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const ContextMenu: React.FC<ContextMenuProps> = ({
  menu,
  onClose,
  // Body
  onUndo,
  onRedo,
  onCopy,
  onCut,
  onPaste,
  // Table
  onEnterCell,
  onInsertRowBefore,
  onInsertRowAfter,
  onDeleteRow,
  onInsertColBefore,
  onInsertColAfter,
  onDeleteCol,
  onMergeCells,
  onSplitCell,
  onTableProps,
  onTableFormula,
  onDeleteTable,
  // Shape
  onShapeProps,
  onDeleteShape,
  // Picture
  onPictureProps,
  onDeletePicture,
  onDownloadImage,
  // Z-order (shared by shape & picture)
  onZOrderFront,
  onZOrderBack,
  onZOrderForward,
  onZOrderBackward,
  // Group
  onGroupShapes,
  onUngroupShape,
  // Field
  onFieldProps: _onFieldProps,
  onRemoveField: _onRemoveField,
  // Navigation
  onFindNextControl: _onFindNextControl,
  onFindPrevControl: _onFindPrevControl,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  /* ── Outside-click detection ── */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  /* ── Escape key listener ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  /* ── Helper: button that fires handler then closes ── */
  const item = (label: string, handler: () => void) => (
    <button onClick={() => { handler(); onClose(); }}>{label}</button>
  );

  const divider = <div className="hwp-ctx-divider" />;

  /* ── Z-order submenu (shared by shape & picture) ── */
  const zOrderItems = (
    <>
      {item('맨 앞으로', onZOrderFront)}
      {item('맨 뒤로', onZOrderBack)}
      {item('앞으로', onZOrderForward)}
      {item('뒤로', onZOrderBackward)}
    </>
  );

  /* ── Render menu items by type ── */
  const renderBody = () => (
    <>
      {item('실행 취소', onUndo)}
      {item('다시 실행', onRedo)}
      {divider}
      {item('복사 (Ctrl+C)', onCopy)}
      {item('잘라내기 (Ctrl+X)', onCut)}
      {item('붙여넣기 (Ctrl+V)', onPaste)}
    </>
  );

  const renderTable = () => (
    <>
      {item('셀 편집', onEnterCell)}
      {divider}
      {item('위에 행 삽입', onInsertRowBefore)}
      {item('아래에 행 삽입', onInsertRowAfter)}
      {item('행 삭제', onDeleteRow)}
      {divider}
      {item('왼쪽에 열 삽입', onInsertColBefore)}
      {item('오른쪽에 열 삽입', onInsertColAfter)}
      {item('열 삭제', onDeleteCol)}
      {divider}
      {item('셀 병합', onMergeCells)}
      {item('셀 분할', onSplitCell)}
      {divider}
      {item('표 속성', onTableProps)}
      {item('표 계산식', onTableFormula)}
      {item('표 삭제', onDeleteTable)}
    </>
  );

  const renderShape = () => (
    <>
      {item('개체 속성', onShapeProps)}
      {divider}
      {zOrderItems}
      {divider}
      {item('그룹', onGroupShapes)}
      {item('그룹 해제', onUngroupShape)}
      {divider}
      {item('개체 삭제', onDeleteShape)}
    </>
  );

  const renderPicture = () => (
    <>
      {item('그림 속성', onPictureProps)}
      {item('이미지 다운로드', onDownloadImage)}
      {divider}
      {zOrderItems}
      {divider}
      {item('그림 삭제', onDeletePicture)}
    </>
  );

  const renderMenu = () => {
    switch (menu.type) {
      case 'table':
        return renderTable();
      case 'shape':
        return renderShape();
      case 'picture':
      case 'image':
        return renderPicture();
      case 'body':
      default:
        return renderBody();
    }
  };

  return (
    <div
      ref={ref}
      className="hwp-context-menu"
      style={{ position: 'fixed', left: menu.x, top: menu.y, zIndex: 9999 }}
    >
      {renderMenu()}
    </div>
  );
};

export default React.memo(ContextMenu);
