import { useState, useRef, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { downloadText } from '../utils/fileUtils';
import '../styles/editor.css';

const Editor = (): ReactElement => {
  const { t } = useLanguage();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showExport, setShowExport] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const handleExport = async (format: string) => {
    setShowExport(false);
    const fileName = (title || t('site.editor.untitled'));

    switch (format) {
      case 'md':
        downloadText(content, `${fileName}.md`, 'text/markdown');
        break;
      case 'html': {
        const html = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${fileName}</title></head>
<body>${content}</body>
</html>`;
        downloadText(html, `${fileName}.html`, 'text/html');
        break;
      }
      case 'txt':
        downloadText(content, `${fileName}.txt`, 'text/plain');
        break;
      case 'hwpx': {
        try {
          const { generateHwpx } = await import('../lib/hwpxWriter/generator');
          const blob = await generateHwpx(content, title || t('site.editor.untitled'));
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${fileName}.hwpx`;
          a.click();
          URL.revokeObjectURL(url);
        } catch (err) {
          console.error('HWPX export error:', err);
          alert('HWPX 내보내기 중 오류가 발생했습니다.');
        }
        break;
      }
    }
  };

  return (
    <>
      <SEOHead title={t('site.editor.title')} path="/editor" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.editor.title')}</h2>
          <p>{t('site.editor.subtitle')}</p>
        </div>
      </section>

      <section className="section editor-page">
        <div className="container">
          <div className="editor-toolbar">
            <input
              className="editor-title-input"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t('site.editor.untitled')}
            />
            <div className="editor-actions">
              <div className="export-menu-wrapper" ref={exportRef}>
                <button className="editor-btn" onClick={() => setShowExport(!showExport)}>
                  {t('site.editor.export')} ▾
                </button>
                {showExport && (
                  <div className="export-dropdown">
                    <button onClick={() => handleExport('md')}>{t('site.editor.exportMd')}</button>
                    <button onClick={() => handleExport('hwpx')}>{t('site.editor.exportHwpx')}</button>
                    <button onClick={() => handleExport('html')}>{t('site.editor.exportHtml')}</button>
                    <button onClick={() => handleExport('txt')}>{t('site.editor.exportTxt')}</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md-editor-wrapper">
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="마크다운으로 문서를 작성하세요..."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Editor;
