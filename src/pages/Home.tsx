import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t, language } = useLanguage();
  useAOS();

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      titleKey: 'site.convert.title',
      descKey: 'site.convert.subtitle',
      path: '/convert',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      titleKey: 'site.editor.title',
      descKey: 'site.editor.subtitle',
      path: '/editor',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      ),
      title: language === 'ko' ? '사업계획서 자동 작성' : 'Auto Business Plan',
      desc: language === 'ko' ? '4종 사업계획서를 위자드로 간편하게 작성하고 HWPX로 내보냅니다' : 'Create 4 types of business plans with a wizard and export to HWPX',
      path: '/business-plan',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      titleKey: 'site.templates.title',
      descKey: 'site.templates.subtitle',
      path: '/templates',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: language === 'ko' ? 'HWP 도구 생태계' : 'HWP Tools Ecosystem',
      desc: language === 'ko' ? 'Go, Python, Rust, MCP 기반 오픈소스 HWP 도구 모음' : 'Open-source HWP tools based on Go, Python, Rust, and MCP',
      path: '/tools',
    },
  ];

  return (
    <>
      <SEOHead />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.home.title')}</h2>
          <p>{t('site.home.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="site-welcome" data-aos="fade-up">
            <h3>{t('site.home.welcome')}</h3>
            <p>{t('site.home.description')}</p>
          </div>

          <div className="feature-grid">
            {features.map((feat, idx) => (
              <Link
                key={idx}
                to={feat.path}
                className="feature-card-link"
                data-aos="fade-up"
                data-aos-delay={String(idx * 100)}
              >
                <div className="feature-card">
                  <div className="feature-card-icon">
                    {feat.icon}
                  </div>
                  <h3>{'titleKey' in feat ? t(feat.titleKey as string) : (feat as { title: string }).title}</h3>
                  <p>{'descKey' in feat ? t(feat.descKey as string) : (feat as { desc: string }).desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="cta-wrapper" data-aos="fade-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/business-plan" className="cta-btn">
              {language === 'ko' ? '사업계획서 작성하기' : 'Create Business Plan'}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/convert" className="cta-btn" style={{ background: 'var(--bg-primary)', color: 'var(--primary)', border: '2px solid var(--primary)' }}>
              {language === 'ko' ? 'HWP 변환하기' : 'Convert HWP'}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-row" data-aos="fade-up">
            <div className="stat-item">
              <span className="stat-number">4{language === 'ko' ? '종' : ' Types'}</span>
              <span className="stat-label">{language === 'ko' ? '사업계획서' : 'Business Plans'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">{language === 'ko' ? '변환 향상' : 'Enhanced'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">{language === 'ko' ? '브라우저 처리' : 'Browser-based'}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
