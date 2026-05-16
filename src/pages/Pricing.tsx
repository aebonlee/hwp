import { useState, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const PLANS = [
  {
    key: 'free',
    nameKey: 'site.pricing.freeName',
    price: 0,
    priceLabel: '무료',
    priceLabelEn: 'Free',
    descKey: 'site.pricing.freeDesc',
    featuresKey: 'site.pricing.freeFeatures',
    btnLabelKey: 'site.pricing.freeBtn',
    btnStyle: 'default' as const,
    popular: false,
  },
  {
    key: 'basic',
    nameKey: 'site.pricing.basicName',
    price: 9900,
    priceLabel: '₩9,900',
    priceLabelEn: '₩9,900',
    period: '/월',
    periodEn: '/mo',
    descKey: 'site.pricing.basicDesc',
    featuresKey: 'site.pricing.basicFeatures',
    btnLabelKey: 'site.pricing.basicBtn',
    btnStyle: 'outline' as const,
    popular: false,
  },
  {
    key: 'pro',
    nameKey: 'site.pricing.proName',
    price: 29900,
    priceLabel: '₩29,900',
    priceLabelEn: '₩29,900',
    period: '/월',
    periodEn: '/mo',
    descKey: 'site.pricing.proDesc',
    featuresKey: 'site.pricing.proFeatures',
    btnLabelKey: 'site.pricing.proBtn',
    btnStyle: 'primary' as const,
    popular: true,
  },
];

const COMPARE_KEYS = [
  'price', 'converts', 'humanize', 'maxLength', 'export', 'storage', 'support',
] as const;

const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'] as const;

const Pricing = (): ReactElement => {
  const { t, language } = useLanguage();
  const { isLoggedIn } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  useAOS();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handlePlanClick = (plan: typeof PLANS[number]) => {
    if (plan.key === 'free') {
      navigate('/register');
      return;
    }
    if (!isLoggedIn) {
      toast.showToast(t('site.pricing.loginRequired') as string, 'warning');
      navigate('/login');
      return;
    }
    toast.showToast(t('site.pricing.comingSoon') as string, 'info');
  };

  const getFeatures = (key: string): string[] => {
    const val = t(key);
    if (Array.isArray(val)) return val as string[];
    if (typeof val === 'string') return val.split('|');
    return [];
  };

  return (
    <>
      <SEOHead title={t('site.pricing.title')} description={t('site.pricing.subtitle')} path="/pricing" />

      <section className="page-header">
        <div className="container">
          <span className="pricing-tag">PRICING</span>
          <h2>{t('site.pricing.title')}</h2>
          <p>{t('site.pricing.subtitle')}</p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid pricing-grid-3">
            {PLANS.map((plan, idx) => (
              <div
                key={plan.key}
                className={`pricing-card${plan.popular ? ' pricing-card-popular' : ''}`}
                data-aos="fade-up" data-aos-delay={idx * 100}
              >
                {plan.popular && <span className="pricing-popular-badge">{t('site.pricing.recommended')}</span>}
                <h3 className="pricing-plan-name">{t(plan.nameKey)}</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">{language === 'en' ? plan.priceLabelEn : plan.priceLabel}</span>
                  {plan.period && <span className="pricing-period">{language === 'en' ? plan.periodEn : plan.period}</span>}
                </div>
                <p className="pricing-desc">{t(plan.descKey)}</p>
                <ul className="pricing-features">
                  {getFeatures(plan.featuresKey).map((f, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn pricing-btn ${
                    plan.btnStyle === 'primary' ? 'btn-primary' :
                    plan.btnStyle === 'outline' ? 'btn-secondary' : 'btn-outline'
                  }`}
                  onClick={() => handlePlanClick(plan)}
                >
                  {t(plan.btnLabelKey)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pricing-compare-section">
        <div className="container">
          <h3 className="section-title text-center">{t('site.pricing.compareTitle')}</h3>
          <div className="pricing-table-wrap">
            <table className="pricing-compare-table">
              <thead>
                <tr>
                  <th>{t('site.pricing.compareItem')}</th>
                  <th>Free</th>
                  <th>Basic</th>
                  <th className="pricing-popular-col">Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_KEYS.map((key) => (
                  <tr key={key}>
                    <td>{t(`site.pricing.compare.${key}.label`)}</td>
                    <td>{t(`site.pricing.compare.${key}.free`)}</td>
                    <td>{t(`site.pricing.compare.${key}.basic`)}</td>
                    <td className="pricing-popular-col">{t(`site.pricing.compare.${key}.pro`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq-section">
        <div className="container">
          <div className="pricing-faq-inner">
            <h3 className="section-title text-center">{t('site.pricing.faqTitle')}</h3>
            <div className="pricing-faq-list">
              {FAQ_KEYS.map((key, i) => (
                <div key={key} className={`pricing-faq-item${openFaq === i ? ' pricing-faq-open' : ''}`}>
                  <button className="pricing-faq-question" onClick={() => setOpenFaq(prev => prev === i ? null : i)}>
                    {t(`site.pricing.${key}.q`)}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="pricing-faq-chevron">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFaq === i && <div className="pricing-faq-answer">{t(`site.pricing.${key}.a`)}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('site.pricing.ctaTitle')}</h2>
            <p>{t('site.pricing.ctaDesc')}</p>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              {t('site.pricing.ctaBtn')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
