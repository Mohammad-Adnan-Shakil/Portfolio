import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { revealRef } = useScrollReveal();

  return (
    <section 
      id="about"
      style={{ 
        padding: '8rem 4rem',
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
      <div ref={revealRef(1)} className="mb-8">
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
      <div ref={revealRef(2)} className="mb-8">
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
        <p ref={revealRef(3)} className="mb-6" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          I'm <span style={{ color: '#e8e8f0' }}>Mohammad Adnan Shakil</span>, a second-year Computer Science student at
          <span style={{ color: '#e8e8f0' }}> Presidency University</span>, Bengaluru. I'm not waiting to graduate to build real
          things — I'm building them now.
        </p>

        <p ref={revealRef(4)} className="mb-6" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          My focus is on systems where the <span style={{ color: '#00ff88' }}>backend thinks</span> — full-stack platforms that
          integrate ML models to make actual decisions, not just display data. Deltabox is
          my flagship: a live F1 analytics platform with AI race prediction, what-if
          simulation, and confidence scoring.
        </p>

        <p ref={revealRef(5)} className="mb-6" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          I work fast, build aggressively, and care deeply about clean architecture.
          Discipline isn't just something I preach — I live it in the gym, in my code,
          and in how I approach every project.
        </p>

        <p ref={revealRef(6)} style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          Currently targeting software engineering internships for <span style={{ color: '#00ff88' }}>mid-2026</span>. If you're
          building something ambitious, let's talk.
        </p>
      </div>
    </section>
  );
};

export default About;
