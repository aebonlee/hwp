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
      icon: '🔄',
      titleKey: 'site.convert.title',
      descKey: 'site.convert.subtitle',
      path: '/convert',
    },
    {
      icon: '✏️',
      titleKey: 'site.editor.title',
      descKey: 'site.editor.subtitle',
      path: '/editor',
    },
    {
      icon: '📄',
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {features.map((feat, idx) => (
              <Link
                key={idx}
                to={feat.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
                data-aos="fade-up"
                data-aos-delay={String(idx * 100)}
              >
                <div className="template-card" style={{ height: '100%' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feat.icon}</div>
                  <h3>{t(feat.titleKey)}</h3>
                  <p>{t(feat.descKey)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }} data-aos="fade-up">
            <Link to="/convert" className="btn-primary" style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
            }}>
              HWP 파일 변환하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
