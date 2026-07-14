import React, { useState } from "react";

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
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="social-icon-fill" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 8.4v9.4M6.2 5.8v.1M10.4 17.8v-5.3c0-2.2 1.2-3.5 3-3.5s3 1.3 3 3.5v5.3M10.4 12.6c0-2.2 1.2-3.5 3-3.5s3 1.3 3 3.5" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5 19 19.5M19 4.5 5 19.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.1 8.2c2.9-1.2 6.9-1.2 9.8 0l1.3 7.1a10.3 10.3 0 0 0-3.3 1.6l-.8-1.1h-4.2l-.8 1.1a10.3 10.3 0 0 0-3.3-1.6l1.3-7.1Z" />
      <circle cx="9.5" cy="12.2" r=".8" className="social-icon-fill" />
      <circle cx="14.5" cy="12.2" r=".8" className="social-icon-fill" />
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
            <div className="rating-meta">
              <span className="rating-endpoint">Α´</span>
              <div className="rating-label">
                {activeIndex !== null ? (
                  <>
                    <span className="rating-score">
                      {String(activeIndex + 1).padStart(2, "0")} / 10
                    </span>
                    <span className="rating-tier">
                      {RATING_TIERS[activeIndex]}
                    </span>
                  </>
                ) : (
                  <span className="rating-tier-placeholder">
                    SELECT A SCORE
                  </span>
                )}
              </div>
              <span className="rating-endpoint">Ι´</span>
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
