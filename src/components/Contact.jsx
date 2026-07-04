import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { revealRef } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = "w-full bg-transparent border rounded-lg px-4 py-3 font-mono text-[0.8rem] text-primary transition-all duration-200 placeholder:text-muted/60 focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(0,255,136,0.08)]";

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
          Available for backend, full-stack, or ML infrastructure internships
          from June 2026. Open to remote or Bengaluru-based roles.
        </p>
      </div>

      {/* Contact form + links in a row on desktop */}
      <div ref={revealRef(3)} className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              style={{ borderColor: 'rgba(0,255,136,0.15)' }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              style={{ borderColor: 'rgba(0,255,136,0.15)' }}
              required
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass} mb-4 resize-none`}
            style={{ borderColor: 'rgba(0,255,136,0.15)' }}
            required
          />
          <button
            type="submit"
            className="w-full font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
            style={{
              background: '#00ff88',
              color: '#000',
            }}
          >
            {sent ? '✓ Message Sent' : 'Send Message →'}
          </button>
        </form>

        {/* Social links row */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-3 transition-all duration-200 hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 font-mono text-[clamp(0.7rem,2.5vw,0.78rem)] uppercase tracking-[0.1em] text-muted"
              style={{
                border: '1px solid rgba(0,255,136,0.12)',
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem)',
                borderRadius: '8px',
              }}
            >
              <span className="flex-shrink-0">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
