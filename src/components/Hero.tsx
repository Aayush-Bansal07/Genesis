import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Lightfall from './Lightfall';

const LIGHTFALL_COLORS = ['#D4AF37', '#8B6914', '#3D3A38'];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-logo', { opacity: 0, y: -10, duration: 0.6 }, 0);
      tl.from('.hero-register', { opacity: 0, y: -10, duration: 0.6 }, 0.1);
      tl.from('.hero-title-ieee', { y: 20, opacity: 0, duration: 0.7 }, 0.2);
      tl.from('.hero-title-genesis', { y: 40, opacity: 0, duration: 0.9 }, 0.3);
      tl.from('.hero-tagline', { opacity: 0, y: 10, duration: 0.7 }, 0.6);
      tl.from('.hero-date', { opacity: 0, duration: 0.6 }, 0.8);
      tl.from('.hero-prize', { opacity: 0, scale: 0.95, duration: 0.8 }, 0.9);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1a1714',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ─── LIGHTFALL BACKGROUND ─── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Lightfall
          colors={LIGHTFALL_COLORS}
          backgroundColor="#1a1714"
          speed={0.3}
          streakCount={4}
          streakWidth={0.6}
          streakLength={0.8}
          glow={0.4}
          density={0.4}
          twinkle={0.6}
          zoom={3}
          backgroundGlow={0.3}
          opacity={0.35}
          mouseInteraction={true}
          mouseStrength={0.3}
          mouseRadius={0.8}
          mixBlendMode="screen"
        />
      </div>

      {/* ─── IEEE SB LOGO (topmost center) ─── */}
      <div
        className="hero-logo"
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        <img
          src="/assets/IEEE_sb_logo.png"
          alt="IEEE SB Logo"
          style={{ height: 'clamp(100px, 12vh, 150px)', width: 'auto', display: 'block' }}
        />
      </div>

      {/* ─── TOP RIGHT: REGISTER BUTTON ─── */}
      <div
        className="hero-register"
        style={{
          position: 'absolute',
          top: 'clamp(30px, 5vh, 50px)',
          right: 'clamp(30px, 5vw, 60px)',
          zIndex: 20,
        }}
      >
        <a href="#register" className="nav-register-btn" style={{ fontSize: 'clamp(10px, 0.8vw, 13px)', padding: 'clamp(4px, 0.6vh, 8px) clamp(10px, 1.2vw, 14px)' }}>
          REGISTER NOW
        </a>
      </div>

      {/* ─── LEFT SIDE: TITLE + HACKATHON INFO ─── */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(100px, 14vh, 160px)',
          left: 'clamp(40px, 6vw, 100px)',
          zIndex: 10,
          maxWidth: '420px',
        }}
      >
        {/* IEEE GENESIS Title */}
        <h2
          className="hero-title-ieee"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(22px, 3vw, 42px)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#D4AF37',
            margin: 0,
            marginBottom: '-4px',
            marginLeft: '4px',
          }}
        >
          IEEE
        </h2>
        <h1
          className="hero-title-genesis"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(48px, 7.5vw, 115px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            background: 'linear-gradient(to right, #FFD500, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}
        >
          GENESIS
        </h1>

        {/* Tagline */}
        <p
          className="hero-tagline"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 'clamp(13px, 1.6vw, 22px)',
            fontWeight: 700,
            color: '#e8e2d6',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: 'clamp(24px, 4vh, 50px)',
            marginLeft: '-18px',
            lineHeight: 1.3,
          }}
        >
          36-Hour National Level Hackathon
        </p>
      </div>

      {/* ─── RIGHT SIDE: DATE & PRIZE POOL ─── */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(60px, 10vh, 130px)',
          right: 'clamp(40px, 4vw, 80px)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        {/* Date & Venue */}
        <p
          className="hero-date"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 'clamp(11px, 1.1vw, 16px)',
            color: 'rgba(212, 175, 55, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            margin: 0,
          }}
        >
          Sep 3–5, 2026 <br /> SRM University AP, Amaravati
        </p>

        {/* Prize Pool Box */}
        <div
          className="hero-prize"
          style={{
            marginTop: '16px',
            display: 'inline-block',
            border: '2px solid #D4AF37',
            borderRadius: '6px',
            padding: 'clamp(8px, 1vh, 12px) clamp(14px, 1.5vw, 24px)',
          }}
        >
          <span
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 'clamp(16px, 2vw, 28px)',
              fontWeight: 700,
              color: '#FF8C00',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            ₹1,00,000 Total Prize Pool
          </span>
        </div>
      </div>



      {/* ─── YELLOW SEMICIRCLE (smaller, pushed right) ─── */}
      <div
        className="hero-semicircle"
        style={{
          position: 'absolute',
          top: '50%',
          left: '52%',
          transform: 'translateY(-50%)',
          width: 'clamp(140px, 16vw, 260px)',
          height: 'clamp(350px, 55vh, 620px)',
          background: 'linear-gradient(180deg, #FFD500 0%, #FF9800 100%)',
          borderRadius: '0 1000px 1000px 0',
          zIndex: 2,
        }}
      />

      {/* ─── LEFT BUST (image.png — overlapping the semicircle) ─── */}
      <img
        className="hero-bust-left"
        src="/assets/image.png"
        alt="Greek bust left"
        style={{
          position: 'absolute',
          top: '50%',
          left: '42%',
          transform: 'translate(-50%, -50%)',
          height: 'clamp(420px, 78vh, 850px)',
          width: 'auto',
          objectFit: 'contain',
          filter: 'grayscale(100%) contrast(1.15) brightness(0.95)',
          zIndex: 3,
        }}
      />

      {/* ─── RIGHT BUST (zeus.png — narrow vertical strip on the semicircle) ─── */}
      <div
        className="hero-bust-right"
        style={{
          position: 'absolute',
          top: '65%',
          left: '54.5%',
          transform: 'translateY(-50%)',
          width: 'clamp(70px, 7vw, 110px)',
          height: 'clamp(380px, 65vh, 680px)',
          overflow: 'hidden',
          borderRadius: '4px',
          zIndex: 5,
        }}
      >
        <img
          src="/assets/download.jpg"
          alt="Greek bust right"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '55% center',
            filter: 'grayscale(100%) contrast(1.25) brightness(1.0)',
          }}
        />
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 6,
        }}
      >
        <div
          style={{
            width: '22px',
            height: '34px',
            border: '2px solid rgba(200, 200, 200, 0.35)',
            borderRadius: '11px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '7px',
              backgroundColor: 'rgba(200, 200, 200, 0.45)',
              borderRadius: '2px',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scrollWheel 1.6s infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollWheel {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
