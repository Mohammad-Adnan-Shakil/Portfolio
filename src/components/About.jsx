import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { revealRef } = useScrollReveal();

  return (
    <section 
      id="about"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ 
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
      <div className="max-w-full sm:max-w-[720px]">
        <p ref={revealRef(3)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.83rem)',
          color: '#6b6b80',
          lineHeight: 1.75
        }}>
          I'm <span style={{ color: '#e8e8f0' }}>Mohammad Adnan Shakil</span>, a second-year CS student at Presidency University, Bengaluru.
          I focus on building systems where backend logic drives real decisions, not just UI.
        </p>

        <p ref={revealRef(4)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.83rem)',
          color: '#6b6b80',
          lineHeight: 1.75
        }}>
          DeltaBox demonstrates my approach: a full-stack F1 intelligence platform with a blended XGBoost + Random Forest ML engine (79.6% Top-3 accuracy, R² 0.62), Java calling Python directly via subprocess for real-time predictions, and JWT + RBAC security built from scratch.
        </p>

        <p ref={revealRef(5)} style={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.83rem)',
          color: '#6b6b80',
          lineHeight: 1.75
        }}>
          I work fast, ship aggressively, and care about clean architecture. Discipline in code, gym, and execution.
          Currently a Software Engineering Intern at Dyslexia Reading Tutor AI, building production AWS voice-AI infrastructure.
        </p>
      </div>
    </section>
  );
};

export default About;
