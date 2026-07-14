import React, { useState } from 'react';

const SOCIAL_LINKS = [
  { label: 'IG', href: '#' },
  { label: 'IN', href: '#' },
  { label: 'X', href: '#' },
  { label: 'DC', href: '#' },
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
              <a key={idx} href={link.href} className="social-box">
                {link.label}
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
