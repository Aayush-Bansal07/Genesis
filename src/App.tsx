import './index.css';
import Footer from './components/Footer';
import PrizesSection from './components/PrizesSection';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img className="hero-bg" src="/assets/background.png" alt="Hero Background" />
        <header className="header">
          <a href="/" className="home-btn" aria-label="Home">
            <img src="/assets/IEEE_sb_logo.png" alt="IEEE SB Logo" />
          </a>
        </header>

        {/* Genesis Text Block */}
        <div className="genesis-block">
          <img className="genesis-text" src="/assets/Ieee_genesis_text.png" alt="IEEE Genesis" />
        </div>

        {/* Statue */}
        <img className="statue" src="/assets/statue.png" alt="Statue" />

        {/* Socials */}
        <div className="socials">
          <a href="#" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.4" cy="6.6" r="1"/>
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.24 3H21l-6.55 7.49L22 21h-6.36l-5-6.4-5.72 6.4H2l7.02-7.87L2.3 3h6.5l4.52 5.86L18.24 3zm-1.11 16.2h1.86L7.02 4.7H5.03l12.1 14.5z"/>
            </svg>
          </a>
        </div>
      </div>

      <AboutSection />
      <PrizesSection />
      <Footer />
    </>
  );
}

export default App;

