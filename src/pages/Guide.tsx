import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Guide = (): ReactElement => {
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: '1. HWP/HWPX 파일 변환',
      body: (
        <p>
          <strong>변환</strong> 메뉴에서 .hwp 또는 .hwpx 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요.
          파일이 자동으로 마크다운으로 변환됩니다. 변환 결과를 복사하거나 .md 파일로 다운로드할 수 있습니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      title: '2. 마크다운 에디터',
      body: (
        <p>
          <strong>에디터</strong> 메뉴에서 마크다운 문법으로 문서를 직접 작성할 수 있습니다.
          작성한 문서는 Markdown, HWPX, HTML, 텍스트 형식으로 내보낼 수 있습니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: '3. HWP 뷰어',
      body: (
        <p>
          <strong>HWP 뷰어</strong> 메뉴에서 .hwp/.hwpx 파일을 업로드하면 Rust+WASM 엔진(@rhwp/core)으로
          브라우저에서 직접 렌더링합니다. 페이지 네비게이션, 줌, SVG 다운로드를 지원합니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      title: '4. 문서 생성',
      body: (
        <p>
          <strong>문서 생성</strong> 메뉴에서 보고서, 서한, 회의록, 제안서, 이력서, 증명서 등 6종의 공문서를
          위자드 형태로 간편하게 작성하고 HWPX/MD/HTML로 내보낼 수 있습니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: '5. 문서 템플릿',
      body: (
        <p>
          <strong>템플릿</strong> 메뉴에서 사업계획서, 강의계획서, 보고서 등 다양한 공문서 양식을 선택하여
          빠르게 문서를 작성할 수 있습니다. 필드를 입력하면 자동으로 문서가 생성됩니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      ),
      title: '6. 문서 저장 (로그인 필요)',
      body: (
        <p>
          로그인하면 작성한 문서를 클라우드에 저장하고 어디서든 불러올 수 있습니다.
          <strong> 내 문서</strong> 메뉴에서 저장된 문서를 관리할 수 있습니다.
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
      title: isKo ? '지원 파일 형식' : 'Supported Formats',
      body: (
        <ul>
          <li><strong>.hwpx</strong> — Open HWPML (한컴오피스 2014+)</li>
          <li><strong>.hwp</strong> — HWP 5.x 바이너리 (기본 텍스트 추출 + WASM 뷰어)</li>
          <li><strong>.md</strong> — Markdown</li>
        </ul>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: isKo ? '알려진 제한사항' : 'Known Limitations',
      body: (
        <ul>
          <li>HWP 5.x 바이너리 파일은 텍스트만 추출되며, 서식 정보는 제한적입니다.</li>
          <li>복잡한 표 병합(rowspan/colspan)은 최대한 보존하지만 일부 손실이 있을 수 있습니다.</li>
          <li>이미지는 base64로 인라인 변환됩니다.</li>
          <li>HWPX 내보내기는 기본 서식만 지원합니다.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <SEOHead title={t('site.guide.title')} path="/guide" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.guide.title')}</h2>
          <p>{t('site.guide.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-sections">
            {sections.map((sec, idx) => (
              <div key={idx} className="guide-card">
                <div className="guide-card-header">
                  <div className="guide-card-icon">{sec.icon}</div>
                  <h3>{sec.title}</h3>
                </div>
                {sec.body}
              </div>
            ))}

            <div className="tip-box">
              <p>
                <strong>Tip:</strong> {isKo
                  ? '모든 변환은 브라우저에서 직접 처리되므로 파일이 서버로 전송되지 않습니다. 개인정보가 포함된 문서도 안전하게 변환할 수 있습니다.'
                  : 'All conversions are processed directly in the browser. Files are never sent to a server, so even documents with personal information can be converted safely.'}
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Guide;
