import React, { useRef } from 'react';
import { BorderBeam } from './ui/border-beam';

/* ───────────────────────────────────────────
   About Section
   ─────────────────────────────────────────── */
const AboutSection: React.FC = () => {
  // ── Refs ──
  const sectionRef = useRef<HTMLElement>(null);

  // ── Computed ──
  const genesisLetters = 'GENESIS'.split('');

  /* ═══════════════════════════════════════
     RENDER
     ═══════════════════════════════════════ */
  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
    >
      {/* Background layers */}
      <div className="about-noise" />
      <div className="about-grid" />

      {/* ── Section Tag ── */}
      <div className="about-tag-wrapper">
        <div className="about-tag-line" />
        <span className="about-tag">INITIALIZATION LOG</span>
        <div className="about-tag-line" />
      </div>

      <p className="about-subtitle">
        Not every civilization is lost. Some are waiting to be rebuilt.
      </p>

      {/* ── Editorial Title ── */}
      <div className="about-title-block">
        <span className="about-title-line">PROJECT</span>
        <div className="about-title-genesis">
          {genesisLetters.map((letter, i) => (
            <span
              key={`${letter}-${i}`}
              className="genesis-letter"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* ── Two-column Content ── */}
      <div className="about-content">
        {/* Left — Description */}
        <div className="about-description">
          <p className="about-para">
            Thousands of years ago, civilizations imagined impossible machines, divine intelligence, and worlds beyond their reach.
          </p>
          <p className="about-para about-para-accent">
            Today, artificial intelligence gives us the tools to imagine them again.
          </p>
          <p className="about-para about-para-last visible">
            IEEE Genesis is where engineers, designers, and innovators come
            together to transform ideas into reality through code, creativity,
            and <span className="cycling-word">innovation</span>.
          </p>
        </div>

        {/* Right — Statue */}
        <div className="about-statue-col">
          <div className="about-statue-wrapper">
            <div className="statue-halo">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <circle
                  cx="60" cy="60" r="50"
                  fill="none" stroke="rgba(234,225,81,0.25)" strokeWidth="1"
                />
                <circle
                  cx="60" cy="60" r="55"
                  fill="none" stroke="rgba(234,225,81,0.12)" strokeWidth="0.5"
                />
              </svg>
            </div>

            <img
              src="/assets/ai_statue.png"
              alt="AI Statue"
              className="about-statue-img"
            />
          </div>
        </div>
      </div>

      {/* ── Module Cards ── */}
      <div className="module-cards">
        <div className="module-card">
          <BorderBeam
            size={120}
            duration={6}
            delay={0}
            colorFrom="#84828F"
            colorTo="#2D2A32"
            borderWidth={1.5}
          />
          <div className="module-card-header">
            <span className="module-id">MODULE 01</span>
            <span className="module-status-badge">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <div className="module-meta-row">
              <div className="module-icon-container">
                <svg className="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="module-meta-info">
                <span className="module-label">Duration</span>
                <span className="module-value">24 Hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <BorderBeam
            size={120}
            duration={6}
            delay={2}
            colorFrom="#84828F"
            colorTo="#2D2A32"
            borderWidth={1.5}
          />
          <div className="module-card-header">
            <span className="module-id">MODULE 02</span>
            <span className="module-status-badge">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <div className="module-meta-row">
              <div className="module-icon-container">
                <svg className="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="module-meta-info">
                <span className="module-label">Teams</span>
                <span className="module-value">2–4 Members</span>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <BorderBeam
            size={120}
            duration={6}
            delay={4}
            colorFrom="#84828F"
            colorTo="#2D2A32"
            borderWidth={1.5}
          />
          <div className="module-card-header">
            <span className="module-id">MODULE 03</span>
            <span className="module-status-badge">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <div className="module-meta-row">
              <div className="module-icon-container">
                <svg className="module-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="module-meta-info">
                <span className="module-label">Tracks</span>
                <div className="module-track-tags">
                  <span className="track-tag">AI</span>
                  <span className="track-tag">Robotics</span>
                  <span className="track-tag">Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
