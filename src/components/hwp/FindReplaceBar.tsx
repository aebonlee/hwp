import React from 'react';

interface FindReplaceBarProps {
  t: (key: string) => string;
  findQuery: string;
  replaceQuery: string;
  caseSensitive: boolean;
  findInfo: string;
  onFindQueryChange: (val: string) => void;
  onReplaceQueryChange: (val: string) => void;
  onCaseSensitiveChange: (val: boolean) => void;
  onFindNext: () => void;
  onReplaceOne: () => void;
  onReplaceAll: () => void;
  onClose: () => void;
}

const FindReplaceBar: React.FC<FindReplaceBarProps> = ({
  t,
  findQuery,
  replaceQuery,
  caseSensitive,
  findInfo,
  onFindQueryChange,
  onReplaceQueryChange,
  onCaseSensitiveChange,
  onFindNext,
  onReplaceOne,
  onReplaceAll,
  onClose,
}) => {
  return (
    <div className="hwp-find-bar">
      <input
        type="text"
        placeholder={t('site.hwpEditor.find')}
        value={findQuery}
        onChange={e => { onFindQueryChange(e.target.value); }}
        onKeyDown={e => { if (e.key === 'Enter') onFindNext(); }}
        autoFocus
      />
      <input
        type="text"
        placeholder={t('site.hwpEditor.replace')}
        value={replaceQuery}
        onChange={e => onReplaceQueryChange(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') onReplaceOne(); }}
      />
      <button className="hwp-toolbar-btn" onClick={onFindNext}>
        {t('site.hwpEditor.findNext')}
      </button>
      <button className="hwp-toolbar-btn" onClick={onReplaceOne}>
        {t('site.hwpEditor.replaceOne')}
      </button>
      <button className="hwp-toolbar-btn" onClick={onReplaceAll}>
        {t('site.hwpEditor.replaceAllBtn')}
      </button>
      <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '13px', whiteSpace: 'nowrap' }}>
        <input
          type="checkbox"
          checked={caseSensitive}
          onChange={e => onCaseSensitiveChange(e.target.checked)}
        />
        {t('site.hwpEditor.caseSensitive')}
      </label>
      {findInfo && <span className="hwp-find-info">{findInfo}</span>}
      <button className="hwp-find-close" onClick={onClose}>&#10005;</button>
    </div>
  );
};

export default React.memo(FindReplaceBar);
