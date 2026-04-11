import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Guide = (): ReactElement => {
  const { t } = useLanguage();

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
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.8' }}>
            <h3>1. HWP/HWPX 파일 변환</h3>
            <p>
              <strong>변환</strong> 메뉴에서 .hwp 또는 .hwpx 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요.
              파일이 자동으로 마크다운으로 변환됩니다. 변환 결과를 복사하거나 .md 파일로 다운로드할 수 있습니다.
            </p>

            <h3>2. 마크다운 에디터</h3>
            <p>
              <strong>에디터</strong> 메뉴에서 마크다운 문법으로 문서를 직접 작성할 수 있습니다.
              작성한 문서는 Markdown, HWPX, HTML, 텍스트 형식으로 내보낼 수 있습니다.
            </p>

            <h3>3. 문서 템플릿</h3>
            <p>
              <strong>템플릿</strong> 메뉴에서 사업계획서, 강의계획서, 보고서 등 다양한 공문서 양식을 선택하여
              빠르게 문서를 작성할 수 있습니다. 필드를 입력하면 자동으로 문서가 생성됩니다.
            </p>

            <h3>4. 문서 저장 (로그인 필요)</h3>
            <p>
              로그인하면 작성한 문서를 클라우드에 저장하고 어디서든 불러올 수 있습니다.
              <strong>내 문서</strong> 메뉴에서 저장된 문서를 관리할 수 있습니다.
            </p>

            <h3>지원 파일 형식</h3>
            <ul>
              <li><strong>.hwpx</strong> — Open HWPML (한컴오피스 2014+)</li>
              <li><strong>.hwp</strong> — HWP 5.x 바이너리 (기본 텍스트 추출)</li>
              <li><strong>.md</strong> — Markdown</li>
            </ul>

            <h3>알려진 제한사항</h3>
            <ul>
              <li>HWP 5.x 바이너리 파일은 텍스트만 추출되며, 서식 정보는 제한적입니다.</li>
              <li>복잡한 표 병합(rowspan/colspan)은 최대한 보존하지만 일부 손실이 있을 수 있습니다.</li>
              <li>이미지는 base64로 인라인 변환됩니다.</li>
              <li>HWPX 내보내기는 기본 서식만 지원합니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
