import React, { useState } from 'react';

const LETTERS_DATA = [
  {
    letter: 'I',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'IEEE.org', href: 'https://ieee.org' },
    ],
  },
  {
    letter: 'E',
    links: [
      { label: 'Email Us', href: 'mailto:contact@ieeesrmap.com' },
      { label: 'Events', href: '#' },
    ],
  },
  {
    letter: 'E',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    letter: 'E',
    links: [
      { label: 'Twitter / X', href: '#' },
      { label: 'Discord', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (idx: number) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* ── Top Section: GET IN TOUCH ── */}
      <div className="footer-top">
        <h2 className="footer-heading">GET IN TOUCH</h2>
        <p className="footer-subheading">HOVER OR TAP ON ANY LETTER TO CONNECT</p>

        <div className="flip-letters-row">
          {LETTERS_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`flip-card ${flippedIndex === idx ? 'flipped' : ''}`}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
              onClick={() => handleFlip(idx)}
            >
              <div className="flip-card-inner">
                {/* Front – the letter */}
                <div className="flip-card-front">
                  <span>{item.letter}</span>
                </div>
                {/* Back – social links */}
                <div className="flip-card-back">
                  {item.links.map((link, i) => (
                    <a key={i} href={link.href} className="flip-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Diamond icon */}
          <div className="diamond-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 2L34 18L18 34L2 18L18 2Z" fill="rgba(201,162,74,0.15)" stroke="#c9a24a" strokeWidth="1.5" />
              <path d="M18 8L28 18L18 28L8 18L18 8Z" fill="rgba(201,162,74,0.3)" stroke="#c9a24a" strokeWidth="1" />
            </svg>
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
