import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Projects', 'Skills', 'About', 'Engineering', 'Contact'];

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const scrollToSection = useCallback((section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  // Get menu width based on viewport - full width on very small screens
  const getMenuWidth = () => {
    if (typeof window === 'undefined') return '100%';
    const width = window.innerWidth;
    if (width <= 380) return '100%';
    if (width <= 640) return '85vw';
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
      {/* Navbar Header */}
      <nav
        className="fixed top-0 left-0 z-50 w-full flex justify-between items-center"
        style={{ padding: 'clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 2rem)' }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Logo */}
          <div
            className="font-bold cursor-pointer"
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
              color: '#00ff88'
            }}
            onClick={scrollToTop}
          >
            MAS.dev
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#00ff88',
                borderRadius: '1px'
              }}
            />
            <motion.div
              animate={menuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '20px' }}
              transition={{ duration: 0.3 }}
              style={{
                height: '2px',
                backgroundColor: '#00ff88',
                borderRadius: '1px'
              }}
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#00ff88',
                borderRadius: '1px'
              }}
            />
          </button>
        </div>
      </nav>

      {/* Backdrop Overlay */}
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

      {/* Slide-in Menu Panel */}
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
            {/* Menu Header */}
            <div
              className="flex items-center gap-4"
              style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(0,255,136,0.1)' }}
            >
              <div
                className="font-bold cursor-pointer"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.9rem',
                  color: '#00ff88'
                }}
                onClick={scrollToTop}
              >
                MAS.dev
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  marginLeft: 'auto'
                }}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
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
                  className="menu-item"
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 'clamp(1.1rem, 4vw, 1.8rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#e8e8f0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'clamp(0.75rem, 3vw, 1rem) 0.5rem',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    borderLeft: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ff88';
                    e.target.style.transform = 'translateX(8px)';
                    e.target.style.borderLeftColor = '#00ff88';
                    e.target.style.textShadow = '0 0 20px rgba(0,255,136,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#e8e8f0';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.borderLeftColor = 'transparent';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>

            {/* Menu Footer */}
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
              <p
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.65rem',
                  color: '#6b6b80',
                  letterSpacing: '0.1em'
                }}
              >
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
