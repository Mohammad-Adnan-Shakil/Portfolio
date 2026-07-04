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
  const { dotStyle, ringStyle, isTouchDevice } = useCustomCursor();

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {!isTouchDevice && (
        <>
          <div style={dotStyle} />
          <div style={ringStyle} />
        </>
      )}

      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <EngineeringThinking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
