import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const tools = [
  {
    name: 'hwp2md',
    badge: 'Go CLI',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    descKo: 'HWP/HWPX 문서를 Markdown으로 변환하는 Go CLI 도구입니다. 2단계 파이프라인(파서 + LLM)으로 복잡한 표, 중첩 테이블, 다단 구성도 정확하게 변환합니다.',
    descEn: 'Go CLI tool that converts HWP/HWPX documents to Markdown. Uses a 2-stage pipeline (parser + LLM) to accurately handle complex tables, nested tables, and multi-column layouts.',
    featuresKo: ['HWPX 파서 + IR 중간 표현', 'Claude/GPT/Gemini/Solar/Ollama LLM 지원', '배치 변환 지원'],
    featuresEn: ['HWPX parser + IR intermediate representation', 'Claude/GPT/Gemini/Solar/Ollama LLM support', 'Batch conversion support'],
    install: 'go install github.com/aebonlee/hwp2md@latest',
    github: 'https://github.com/aebonlee/hwp2md',
  },
  {
    name: 'hwp-mcp',
    badge: 'Python MCP',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    descKo: 'HWP를 Claude 등 AI 모델이 직접 제어할 수 있도록 해주는 MCP(Model Context Protocol) 서버입니다. 문서 생성, 편집, 표 작업, 템플릿 기반 자동 생성을 AI로 수행합니다.',
    descEn: 'MCP (Model Context Protocol) server that enables AI models like Claude to directly control HWP documents. Supports document creation, editing, table operations, and template-based auto-generation.',
    featuresKo: ['문서 생성/열기/저장', '텍스트 삽입 및 글꼴 설정', '테이블 생성 및 데이터 채우기', '배치 작업 지원'],
    featuresEn: ['Document create/open/save', 'Text insertion & font settings', 'Table creation & data filling', 'Batch operations support'],
    install: 'git clone https://github.com/aebonlee/hwp-mcp.git\npip install -r requirements.txt',
    github: 'https://github.com/aebonlee/hwp-mcp',
  },
  {
    name: 'python-hwplib',
    badge: 'Python + Java',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    descKo: 'Java의 hwplib 패키지를 Python에서 JPype를 통해 사용할 수 있게 해주는 라이브러리입니다. HWP 파일에서 텍스트를 추출할 때 가장 높은 정확도를 보여줍니다.',
    descEn: 'Library that makes the Java hwplib package accessible in Python through JPype. Shows the highest accuracy when extracting text from HWP files.',
    featuresKo: ['Java hwplib 기반 고정확도 텍스트 추출', 'JPype 브릿지로 Python 연동', 'Flask API 서버 포함'],
    featuresEn: ['High-accuracy text extraction via Java hwplib', 'Python integration through JPype bridge', 'Includes Flask API server'],
    install: 'pip install JPype1\npython hwp_loader.py --hwp_jar_path <jar> --file_path <hwp>',
    github: 'https://github.com/aebonlee/python-hwplib',
  },
  {
    name: 'rhwp',
    badge: 'Rust + WASM',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    descKo: 'Rust + WebAssembly 기반 오픈소스 HWP/HWPX 뷰어/에디터입니다. 브라우저에서 설치 없이 한글 문서를 열람하고 편집할 수 있습니다. VS Code 확장도 제공합니다.',
    descEn: 'Open-source HWP/HWPX viewer/editor based on Rust + WebAssembly. View and edit Korean documents in the browser without installation. Also provides a VS Code extension.',
    featuresKo: ['Rust + WASM 브라우저 렌더링', 'VS Code 확장 제공', 'SVG 내보내기 지원', '폰트 서브셋 임베딩'],
    featuresEn: ['Rust + WASM browser rendering', 'VS Code extension available', 'SVG export support', 'Font subset embedding'],
    install: 'cargo install rhwp',
    github: 'https://github.com/aebonlee/rhwp',
  },
];

const Tools = (): ReactElement => {
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <SEOHead title={t('site.tools.title')} path="/tools" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.tools.title')}</h2>
          <p>{t('site.tools.subtitle')}</p>
        </div>
      </section>

      <section className="section tools-page">
        <div className="container">
          <div className="tools-grid">
            {tools.map(tool => (
              <div key={tool.name} className="tool-card">
                <div className="tool-card-header">
                  <div className="tool-card-icon">{tool.icon}</div>
                  <div>
                    <h3>
                      {tool.name}
                      <span className="tool-card-badge">{tool.badge}</span>
                    </h3>
                  </div>
                </div>

                <p className="tool-card-desc">
                  {isKo ? tool.descKo : tool.descEn}
                </p>

                <div className="tool-card-features">
                  <h4>{t('site.tools.features')}</h4>
                  <ul>
                    {(isKo ? tool.featuresKo : tool.featuresEn).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="tool-card-code">
                  <pre>{tool.install}</pre>
                </div>

                <div className="tool-card-links">
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-card-link"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t('site.tools.github')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="tip-box" style={{ marginTop: '32px' }}>
            <p>
              <strong>Tip:</strong> {isKo
                ? '이 사이트(HWP Web)에서는 hwp2md의 HWPX 파서와 동일한 기술을 브라우저에서 직접 사용합니다. 서버 전송 없이 안전하게 문서를 변환할 수 있습니다.'
                : 'This site (HWP Web) uses the same HWPX parser technology as hwp2md directly in the browser. Convert documents safely without server uploads.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
