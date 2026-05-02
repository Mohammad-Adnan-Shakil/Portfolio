import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechnicalStack from './components/TechnicalStack';
import About from './components/About';
import EngineeringThinking from './components/EngineeringThinking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useCustomCursor from './hooks/useCustomCursor';
import './index.css';

function App() {
  const { dotStyle, ringStyle, isTouchDevice } = useCustomCursor();

  useEffect(() => {
    // Add Google Fonts - Space Grotesk for display, JetBrains Mono for labels
    const linkSpaceGrotesk = document.createElement('link');
    linkSpaceGrotesk.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
    linkSpaceGrotesk.rel = 'stylesheet';
    document.head.appendChild(linkSpaceGrotesk);

    const linkJetBrains = document.createElement('link');
    linkJetBrains.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap';
    linkJetBrains.rel = 'stylesheet';
    document.head.appendChild(linkJetBrains);

    return () => {
      document.head.removeChild(linkSpaceGrotesk);
      document.head.removeChild(linkJetBrains);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor - only render on non-touch devices */}
      {!isTouchDevice && (
        <>
          <div style={dotStyle} />
          <div style={ringStyle} />
        </>
      )}

      {/* Components in exact order */}
      <Navbar />
      <Hero />
      <Projects />
      <TechnicalStack />
      <About />
      <EngineeringThinking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
