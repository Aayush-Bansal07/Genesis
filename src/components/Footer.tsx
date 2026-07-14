import React, { useState } from "react";
import './Footer.css';

const SOCIAL_LINKS = [
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "X", icon: "x", href: "#" },
  { label: "Discord", icon: "discord", href: "#" },
];

const RATING_TIERS = [
  "DISAPPOINTING",
  "BELOW PAR",
  "MEDIOCRE",
  "DECENT",
  "GOOD",
  "GREAT",
  "EXCELLENT",
  "OUTSTANDING",
  "LEGENDARY",
  "DIVINE",
];

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" rx="2" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" fill="currentColor" stroke="none" />
      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" fill="currentColor" stroke="none" />
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5l-2 -2l-6 0l-2 2l-1 -2.5c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
      <path d="M7 16.5c3.5 2 6.5 2 10 0" />
    </svg>
  );
};

const Footer: React.FC = () => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const activeIndex = hoveredRating !== null ? hoveredRating : selectedRating;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      {/* ── Top Section: RATING & GET IN TOUCH ── */}
      <div className="footer-top split-layout">
        {/* Left Side: Rating */}
        <div className="footer-top-left">
          <h2 className="footer-heading-small">RATE YOUR EXPERIENCE </h2>
          <p className="footer-subheading">TELL US HOW IT FELT ヾ(≧▽≦*)o </p>

          <div className="rating-widget">
            <div className="rating-component">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`rating-pillar ${(hoveredRating !== null ? i <= hoveredRating : selectedRating !== null && i <= selectedRating) ? "active" : ""} ${activeIndex === i ? "is-current" : ""}`}
                  aria-label={`Rate ${i + 1} out of 10`}
                  aria-pressed={selectedRating === i}
                  onMouseEnter={() => setHoveredRating(i)}
                  onMouseLeave={() => setHoveredRating(null)}
                  onFocus={() => setHoveredRating(i)}
                  onBlur={() => setHoveredRating(null)}
                  onClick={() => setSelectedRating(i)}
                />
              ))}
            </div>
            <div className="rating-meta" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px', padding: '10px 0' }}>
              <span className="rating-endpoint" style={{ fontSize: '1rem', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>Α´</span>
              <div className="rating-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '140px', height: '45px' }}>
                {activeIndex !== null ? (
                  <>
                    <span className="rating-score" style={{ fontFamily: 'Share Tech Mono', fontSize: '1.2rem', color: '#FF8C00', lineHeight: 1 }}>
                      {String(activeIndex + 1).padStart(2, "0")} / 10
                    </span>
                    <span className="rating-tier" style={{ fontFamily: 'Oswald', fontSize: '0.8rem', letterSpacing: '0.15em', marginTop: '4px', lineHeight: 1 }}>
                      {RATING_TIERS[activeIndex]}
                    </span>
                  </>
                ) : (
                  <span className="rating-tier-placeholder" style={{ fontFamily: 'Oswald', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#aaa' }}>
                    SELECT A SCORE
                  </span>
                )}
              </div>
              <span className="rating-endpoint" style={{ fontSize: '1rem', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>Ι´</span>
            </div>
          </div>
        </div>

        {/* Right Side: Social Boxes */}
        <div className="footer-top-right">
          <h2 className="footer-heading-small">GET IN TOUCH</h2>
          <p className="footer-subheading">CONNECT WITH US</p>

          <div className="social-boxes-row">
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="social-box"
                aria-label={link.label}
                title={link.label}
              >
                <SocialIcon name={link.icon} />
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
              The IEEE Student Branch at SRM University AP enhances the student
              learning experience through technical and social events, offering
              access to valuable membership benefits. It also provides vital
              networking opportunities with global peers, academicians, and
              professional engineers.
            </p>
          </div>

          {/* Column 2 – Build on IEEE */}
          <div className="footer-col">
            <h4 className="footer-col-title">BUILD ON IEEE</h4>
            <ul className="footer-col-list">
              <li>
                <a href="#">DEVELOPER DOCS</a>
              </li>
              <li>
                <a href="#">MAINNET CORE HUB</a>
              </li>
              <li>
                <a href="#">TESTNET BRIDGE</a>
              </li>
              <li>
                <a href="#">BLOCK EXPLORER</a>
              </li>
              <li>
                <a href="#">SYSTEM REGISTRY</a>
              </li>
            </ul>
          </div>

          {/* Column 3 – Connect Portals */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONNECT PORTALS</h4>
            <ul className="footer-col-list">
              <li>
                <a href="#">DISCORD COMMUNITY</a>
              </li>
              <li>
                <a href="#">TWITTER / X FEED</a>
              </li>
              <li>
                <a href="#">TELEGRAM CANALS</a>
              </li>
              <li>
                <a href="#">GITHUB ORG</a>
              </li>
              <li>
                <a href="#">BRAND PRESS KIT</a>
              </li>
            </ul>
          </div>

          {/* Column 4 – IEEE Student Branch */}
          <div className="footer-col">
            <h4 className="footer-col-title">IEEE STUDENT BRANCH</h4>
            <ul className="footer-col-list">
              <li>
                <a href="#">EVENTS REGISTRY</a>
              </li>
              <li>
                <a href="#">COMMITTEE COUNCIL</a>
              </li>
              <li>
                <a href="#">STRATEGIC GRANTS</a>
              </li>
              <li>
                <a href="#">THE BLUEPRINT SPEC</a>
              </li>
              <li>
                <a href="#">SECURITY ETHICS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Scroll‑to‑top ── */}
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
