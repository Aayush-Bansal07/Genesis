import React, { useState, useEffect, useRef } from 'react';

/* ───────────────────────────────────────────
   Decode Text — Materializes from glyphs
   ─────────────────────────────────────────── */
const DecodeText: React.FC<{
  text: string;
  trigger: boolean;
  delay?: number;
  tag?: React.ElementType;
  className?: string;
}> = ({ text, trigger, delay = 0, tag: Tag = 'span', className = '' }) => {
  const [display, setDisplay] = useState('');
  const glyphs = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ▓░▒';

  useEffect(() => {
    if (!trigger) {
      setDisplay('');
      return;
    }

    let iteration = 0;
    let intervalId: number;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        iteration += 1;
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iteration) return char;
              return glyphs[Math.floor(Math.random() * glyphs.length)];
            })
            .join('')
        );
        if (iteration >= text.length) {
          window.clearInterval(intervalId);
        }
      }, 30);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [trigger, text, delay]);

  const content = trigger ? display || text.replace(/\S/g, '░') : '\u00A0';

  return <Tag className={`decode-text ${className}`}>{content}</Tag>;
};

/* ───────────────────────────────────────────
   Constants
   ─────────────────────────────────────────── */
const CYCLING_WORDS = ['innovation', 'creation', 'intelligence'];
const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

/* ───────────────────────────────────────────
   About Section
   ─────────────────────────────────────────── */
