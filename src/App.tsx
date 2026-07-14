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

      <AboutSection />
      <PrizesSection />
      <Footer />
    </>
  );
}

export default App;
