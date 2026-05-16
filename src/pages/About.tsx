import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';
import '../styles/about.css';

const About = (): ReactElement => {
  const { language } = useLanguage();
  useAOS();

  const isKo = language === 'ko';

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: isKo ? 'HWP/HWPX → Markdown 변환' : 'HWP/HWPX → Markdown Conversion',
      desc: isKo
        ? '한글(HWP, HWPX) 파일을 업로드하면 마크다운으로 자동 변환합니다. 표, 이미지, 서식이 모두 유지됩니다.'
        : 'Upload HWP/HWPX files to automatically convert them to Markdown. Tables, images, and formatting are preserved.',
      steps: isKo
        ? ['변환 페이지에서 파일을 드래그 또는 클릭하여 업로드', '변환 결과를 미리보기로 확인', '마크다운 복사 또는 다운로드']
        : ['Drag or click to upload a file on the Convert page', 'Preview the conversion result', 'Copy or download the Markdown'],
      path: '/convert',
      badge: isKo ? '핵심 기능' : 'Core',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: isKo ? 'AI 문서 휴머나이징' : 'AI Document Humanizer',
      desc: isKo
        ? 'AI가 생성한 문서를 사람이 작성한 것처럼 자연스럽게 변환합니다. 변환 강도와 어체를 선택할 수 있습니다.'
        : 'Transform AI-generated documents into natural, human-written text. Choose intensity and tone.',
      steps: isKo
        ? ['HWP/HWPX/TXT 파일 업로드 또는 텍스트 직접 붙여넣기', '변환 강도(가벼움/보통/적극적)와 어체(격식/반말/학술) 선택', '변환 시작 → 문장별 비교 결과 확인']
        : ['Upload a file or paste text directly', 'Select intensity (Light/Moderate/Aggressive) and tone (Formal/Casual/Academic)', 'Start conversion → Review sentence-by-sentence comparison'],
      path: '/humanize',
      badge: 'AI',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      title: isKo ? '마크다운 에디터' : 'Markdown Editor',
      desc: isKo
        ? '실시간 미리보기가 지원되는 마크다운 에디터로 문서를 작성하고, HWPX/HTML/TXT로 내보낼 수 있습니다.'
        : 'Write documents with a live-preview Markdown editor and export to HWPX/HTML/TXT.',
      steps: isKo
        ? ['왼쪽 패널에 마크다운 작성 → 오른쪽 실시간 미리보기', '작성 완료 후 내보내기 버튼으로 원하는 형식 선택', '문서함에 저장하여 나중에 다시 편집 가능']
        : ['Write Markdown in the left panel → live preview on the right', 'Click Export to choose your desired format', 'Save to your documents for later editing'],
      path: '/md-editor',
      badge: isKo ? '편집' : 'Edit',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: isKo ? 'HWP 에디터 (WASM)' : 'HWP Editor (WASM)',
      desc: isKo
        ? 'WebAssembly 기반으로 브라우저에서 HWP 파일을 직접 편집합니다. 글꼴, 표, 이미지 등을 지원합니다.'
        : 'Edit HWP files directly in the browser using WebAssembly. Supports fonts, tables, and images.',
      steps: isKo
        ? ['새 문서 작성 또는 기존 HWP 파일 열기', '툴바로 서식 편집 (굵게, 표, 이미지 등)', 'HWPX 또는 HWP로 내보내기']
        : ['Create a new document or open an existing HWP file', 'Use the toolbar for formatting (bold, tables, images, etc.)', 'Export as HWPX or HWP'],
      path: '/hwp-editor',
      badge: 'WASM',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: isKo ? 'HWP 뷰어' : 'HWP Viewer',
      desc: isKo
        ? 'HWP 파일을 설치 없이 브라우저에서 열람합니다. WASM 엔진으로 원본 레이아웃을 그대로 재현합니다.'
        : 'View HWP files in the browser without installation. The WASM engine faithfully reproduces the original layout.',
      steps: isKo
        ? ['뷰어 페이지에서 HWP 파일 업로드', '페이지 단위로 문서 탐색', 'SVG로 내보내기 가능']
        : ['Upload an HWP file on the Viewer page', 'Navigate the document page by page', 'Export as SVG'],
      path: '/viewer',
      badge: isKo ? '열람' : 'View',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      ),
      title: isKo ? 'AI 문서 작성' : 'AI Document Writer',
      desc: isKo
        ? 'Claude 또는 ChatGPT API를 활용하여 보고서, 기획서, 강의안 등을 AI가 자동 생성합니다.'
        : 'Use Claude or ChatGPT API to auto-generate reports, proposals, lesson plans, and more.',
      steps: isKo
        ? ['API 키 설정 (브라우저에만 저장, 서버 전송 없음)', '문서 유형 선택 후 주제 입력', 'AI 생성 → 결과를 에디터에서 편집 또는 HWPX로 내보내기']
        : ['Set up API key (stored in browser only, never sent to server)', 'Select document type and enter topic', 'AI generates → Edit in editor or export as HWPX'],
      path: '/ai-writer',
      badge: 'AI',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: isKo ? '사업계획서 자동 작성' : 'Business Plan Generator',
      desc: isKo
        ? '4종 사업계획서(일반/기술/소셜/투자유치)를 위자드 형태로 간편하게 작성하고 HWPX로 내보냅니다.'
        : 'Create 4 types of business plans (General/Tech/Social/Investment) with a wizard and export to HWPX.',
      steps: isKo
        ? ['사업계획서 유형 선택', '단계별 위자드에서 정보 입력', '미리보기 확인 후 HWPX/Markdown 내보내기']
        : ['Select business plan type', 'Fill in information step by step in the wizard', 'Preview and export as HWPX/Markdown'],
      path: '/business-plan',
      badge: isKo ? '생성' : 'Create',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: isKo ? '템플릿 & 문서 관리' : 'Templates & Document Management',
      desc: isKo
        ? '자주 사용하는 문서를 템플릿으로 저장하고, {{필드명}} 치환으로 빠르게 재사용합니다.'
        : 'Save frequently used documents as templates and quickly reuse them with {{field}} substitution.',
      steps: isKo
        ? ['파일 업로드 또는 직접 작성으로 템플릿 생성', '{{회사명}}, {{날짜}} 등 필드 자동 감지', '템플릿 사용 시 필드만 채우면 완성']
        : ['Create templates by uploading or writing directly', 'Auto-detect fields like {{company}}, {{date}}', 'Fill in fields to generate completed documents'],
      path: '/templates',
      badge: isKo ? '관리' : 'Manage',
    },
  ];

  return (
    <>
      <SEOHead
        title={isKo ? 'About | HWP Edit' : 'About | HWP Edit'}
        description={isKo ? '한글(HWP/HWPX) 문서를 웹에서 편집·변환·생성·관리하는 통합 도구' : 'All-in-one tool for editing, converting, and managing HWP/HWPX documents on the web'}
      />

      {/* Hero */}
      <section className="page-header about-hero">
        <div className="container">
          <h1>{isKo ? 'HWP Edit' : 'HWP Edit'}</h1>
          <p>{isKo ? '한글 문서를 웹에서 편집·변환·생성·관리하는 통합 플랫폼' : 'All-in-one platform to edit, convert, create & manage HWP documents on the web'}</p>
        </div>
      </section>

      {/* 사이트 소개 */}
      <section className="section about-intro" data-aos="fade-up">
        <div className="container">
          <div className="about-intro-card">
            <h2>{isKo ? '사이트 소개' : 'About This Site'}</h2>
            <p>
              {isKo
                ? 'HWP Edit는 별도 프로그램 설치 없이 웹 브라우저에서 한글(HWP/HWPX) 문서를 열람, 편집, 변환, 생성할 수 있는 통합 도구입니다. WebAssembly 기반의 HWP 렌더링 엔진과 AI 문서 처리 기능을 결합하여, 한글 문서 작업의 모든 과정을 웹에서 완결할 수 있습니다.'
                : 'HWP Edit is an all-in-one tool for viewing, editing, converting, and creating HWP/HWPX documents directly in your web browser — no software installation required. It combines a WebAssembly-based HWP rendering engine with AI document processing to handle every step of Korean document workflows on the web.'}
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <strong>{isKo ? '설치 불필요' : 'No Installation'}</strong>
                <span>{isKo ? '웹 브라우저만으로 사용' : 'Works in any browser'}</span>
              </div>
              <div className="highlight-item">
                <strong>{isKo ? 'AI 기반' : 'AI-Powered'}</strong>
                <span>{isKo ? 'GPT-4o 문서 처리' : 'GPT-4o document processing'}</span>
              </div>
              <div className="highlight-item">
                <strong>{isKo ? 'WASM 엔진' : 'WASM Engine'}</strong>
                <span>{isKo ? '원본 레이아웃 완벽 재현' : 'Pixel-perfect rendering'}</span>
              </div>
              <div className="highlight-item">
                <strong>{isKo ? '다크모드' : 'Dark Mode'}</strong>
                <span>{isKo ? '5색 테마 + 자동 전환' : '5 color themes + auto switch'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기능 상세 가이드 */}
      <section className="section about-features">
        <div className="container">
          <h2 className="about-section-title" data-aos="fade-up">
            {isKo ? '기능 소개 & 사용법' : 'Features & How to Use'}
          </h2>
          <p className="about-section-subtitle" data-aos="fade-up">
            {isKo ? '각 기능의 사용 방법을 단계별로 안내합니다' : 'Step-by-step guide for each feature'}
          </p>

          <div className="about-feature-list">
            {features.map((feature, i) => (
              <div key={i} className="about-feature-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="feature-card-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-title-area">
                    <h3>{feature.title}</h3>
                    <span className="feature-badge">{feature.badge}</span>
                  </div>
                </div>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-steps">
                  <span className="steps-label">{isKo ? '사용 방법' : 'How to use'}</span>
                  <ol>
                    {feature.steps.map((step, j) => (
                      <li key={j}>{step}</li>
                    ))}
                  </ol>
                </div>
                <Link to={feature.path} className="feature-link">
                  {isKo ? '바로가기' : 'Go to feature'} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 개발사 정보 */}
      <section className="section about-company" data-aos="fade-up">
        <div className="container">
          <div className="about-company-card">
            <span className="company-badge">DEVELOPED BY</span>
            <h3>{isKo ? '드림아이티비즈 (DreamIT Biz)' : 'DreamIT Biz'}</h3>
            <p>{isKo ? '100개 교육 사이트를 운영하는 에듀테크 전문 기업' : 'EdTech company operating 100+ educational sites'}</p>
            <div className="company-contacts">
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
              <a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer">www.dreamitbiz.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
