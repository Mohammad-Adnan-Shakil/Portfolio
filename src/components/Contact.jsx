import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { revealRef } = useScrollReveal();

  const contactLinks = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      href: 'mailto:muhammedadnanshakil456@gmail.com'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      label: 'GitHub',
      href: 'https://github.com/Mohammad-Adnan-Shakil'
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      style={{ 
        padding: '8rem 4rem',
        borderTop: '1px solid rgba(0,255,136,0.12)',
        textAlign: 'center'
      }}
    >
      {/* Section Label */}
      <div ref={revealRef(0)} className="mb-4">
        <p
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.68rem',
            color: '#00ff88',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          // 04 — Contact
        </p>
      </div>

      {/* Headline */}
      <div ref={revealRef(1)} className="mb-4">
        <h2
          style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1
          }}
        >
          Let's build something <span style={{ color: '#00ff88' }}>real.</span>
        </h2>
      </div>

      {/* Sub */}
      <div ref={revealRef(2)} className="mb-12">
        <p
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.82rem',
            color: '#6b6b80'
          }}
        >
          Open to internship opportunities, collaborations, and interesting problems.
        </p>
      </div>

      {/* Contact Buttons */}
      <div ref={revealRef(3)} className="flex justify-center gap-6 flex-wrap">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-all duration-250"
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6b6b80',
              border: '1px solid rgba(0,255,136,0.12)',
              padding: '1rem 2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00ff88';
              e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)';
              e.currentTarget.style.background = 'rgba(0,255,136,0.04)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b6b80';
              e.currentTarget.style.borderColor = 'rgba(0,255,136,0.12)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
