import React, { useState } from 'react';

interface PrizeEntry {
  position: string;
  prize: string;
  god: string;
  image: string;
  accent: string;
  description: string;
}

const PRIZES: PrizeEntry[] = [
  {
    position: 'GRAND WINNER',
    prize: '₹1,00,000',
    god: 'ZEUS',
    image: '/assets/zeus.png',
    accent: '#EEEFA8',
    description: 'King of the gods, wielding the power of thunder and skies. He represents supreme innovation and mastery over the domain.'
  },
  {
    position: '1ST RUNNER UP',
    prize: '₹50,000',
    god: 'ATHENA',
    image: '/assets/athena.png',
    accent: '#84828F',
    description: 'Goddess of wisdom, strategy, and warfare. She favors those who build with intellect, precision, and tactical foresight.'
  },
  {
    position: '2ND RUNNER UP',
    prize: '₹25,000',
    god: 'POSEIDON',
    image: '/assets/poseidon.png',
    accent: '#EEEFA8',
    description: 'God of the sea and storms, commanding raw power and untamed creative waves that reshape the boundaries of technology.'
  },
  {
    position: '3RD RUNNER UP',
    prize: '₹10,000',
    god: 'APOLLO',
    image: '/assets/apollo.png',
    accent: '#84828F',
    description: 'God of light, truth, and the arts. He rewards those whose creations shine with clarity, harmony, and elegant design.'
  },
  {
    position: 'BEST INNOVATION',
    prize: '₹5,000',
    god: 'ARTEMIS',
    image: '/assets/artemis.png',
    accent: '#EEEFA8',
    description: 'Goddess of the hunt and wilderness. She guides the pioneers exploring uncharted territories and finding unique solutions.'
  },
];

const PrizesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="prizes-section">
      {/* Section heading */}
      <div className="prizes-header">
        <span className="prizes-tag">THE SPOILS OF VICTORY</span>
        <h2 className="prizes-title">ΕΠΑΘΛΑ</h2>
        <div className="prizes-title-line"></div>
      </div>

      <div className="prizes-content">
        {/* ── LEFT: Statue Display ── */}
        <div className="prizes-statue-panel">
          <div className="statue-glow"></div>
          {PRIZES.map((entry, idx) => (
            <div
              key={idx}
              className={`statue-wrapper ${activeIndex === idx ? 'active' : ''}`}
              style={{ '--god-accent': entry.accent } as React.CSSProperties}
            >
              <div className="statue-interactive-area">
                <img
                  src={entry.image}
                  alt={entry.god}
                  className="statue-image"
                />
                <div className="statue-description">
                  <p>{entry.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="statue-label">
            <span className="statue-god-name">{PRIZES[activeIndex].god}</span>
            <span className="statue-god-subtitle">Guardian of this prize</span>
          </div>

          {/* Decorative corner marks */}
          <div className="corner-mark top-left"></div>
          <div className="corner-mark top-right"></div>
          <div className="corner-mark bottom-left"></div>
          <div className="corner-mark bottom-right"></div>
        </div>

        {/* ── RIGHT: Prize List ── */}
        <div className="prizes-list-panel">
          <div className="prizes-list-scroll">
            {PRIZES.map((entry, idx) => (
              <div
                key={idx}
                className={`prize-card ${activeIndex === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="prize-card-indicator"></div>
                <div className="prize-card-content">
                  <span className="prize-position">{entry.position}</span>
                  <span className="prize-money">{entry.prize}</span>
                </div>
                <div
                  className="prize-card-accent"
                  style={{ backgroundColor: entry.accent }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
