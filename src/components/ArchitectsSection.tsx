import React from 'react';
import './ArchitectsSection.css';

/* ───────────────────────────────────────────
   Data — drop in real photo URLs + social links
   ─────────────────────────────────────────── */
interface Architect {
  name: string;
  role: string;
  photo?: string;
  photoPosition?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

const ARCHITECTS: Architect[] = [
  // ── Executive Board ──
  { name: 'Agrim Garg', role: 'BOARD MEMBER', photo: '/board/agrim_garg.webp', photoPosition: 'top', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Nitish Kumar Chaudhary', role: 'BOARD MEMBER', photo: '/board/nitish_kumar_chaudhary.webp', photoPosition: 'top', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Sanjibani Saha', role: 'BOARD MEMBER', photo: '/board/sanjibani_saha.webp', linkedin: '#', instagram: '#', email: '#' },
  // ── Technology & Innovation Wing ──
  { name: 'Aayush Bansal', role: 'TECH & INNOVATION', photo: '/technology-and-innovation/aayush_bansal.webp', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Adarsh Kumar Pandey', role: 'TECH & INNOVATION', photo: '/technology-and-innovation/adarsh_kumar_pandey.webp', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Akshat Srivastava', role: 'TECH & INNOVATION', photo: '/technology-and-innovation/akshat_srivastava.webp', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Venkatasai Yaragorla', role: 'TECH & INNOVATION', photo: '/technology-and-innovation/venkatasai_yaragorla.webp', linkedin: '#', instagram: '#', email: '#' },
  { name: 'Yuvraj Singh', role: 'TECH & INNOVATION', photo: '/technology-and-innovation/yuvraj_singh.webp', linkedin: '#', instagram: '#', email: '#' },
];

/* ───────────────────────────────────────────
   Icons
   ─────────────────────────────────────────── */
const CatIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 9 L5 4 L9 8 C12 6 12 6 15 8 L19 4 L22 9 C21 14 18 19 12 19 C6 19 3 14 2 9 Z" />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

/* ───────────────────────────────────────────
   Section
   ─────────────────────────────────────────── */
const ArchitectsSection: React.FC = () => {
  // Duplicate the list so the marquee can loop seamlessly (-50% = one full set)
  const loop = [...ARCHITECTS, ...ARCHITECTS];

  return (
    <section id="architects" className="architects-section">
      <div className="architects-inner">
        {/* ── Header ── */}
        <header className="architects-header">
          <h2 className="architects-title">
            <span className="word-1">MEET THE </span>
            <span className="word-2">ARCHITECTS</span>
          </h2>
        </header>

        {/* ── Auto-scrolling marquee (pauses on hover) ── */}
        <div className="architects-viewport">
          <div className="architects-track">
            {loop.map((m, i) => (
              <article className="arch-card" key={`${m.name}-${i}`}>
                <div className="arch-photo">
                  {m.photo ? (
                    <img className="arch-photo-img" src={m.photo} alt={m.name} draggable={false} style={{ objectPosition: m.photoPosition ?? 'center' }} />
                  ) : (
                    <div className="arch-photo-placeholder">{getInitials(m.name)}</div>
                  )}
                  <span className="arch-cat" aria-hidden="true">
                    <CatIcon />
                  </span>
                </div>

                <h3 className="arch-name">{m.name}</h3>
                <p className="arch-role">{m.role}</p>

                <div className="arch-socials">
                  <a className="arch-social" href={m.linkedin} aria-label={`${m.name} on LinkedIn`} target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                  </a>
                  <a className="arch-social" href={m.instagram} aria-label={`${m.name} on Instagram`} target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </a>
                  <a className="arch-social" href={m.email} aria-label={`Email ${m.name}`}>
                    <MailIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsSection;
