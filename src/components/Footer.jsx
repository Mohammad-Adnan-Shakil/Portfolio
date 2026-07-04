import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 relative"
      style={{ borderTop: '1px solid rgba(0,255,136,0.12)' }}
    >
      <p className="font-mono text-[0.68rem] text-muted">
        © 2026 Mohammad Adnan Shakil
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-1.5 h-1.5 bg-accent animate-pulse" />
          <p className="font-mono text-[0.68rem] text-accent">
            Open to internships
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3 pl-4" style={{ borderLeft: '1px solid rgba(0,255,136,0.12)' }}>
          <a href="mailto:muhammedadnanshakil456@gmail.com" className="text-muted hover:text-accent transition-colors duration-200" aria-label="Email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://github.com/Mohammad-Adnan-Shakil" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-200" aria-label="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mohammadadnanshakil/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-glow"
          style={{
            background: '#0c0d12',
            border: '1px solid rgba(0,255,136,0.2)',
            color: '#00ff88',
          }}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
