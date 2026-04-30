import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Projects', 'Skills', 'About', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: '1.5rem 4rem',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,255,136,0.12)' : 'none'
        }}
      >
        <div className="flex justify-between items-center">
          <div 
            className="font-bold cursor-pointer"
            style={{ 
              fontFamily: 'JetBrains Mono', 
              fontSize: '0.9rem',
              color: '#00ff88'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            MAS.dev
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#6b6b80'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00ff88'}
                onMouseLeave={(e) => e.target.style.color = '#6b6b80'}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#00ff88',
                  transition: 'all 0.3s ease'
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#00ff88',
                  transition: 'all 0.3s ease'
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#00ff88',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden flex items-center justify-center"
            style={{ background: '#0a0a0f' }}
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link)}
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#e8e8f0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
