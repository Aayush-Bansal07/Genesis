import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed-navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-container">
        {/* Left: Navigation Links */}
        <div className="navbar-left">
          <a href="#about" className="nav-link">About</a>
          <a href="#prizes" className="nav-link">Prizes</a>
        </div>

        {/* Middle: Logo */}
        <div className="navbar-middle">
          <a href="/" aria-label="Home">
            <img src="/assets/IEEE_sb_logo.png" alt="IEEE SB Logo" className="nav-logo" />
          </a>
        </div>

        {/* Right: Register Button */}
        <div className="navbar-right">
          <a href="#register" className="nav-register-btn">REGISTER</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
