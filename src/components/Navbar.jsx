import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = ['Projects', 'Skills', 'About', 'Process', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => document.getElementById(l.toLowerCase()));
      const scrollPos = window.scrollY + 120;
      let current = '';
      sections.forEach((section, i) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navLinks[i];
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const scrollToSection = useCallback((section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const getMenuWidth = () => {
    if (typeof window === 'undefined') return '100%';
    const w = window.innerWidth;
    if (w <= 380) return '100%';
    if (w <= 640) return '85vw';
    return '360px';
  };

  const [menuWidth, setMenuWidth] = useState(getMenuWidth());

  useEffect(() => {
    const handleResize = () => setMenuWidth(getMenuWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-[#07080a]/80 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        style={{ padding: scrolled ? 'clamp(0.6rem, 3vw, 0.9rem) clamp(1rem, 4vw, 2rem)' : 'clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="font-bold cursor-pointer select-none"
            style={{ fontFamily: 'JetBrains Mono', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', color: '#00ff88' }}
            onClick={scrollToTop}
          >
            MAS.dev
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[4px] p-1.5 bg-none border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-accent rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-[2px] bg-accent rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
            <span className={`block w-5 h-[2px] bg-accent rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`nav-link px-3 py-2 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-200 rounded-md ${
                activeSection === link
                  ? 'text-accent'
                  : 'text-secondary hover:text-primary'
              }`}
              aria-current={activeSection === link ? 'page' : undefined}
            >
              <span className="text-accent/60 mr-1">//</span>
              {link}
            </button>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full z-50"
            style={{
              width: menuWidth,
              maxWidth: '360px',
              background: 'rgba(10,10,15,0.95)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(0,255,136,0.2)',
              boxShadow: '4px 0 30px rgba(0,0,0,0.5)'
            }}
          >
            <div
              className="flex items-center gap-4"
              style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(0,255,136,0.1)' }}
            >
              <div
                className="font-bold cursor-pointer select-none"
                style={{ fontFamily: 'JetBrains Mono', fontSize: '0.9rem', color: '#00ff88' }}
                onClick={scrollToTop}
              >
                MAS.dev
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="ml-auto bg-none border-none p-2"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div
              className="flex flex-col"
              style={{ padding: 'clamp(1.5rem, 5vw, 2rem) clamp(1rem, 4vw, 1.5rem)' }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => scrollToSection(link)}
                  className="menu-item font-mono uppercase text-left bg-none border-none text-[#e8e8f0] transition-all duration-300 border-l-2 border-transparent hover:text-accent hover:translate-x-2 hover:border-l-accent"
                  style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.8rem)',
                    letterSpacing: '0.1em',
                    padding: 'clamp(0.75rem, 3vw, 1rem) 0.5rem',
                    textShadow: '0 0 20px rgba(0,255,136,0)'
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                borderTop: '1px solid rgba(0,255,136,0.1)'
              }}
            >
              <p className="font-mono text-[0.65rem] text-muted tracking-[0.1em]">
                Full-Stack + ML Systems
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
