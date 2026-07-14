import React, { useState } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: '#',
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
        <path d="M18.88 5a19.8 19.8 0 0 0-4.63-1.42.06.06 0 0 0-.08.04 14.36 14.36 0 0 0-.63 1.29 18.52 18.52 0 0 0-5.08 0 14.7 14.7 0 0 0-.64-1.29.07.07 0 0 0-.08-.04 19.78 19.78 0 0 0-4.63 1.42.08.08 0 0 0-.03.06c-2.9 4.31-3.69 8.52-3.3 12.67a.08.08 0 0 0 .03.06 20.08 20.08 0 0 0 6.07 3.07.07.07 0 0 0 .08-.02c.47-.64.88-1.32 1.23-2.03a.08.08 0 0 0-.04-.1 13.06 13.06 0 0 1-1.9-1c-.04-.03-.04-.08-.01-.11a9.56 9.56 0 0 0 .39-.3a.07.07 0 0 1 .07-.01 14.35 14.35 0 0 0 11.23 0 .07.07 0 0 1 .07.01c.13.1.26.2.39.3.03.03.03.08-.01.11a12.75 12.75 0 0 1-1.9 1 .08.08 0 0 0-.04.1c.35.71.76 1.39 1.23 2.03a.07.07 0 0 0 .08.02 20.08 20.08 0 0 0 6.07-3.07.08.08 0 0 0 .03-.06c.46-4.81-.32-9.02-3.3-12.67a.08.08 0 0 0-.03-.06z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* ── Top Section: RATING & GET IN TOUCH ── */}
      <div className="footer-top split-layout">

        {/* Left Side: Rating */}
        <div className="footer-top-left">
          <h2 className="footer-heading-small">RATE YOUR EXPERIENCE</h2>
          <p className="footer-subheading">HELP US IMPROVE ヾ(≧▽≦*)o</p>

          <div className="rating-component">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`rating-pillar ${(hoveredRating !== null ? i <= hoveredRating : selectedRating !== null && i <= selectedRating) ? 'active' : ''}`}
            onMouseEnter={() => setHoveredRating(i)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() => setSelectedRating(i)}
              />
            ))}
          </div>
          <div className="rating-label">
            {selectedRating !== null ? `${selectedRating + 1} / 10` : 'RATE OUT OF 10'}
          </div>
        </div>

        {/* Right Side: Social Boxes */}
        <div className="footer-top-right">
          <h2 className="footer-heading-small">GET IN TOUCH</h2>
          <p className="footer-subheading">CONNECT WITH US</p>

          <div className="social-boxes-row">
            {SOCIAL_LINKS.map((link, idx) => (
              <a key={idx} href={link.href} className="social-box" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="footer-divider"></div>

      {/* ── Bottom Section: Info Grid ── */}
      <div className="footer-bottom">
        <div className="footer-grid">
          {/* Column 1 – IEEE About */}
          <div className="footer-col footer-col-about">
            <h3 className="footer-col-brand">IEEE</h3>
            <p className="footer-col-desc">
              The IEEE Student Branch at SRM University AP enhances the student learning experience through technical and social events, offering access to valuable membership benefits. It also provides vital networking opportunities with global peers, academicians, and professional engineers.
            </p>
          </div>

          {/* Column 2 – Build on IEEE */}
          <div className="footer-col">
            <h4 className="footer-col-title">BUILD ON IEEE</h4>
            <ul className="footer-col-list">
              <li><a href="#">DEVELOPER DOCS</a></li>
              <li><a href="#">MAINNET CORE HUB</a></li>
              <li><a href="#">TESTNET BRIDGE</a></li>
              <li><a href="#">BLOCK EXPLORER</a></li>
              <li><a href="#">SYSTEM REGISTRY</a></li>
            </ul>
          </div>

          {/* Column 3 – Connect Portals */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONNECT PORTALS</h4>
            <ul className="footer-col-list">
              <li><a href="#">DISCORD COMMUNITY</a></li>
              <li><a href="#">TWITTER / X FEED</a></li>
              <li><a href="#">TELEGRAM CANALS</a></li>
              <li><a href="#">GITHUB ORG</a></li>
              <li><a href="#">BRAND PRESS KIT</a></li>
            </ul>
          </div>

          {/* Column 4 – IEEE Student Branch */}
          <div className="footer-col">
            <h4 className="footer-col-title">IEEE STUDENT BRANCH</h4>
            <ul className="footer-col-list">
              <li><a href="#">EVENTS REGISTRY</a></li>
              <li><a href="#">COMMITTEE COUNCIL</a></li>
              <li><a href="#">STRATEGIC GRANTS</a></li>
              <li><a href="#">THE BLUEPRINT SPEC</a></li>
              <li><a href="#">SECURITY ETHICS</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Scroll‑to‑top ── */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
