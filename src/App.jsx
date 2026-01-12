import React, { useState, useEffect } from 'react';
import en from './i18n/en.json';
import pt from './i18n/pt.json';
import es from './i18n/es.json';

const translations = { en, pt, es };

// All real image URLs from original Framer site
const IMAGES = {
  logo: 'https://framerusercontent.com/images/KuhRNRtAMdkPUotKd3WKyy8aX8.png',
  dashboard: 'https://framerusercontent.com/images/r6pHfDhMxVww0zZw2iWCuoY.png',
  heroAvatars: [
    'https://framerusercontent.com/images/JULRia8V0uGJ38m7K35cs2mHM.png',
    'https://framerusercontent.com/images/0g2BAxpvasUh7eDWCbWaHzI5M.png',
    'https://framerusercontent.com/images/2CBydzAi5aIjb2ShPxPHPp1qI.jpg',
    'https://framerusercontent.com/images/w3uLbU7Y52vz44rYeU2HamRqrc.png',
    'https://framerusercontent.com/images/F3qs8afO6hZEJSYnmJd7HhQoBw.png',
  ],
  bento: {
    dotMatrix: 'https://framerusercontent.com/images/xcfDk8vbAh4pS19CCv1T1skqA7o.png',
    orbital: 'https://framerusercontent.com/images/u66ASMNVAMgceid2DlnzZuqYrO0.png',
  },
  smarter: [
    'https://framerusercontent.com/images/mzdBW787dLs2LHbgOEsJEe4a1Y.png',
    'https://framerusercontent.com/images/R7P81KrZy2tDfXRtc1sO6cH4.png',
    'https://framerusercontent.com/images/09OrtQQYPAIG8NcDAJ7pEsBTQ.png',
  ],
  smarterSecondary: [
    'https://framerusercontent.com/images/fpwWC2r0SG5loYpJBb2VXIFA6sU.png',
    'https://framerusercontent.com/images/av6VgZwJYhPyjeCMMITwXuZvr4.png',
  ],
  testimonials: [
    'https://framerusercontent.com/images/QrADGQTmq3J8LlfYkqvDVxCP3wc.png',
    'https://framerusercontent.com/images/ldPd9QjTVeqbcMC9KYbofTGZCA.png',
    'https://framerusercontent.com/images/lPKVWJhAaa7KtMRoqStcJ1Z9x54.png',
    'https://framerusercontent.com/images/9Y9Et3Se2h9t6HeQ1Nrki7Zndjg.png',
    'https://framerusercontent.com/images/5SvmsGUbwyGolmfue9bSL7VCIc.png',
    'https://framerusercontent.com/images/9sOLRhns5l6TC2uP5BRhF14RIUk.png',
    'https://framerusercontent.com/images/2T0ZuDGJ91K2VQX5Hu2Mk3YE2no.png',
    'https://framerusercontent.com/images/dPCyMK1mMc6lEw4PNgOWalWDnWg.png',
  ],
};

const trustLogos = ['Wealthro', 'Finyon', 'Aegra', 'Portivio', 'Vaultic', 'Altoris', 'Quantora', 'Fundara'];

