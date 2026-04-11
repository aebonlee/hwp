import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t } = useLanguage();
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
                  <h3>{t(feat.titleKey)}</h3>
                  <p>{t(feat.descKey)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="cta-wrapper" data-aos="fade-up">
            <Link to="/convert" className="cta-btn">
              HWP 파일 변환하기
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
              <span className="stat-number">10+</span>
              <span className="stat-label">문서 템플릿</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">HWP/HWPX</span>
              <span className="stat-label">양방향 변환</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">브라우저 처리</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
