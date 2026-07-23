import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { revealRef } = useScrollReveal();
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'muhammedadnanshakil456@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      href: `mailto:${email}`,
      onClick: (e) => {
        if (!emailRevealed) {
          e.preventDefault();
          setEmailRevealed(true);
        }
      }
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      label: 'GitHub',
      href: 'https://github.com/Mohammad-Adnan-Shakil'
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammadadnanshakil/'
    }
  ];

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ borderTop: '1px solid rgba(0,255,136,0.12)', textAlign: 'center' }}
    >
      <div ref={revealRef(0)} className="mb-4">
        <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
          // 05 — Contact
        </p>
      </div>

      <div ref={revealRef(1)} className="mb-3 sm:mb-4 px-2 sm:px-0">
        <h2 className="font-heading font-extrabold text-[clamp(1.8rem,6vw,5rem)] tracking-[-0.02em] leading-tight">
          Let's build <span className="text-accent">production systems.</span>
        </h2>
      </div>

      <div ref={revealRef(2)} className="mb-8 sm:mb-12 px-4 sm:px-0">
        <p className="font-mono text-[clamp(0.72rem,2.5vw,0.82rem)] text-muted leading-relaxed max-w-lg mx-auto">
          Second-year CSE student at Presidency University, Bengaluru.
          Previously interned at Dyslexia Reading Tutor AI. Currently building
          Cypher and competing in CockroachDB × AWS Hackathon.
          Open to part-time backend or ML engineering roles — remote or Bengaluru-based.
        </p>
      </div>

      <div ref={revealRef(3)} className="max-w-2xl mx-auto">
        {/* Social connection buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6 mb-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={link.onClick}
              className="group flex items-center justify-center sm:justify-start gap-3 transition-all duration-200 font-mono text-[clamp(0.7rem,2.5vw,0.78rem)] uppercase tracking-[0.1em]"
              style={{
                border: '1px solid rgba(0,255,136,0.12)',
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem)',
                borderRadius: '8px',
                color: '#5a5a70',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00ff88';
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)';
                e.currentTarget.style.background = 'rgba(0,255,136,0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,136,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#5a5a70';
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.12)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={link.label === 'Email' ? 'Send email' : link.label}
            >
              <span className="flex-shrink-0 text-current">{link.icon}</span>
              {link.label === 'Email' && !emailRevealed ? 'Click to reveal' : link.label}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ))}
        </div>

        {/* Inline email reveal after click */}
        {emailRevealed && (
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg font-mono text-[0.72rem] transition-all duration-200 cursor-pointer hover:bg-accent/5"
            style={{
              border: '1px solid rgba(0,255,136,0.15)',
              color: '#00ff88',
            }}
            onClick={handleCopyEmail}
            title="Click to copy email"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(); }}
            aria-label="Copy email address"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {copied ? '✓ Copied!' : email}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
