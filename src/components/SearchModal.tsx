import type { ReactElement } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps): ReactElement | null => {
  if (!isOpen) return null;
  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <p style={{ padding: '40px', textAlign: 'center' }}>검색 기능 준비 중</p>
      </div>
    </div>
  );
};

export default SearchModal;
