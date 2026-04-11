import { useState, useMemo, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { templates } from '../data/templates';
import '../styles/templates.css';

const CATEGORIES = ['all', 'business', 'education', 'official', 'personal'] as const;

const Templates = (): ReactElement => {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState<string>('all');

  const filteredTemplates = useMemo(() => {
    if (category === 'all') return templates;
    return templates.filter(tmpl => tmpl.category === category);
  }, [category]);

  return (
    <>
      <SEOHead title={t('site.templates.title')} path="/templates" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.templates.title')}</h2>
          <p>{t('site.templates.subtitle')}</p>
        </div>
      </section>

      <section className="section templates-page">
        <div className="container">
          <div className="template-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {t(`site.templates.${cat}`)}
              </button>
            ))}
          </div>

          <div className="template-grid">
            {filteredTemplates.map(tmpl => (
              <div key={tmpl.id} className="template-card">
                <span className="template-card-category">
                  {t(`site.templates.${tmpl.category}`)}
                </span>
                <h3>{language === 'en' ? tmpl.title_en : tmpl.title}</h3>
                <p>{tmpl.description}</p>
                <div className="template-card-actions">
                  <Link to={`/templates/${tmpl.id}`}>
                    <button className="primary">{t('site.templates.useTemplate')}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
