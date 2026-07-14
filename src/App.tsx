import './index.css';
import Footer from './components/Footer';
import PrizesSection from './components/PrizesSection';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider section-divider-light" aria-hidden="true" />
      <AboutSection />
      <div className="section-divider section-divider-cream" aria-hidden="true" />
      <PrizesSection />
      <div className="section-divider section-divider-dark" aria-hidden="true" />
      <Footer />
    </>
  );
}

export default App;