const AboutSection: React.FC = () => {
  // ── State ──
  const [isGreek, setIsGreek] = useState(false);
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [isParaHovered, setIsParaHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [crackCount, setCrackCount] = useState(0);
  const [showOlympus, setShowOlympus] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [bgRotation, setBgRotation] = useState(0);
  const [decoded, setDecoded] = useState(false);
  const [greekTooltip, setGreekTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [para3Visible, setPara3Visible] = useState(false);

  // ── Refs ──
  const titleHoverTimer = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const konamiBuffer = useRef<string[]>([]);

  /* ═══════════════════════════════════════
     EASTER EGG 1 — Genesis → ΓΕΝΕΣΙΣ
     ═══════════════════════════════════════ */
  const handleTitleEnter = () => {
    titleHoverTimer.current = window.setTimeout(() => {
      setIsGreek(true);
      window.setTimeout(() => setIsGreek(false), 3000);
    }, 3000);
  };

  const handleTitleLeave = () => {
    if (titleHoverTimer.current) {
      window.clearTimeout(titleHoverTimer.current);
      titleHoverTimer.current = null;
    }
  };

  /* ═══════════════════════════════════════
     EASTER EGG 2 — Word cycling on hover
     ═══════════════════════════════════════ */
  useEffect(() => {
    if (!isParaHovered) return;
    const id = window.setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 1000);
    return () => window.clearInterval(id);
  }, [isParaHovered]);

  /* ═══════════════════════════════════════
     EASTER EGG 3 — Statue blink (every 45s)
     ═══════════════════════════════════════ */
  useEffect(() => {
    const id = window.setInterval(() => {
      setIsBlinking(true);
      window.setTimeout(() => setIsBlinking(false), 150);
    }, 45000);
    return () => window.clearInterval(id);
  }, []);

  /* ═══════════════════════════════════════
     EASTER EGG 5 — Subtle glitch (every 60s)
     ═══════════════════════════════════════ */
  useEffect(() => {
    const id = window.setInterval(() => {
      setGlitching(true);
      window.setTimeout(() => setGlitching(false), 200);
    }, 60000);
    return () => window.clearInterval(id);
  }, []);

  /* ═══════════════════════════════════════
     EASTER EGG 6 — Konami code
     ═══════════════════════════════════════ */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      konamiBuffer.current.push(e.key);
      if (konamiBuffer.current.length > 10) konamiBuffer.current.shift();
      if (konamiBuffer.current.join(',') === KONAMI.join(',')) {
        setShowOlympus(true);
        window.setTimeout(() => setShowOlympus(false), 4000);
        konamiBuffer.current = [];
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* ═══════════════════════════════════════
     EASTER EGG 7 — Halo click → cracks
     ═══════════════════════════════════════ */
  const handleHaloClick = () => {
    setCrackCount((prev) => Math.min(prev + 1, 7));
  };

  /* ═══════════════════════════════════════
     EASTER EGG 8 — Greek letter tooltip
     ═══════════════════════════════════════ */
  const handleGreekHover = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGreekTooltip({
      text: 'Fragment recovered.',
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 36,
    });
  };

  /* ═══════════════════════════════════════
     EASTER EGG 9 — Scroll midpoint rotation
     ═══════════════════════════════════════ */
  useEffect(() => {
    const handler = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewMid = window.innerHeight / 2;
      setBgRotation(Math.abs(sectionMid - viewMid) < 80 ? 0.3 : 0);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* ═══════════════════════════════════════
     Decode animation on scroll into view
     ═══════════════════════════════════════ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDecoded(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Show paragraph 3 after decode delay
  useEffect(() => {
    if (!decoded) return;
    const id = window.setTimeout(() => setPara3Visible(true), 1800);
    return () => window.clearTimeout(id);
  }, [decoded]);

  /* ═══════════════════════════════════════
     EASTER EGG 4 — Cursor neuron particles
     ═══════════════════════════════════════ */
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    let particles: Particle[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mx,
          y: my,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: 30 + Math.random() * 30,
          size: 1 + Math.random() * 1.5,
        });
      }
    };
    section.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const a = 1 - p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(132,130,143,${a * 0.4})`;
        ctx.fill();
        // Neuron-like connections
        for (const p2 of particles) {
          if (p === p2) continue;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 60) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(132,130,143,${a * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      section.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // ── Computed ──
  const genesisLetters = isGreek
    ? 'ΓΕΝΕΣΙΣ'.split('')
    : 'GENESIS'.split('');

  /* ═══════════════════════════════════════
     RENDER
     ═══════════════════════════════════════ */
  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${glitching ? 'glitching' : ''}`}
      style={{ '--bg-rotate': `${bgRotation}deg` } as React.CSSProperties}
    >
      {/* Background layers */}
      <canvas ref={canvasRef} className="about-particles-canvas" />
      <div className="about-noise" />
      <div className="about-grid" />

      {/* ── Easter Egg 6: PROJECT OLYMPUS overlay ── */}
      {showOlympus && (
        <div className="olympus-overlay">
          <div className="olympus-content">
            <span className="olympus-tag">▲ CLASSIFIED ▲</span>
            <h2>PROJECT OLYMPUS</h2>
            <p>ACCESS GRANTED</p>
          </div>
        </div>
      )}

      {/* ── Easter Egg 8: Greek tooltip ── */}
      {greekTooltip && (
        <div
          className="greek-tooltip"
          style={{ left: greekTooltip.x, top: greekTooltip.y }}
        >
          {greekTooltip.text}
        </div>
      )}

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
      <div
        className="about-title-block"
        onMouseEnter={handleTitleEnter}
        onMouseLeave={handleTitleLeave}
      >
        <DecodeText
          text="PROJECT"
          trigger={decoded}
          delay={200}
          tag="span"
          className="about-title-line"
        />
        <div className="about-title-genesis">
          {genesisLetters.map((letter, i) => (
            <span
              key={`${letter}-${i}`}
              className={`genesis-letter ${isGreek ? 'greek' : ''}`}
              onMouseEnter={(e) => isGreek && handleGreekHover(e)}
              onMouseLeave={() => setGreekTooltip(null)}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* ── Two-column Content ── */}
      <div className="about-content">
        {/* Left — Description */}
        <div
          className="about-description"
          onMouseEnter={() => setIsParaHovered(true)}
          onMouseLeave={() => setIsParaHovered(false)}
        >
          <DecodeText
            text="Thousands of years ago, civilizations imagined impossible machines, divine intelligence, and worlds beyond their reach."
            trigger={decoded}
            delay={600}
            tag="p"
            className="about-para"
          />
          <DecodeText
            text="Today, artificial intelligence gives us the tools to imagine them again."
            trigger={decoded}
            delay={1200}
            tag="p"
            className="about-para about-para-accent"
          />
          <p className={`about-para about-para-last ${para3Visible ? 'visible' : ''}`}>
            IEEE Genesis is where engineers, designers, and innovators come
            together to transform ideas into reality through code, creativity,
            and{' '}
            <span className="cycling-word">{CYCLING_WORDS[cyclingIndex]}</span>.
          </p>
        </div>

        {/* Right — Statue */}
        <div className="about-statue-col">
          <div className="about-statue-wrapper">
            {/* Halo — Easter Egg 7 */}
            <div
              className={`statue-halo ${crackCount >= 7 ? 'cracked' : ''}`}
              onClick={handleHaloClick}
            >
              <svg viewBox="0 0 120 120" width="120" height="120">
                <circle
                  cx="60" cy="60" r="50"
                  fill="none" stroke="rgba(234,225,81,0.25)" strokeWidth="1"
                />
                <circle
                  cx="60" cy="60" r="55"
                  fill="none" stroke="rgba(234,225,81,0.12)" strokeWidth="0.5"
                />
                {crackCount >= 1 && (
                  <line x1="60" y1="10" x2="55" y2="30" stroke="#EAE151" strokeWidth="1" opacity="0.6" />
                )}
                {crackCount >= 2 && (
                  <line x1="100" y1="40" x2="85" y2="50" stroke="#EAE151" strokeWidth="1" opacity="0.6" />
                )}
                {crackCount >= 3 && (
                  <line x1="60" y1="110" x2="65" y2="90" stroke="#EAE151" strokeWidth="1" opacity="0.6" />
                )}
                {crackCount >= 4 && (
                  <line x1="20" y1="60" x2="35" y2="55" stroke="#EAE151" strokeWidth="1" opacity="0.6" />
                )}
                {crackCount >= 5 && (
                  <path d="M55 30 L48 45 L52 42" fill="none" stroke="#EAE151" strokeWidth="0.8" opacity="0.5" />
                )}
                {crackCount >= 6 && (
                  <path d="M85 50 L78 65 L82 58" fill="none" stroke="#EAE151" strokeWidth="0.8" opacity="0.5" />
                )}
                {crackCount >= 7 && (
                  <>
                    <path d="M65 90 L72 75 L68 80" fill="none" stroke="#EAE151" strokeWidth="0.8" opacity="0.5" />
                    <circle
                      cx="60" cy="60" r="50"
                      fill="none" stroke="#EAE151" strokeWidth="1.5" opacity="0.4"
                      strokeDasharray="3 5"
                    />
                  </>
                )}
              </svg>
            </div>

            <img
              src="/assets/ai_statue.png"
              alt="AI Statue"
              className="about-statue-img"
            />

            {/* Blink overlay — Easter Egg 3 */}
            <div className={`blink-overlay ${isBlinking ? 'blinking' : ''}`} />
          </div>
        </div>
      </div>

      {/* ── Module Cards ── */}
      <div className="module-cards">
        <div className="module-card">
          <div className="module-card-header">
            <span className="module-id">MODULE 01</span>
            <span className="module-status">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <span className="module-label">Duration</span>
            <span className="module-value">
              <DecodeText text="24 Hours" trigger={decoded} delay={1800} />
            </span>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-header">
            <span className="module-id">MODULE 02</span>
            <span className="module-status">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <span className="module-label">Teams</span>
            <span className="module-value">
              <DecodeText text="2–4 Members" trigger={decoded} delay={2000} />
            </span>
          </div>
        </div>

        <div className="module-card">
          <div className="module-card-header">
            <span className="module-id">MODULE 03</span>
            <span className="module-status">● ACTIVE</span>
          </div>
          <div className="module-card-divider" />
          <div className="module-card-body">
            <span className="module-label">Tracks</span>
            <div className="module-tracks">
              <DecodeText text="AI" trigger={decoded} delay={2200} tag="span" className="track-item" />
              <DecodeText text="Robotics" trigger={decoded} delay={2400} tag="span" className="track-item" />
              <DecodeText text="Cybersecurity" trigger={decoded} delay={2600} tag="span" className="track-item" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Easter Egg 10: Hidden coordinates ── */}
      <div className="hidden-coords">17.437° N, 78.448° E</div>
    </section>
  );
};

export default AboutSection;
