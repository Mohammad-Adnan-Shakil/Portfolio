import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { revealRef } = useScrollReveal();

  return (
    <section 
      id="about"
      style={{ 
        padding: '4rem 4rem',
        borderTop: '1px solid rgba(0,255,136,0.12)'
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
          // 03 — About
        </p>
      </div>

      {/* Section Title */}
      <div ref={revealRef(1)} className="mb-6">
        <h2
          style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)'
          }}
        >
          The person behind <span style={{ color: '#00ff88' }}>the code.</span>
        </h2>
      </div>

      {/* Horizontal Line */}
      <div ref={revealRef(2)} className="mb-6">
        <div
          style={{
            width: '60px',
            height: '1px',
            background: '#00ff88',
            opacity: 0.4
          }}
        />
      </div>

      {/* Paragraphs */}
      <div style={{ maxWidth: '720px' }}>
        <p ref={revealRef(3)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          I'm <span style={{ color: '#e8e8f0' }}>Mohammad Adnan Shakil</span>, a second-year CS student at Presidency University, Bengaluru.
          I focus on building systems where backend logic drives real decisions, not just UI.
        </p>

        <p ref={revealRef(4)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          Deltabox demonstrates my approach: Java calling Python ML models for real-time predictions, with JWT + RBAC security and caching for performance.
        </p>

        <p ref={revealRef(5)} style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          I work fast, ship aggressively, and care about clean architecture. Discipline in code, gym, and execution.
          Targeting software engineering internships for mid-2026.
        </p>
      </div>
    </section>
  );
};

export default About;
