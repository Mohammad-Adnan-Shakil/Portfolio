import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import EngineeringThinking from './components/EngineeringThinking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useCustomCursor from './hooks/useCustomCursor';
import './index.css';

function App() {
  const { dotStyle, ringStyle } = useCustomCursor();

  useEffect(() => {
    // Add Google Fonts
    const linkSyne = document.createElement('link');
    linkSyne.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap';
    linkSyne.rel = 'stylesheet';
    document.head.appendChild(linkSyne);

    const linkJetBrains = document.createElement('link');
    linkJetBrains.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap';
    linkJetBrains.rel = 'stylesheet';
    document.head.appendChild(linkJetBrains);

    return () => {
      document.head.removeChild(linkSyne);
      document.head.removeChild(linkJetBrains);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div style={dotStyle} />
      <div style={ringStyle} />

      {/* Components */}
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <EngineeringThinking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