export default function App() {
  const [lang, setLang] = useState('en');
  const [langOpen, setLangOpen] = useState(false);
  const [billing, setBilling] = useState('monthly');
  const [faqOpen, setFaqOpen] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const t = translations[lang];
  const langNames = { en: 'English', pt: 'Português', es: 'Español' };

  useEffect(() => {
    const close = () => setLangOpen(false);
    if (langOpen) {
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [langOpen]);

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="logo-link">
            <img src={IMAGES.logo} alt="APXLBS" className="logo-img" />
          </a>

          <div className={`nav-links ${mobileMenu ? 'open' : ''}`}>
            <a href="#hero" className="nav-link">{t.nav.home}</a>
            <a href="#bento" className="nav-link">{t.nav.feature}</a>
            <a href="#benefits" className="nav-link">{t.nav.benefit}</a>
            <a href="#pricing" className="nav-link-accent">{t.nav.pricing}</a>
            <a href="#testimonials" className="nav-link">{t.nav.testimonials}</a>
            <a href="#faq" className="nav-link">{t.nav.faq}</a>
          </div>

          <div className="nav-right">
            <div className="lang-wrap">
              <button className="lang-btn" onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}>
                🌐 {langNames[lang]} <span className="lang-arrow">▾</span>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {Object.entries(langNames).map(([code, name]) => (
                    <button
                      key={code}
                      className={`lang-option ${lang === code ? 'active' : ''}`}
                      onClick={() => { setLang(code); setLangOpen(false); }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="nav-cta">{t.nav.getStarted}</button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="ticker">
          <div className="ticker-track">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-dot">●</span> {t.hero.ticker}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-btns">
            <button className="btn-primary">{t.hero.cta}</button>
            <button className="btn-secondary">{t.hero.ctaSecondary}</button>
          </div>

          <div className="hero-dashboard">
            <img src={IMAGES.dashboard} alt="Dashboard" className="dashboard-img" />
          </div>

          <div className="hero-proof">
            <div className="avatar-stack">
              {IMAGES.heroAvatars.map((src, i) => (
                <img key={i} src={src} alt="" className="avatar" style={{ zIndex: 5 - i }} />
              ))}
            </div>
            <span className="proof-text">{t.hero.trustedBy}</span>
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="trust-section">
        <p className="trust-title">{t.trust.title}</p>
        <div className="trust-marquee">
          <div className="trust-track">
            {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
              <span key={i} className="trust-logo">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EASIER & SMARTER */}
      <section className="easier-section">
        <div className="easier-card">
          <h2 className="easier-title">{t.easier.title}</h2>
          <p className="easier-desc">{t.easier.desc}</p>
          <button className="btn-outline">{t.easier.cta} →</button>
        </div>
      </section>

      {/* BENTO GRID */}
      <section id="bento" className="bento-section">
        <h2 className="section-title">{t.bento.mainTitle}</h2>

        <div className="bento-grid">
          {/* Card 1 - Chart */}
          <div className="bento-card bento-large">
            <h3 className="bento-title">{t.bento.card1Title}</h3>
            <p className="bento-desc">{t.bento.card1Desc}</p>
            <div className="chart-container">
              <svg viewBox="0 0 400 160" className="chart-svg">
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,140 L0,120 Q40,125 70,100 T140,85 T210,70 T280,50 T350,40 T400,25 L400,140 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,120 Q40,125 70,100 T140,85 T210,70 T280,50 T350,40 T400,25"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line"
                />
                <circle cx="280" cy="50" r="6" fill="#fff" stroke="#0a0a0a" strokeWidth="3" />
              </svg>
              <div className="chart-tooltip">
                <span className="tooltip-value">$12,450</span>
                <div className="tooltip-line"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Dot Matrix */}
          <div className="bento-card">
            <h3 className="bento-title">{t.bento.card2Title}</h3>
            <p className="bento-desc">{t.bento.card2Desc}</p>
            <img src={IMAGES.bento.dotMatrix} alt="Diversified Assets" className="bento-img" />
          </div>

          {/* Card 3 - Orbital */}
          <div className="bento-card">
            <h3 className="bento-title">{t.bento.card3Title}</h3>
            <p className="bento-desc">{t.bento.card3Desc}</p>
            <img src={IMAGES.bento.orbital} alt="Real-Time Optimization" className="bento-img" />
          </div>

          {/* Card 4 - Lightning */}
          <div className="bento-card">
            <h3 className="bento-title">{t.bento.card4Title}</h3>
            <p className="bento-desc">{t.bento.card4Desc}</p>
            <div className="lightning-container">
              <svg viewBox="0 0 100 140" className="lightning-svg">
                <defs>
                  <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="40%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#E55A2B" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M60 0 L25 55 L42 55 L18 140 L85 50 L60 50 L85 0 Z"
                  fill="url(#lightningGrad)"
                  filter="url(#glow)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SMARTER INVESTING */}
      <section className="smarter-section">
        <h2 className="section-title">{t.smarter.title}</h2>

        <div className="smarter-grid">
          {[
            { title: t.smarter.card1Title, desc: t.smarter.card1Desc, img: IMAGES.smarter[0] },
            { title: t.smarter.card2Title, desc: t.smarter.card2Desc, img: IMAGES.smarter[1] },
            { title: t.smarter.card3Title, desc: t.smarter.card3Desc, img: IMAGES.smarter[2] },
          ].map((card, i) => (
            <div key={i} className="smarter-card">
              <div className="smarter-img-wrap">
                <img src={card.img} alt={card.title} className="smarter-img" />
              </div>
              <h3 className="smarter-title">{card.title}</h3>
              <p className="smarter-desc">{card.desc}</p>
              <a href="#" className="smarter-link">{t.smarter.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="benefits-section">
        <h2 className="section-title">{t.benefits.title}</h2>

        <div className="benefits-grid">
          {t.benefits.items.map((item, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon">
                {['📈', '⚙️', '👁️', '⚡', '🛡️', '📊'][i]}
              </div>
              <h4 className="benefit-title">{item.title}</h4>
              <p className="benefit-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <h2 className="section-title">{t.stats.title}</h2>

        <div className="stats-row">
          {t.stats.items.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {i < 2 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">{t.pricing.title}</h2>
        <p className="pricing-subtitle">{t.pricing.subtitle}</p>

        <div className="billing-toggle">
          <button
            className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            {t.pricing.monthly}
          </button>
          <button
            className={`toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
            onClick={() => setBilling('yearly')}
          >
            {t.pricing.yearly}
          </button>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="pricing-name">{t.pricing.plan1.name}</h3>
            <div className="pricing-price">
              {billing === 'monthly' ? t.pricing.plan1.price : t.pricing.plan1.priceYearly}
            </div>
            <div className="pricing-period">
              {billing === 'monthly' ? t.pricing.plan1.period : t.pricing.plan1.periodYearly}
            </div>
            <ul className="pricing-features">
              {t.pricing.plan1.features.map((f, i) => (
                <li key={i} className="pricing-feature">✓ {f}</li>
              ))}
            </ul>
            <button className="pricing-btn outline">{t.pricing.plan1.cta}</button>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-badge">{t.pricing.plan2.badge}</div>
            <h3 className="pricing-name">{t.pricing.plan2.name}</h3>
            <div className="pricing-price">
              {billing === 'monthly' ? t.pricing.plan2.price : t.pricing.plan2.priceYearly}
            </div>
            <div className="pricing-period">
              {billing === 'monthly' ? t.pricing.plan2.period : t.pricing.plan2.periodYearly}
            </div>
            <ul className="pricing-features">
              {t.pricing.plan2.features.map((f, i) => (
                <li key={i} className="pricing-feature">✓ {f}</li>
              ))}
            </ul>
            <button className="pricing-btn filled">{t.pricing.plan2.cta}</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">{t.testimonials.title}</h2>
        <p className="testimonials-subtitle">{t.testimonials.subtitle}</p>

        <div className="testimonials-marquee">
          <div className="testimonial-row left">
            {[...t.testimonials.items.slice(0, 4), ...t.testimonials.items.slice(0, 4)].map((item, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-author">
                  <img src={IMAGES.testimonials[i % 4]} alt={item.name} className="testimonial-avatar" />
                  <div>
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-row right">
            {[...t.testimonials.items.slice(4, 8), ...t.testimonials.items.slice(4, 8)].map((item, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-author">
                  <img src={IMAGES.testimonials[(i % 4) + 4]} alt={item.name} className="testimonial-avatar" />
                  <div>
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <h2 className="section-title">{t.faq.title}</h2>

        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${faqOpen === i ? 'open' : ''}`}
              onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon">{faqOpen === i ? '−' : '+'}</span>
              </div>
              {faqOpen === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-desc">{t.cta.subtitle}</p>
          <button className="btn-primary">{t.cta.button}</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <img src={IMAGES.logo} alt="APXLBS" className="footer-logo" />
          <div className="footer-links">
            <a href="#hero" className="footer-link">{t.nav.home}</a>
            <a href="#bento" className="footer-link">{t.nav.feature}</a>
            <a href="#benefits" className="footer-link">{t.nav.benefit}</a>
            <a href="#pricing" className="footer-link">{t.nav.pricing}</a>
            <a href="#testimonials" className="footer-link">{t.nav.testimonials}</a>
            <a href="#faq" className="footer-link">{t.nav.faq}</a>
          </div>
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
