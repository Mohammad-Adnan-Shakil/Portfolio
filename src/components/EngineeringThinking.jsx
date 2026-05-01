import useScrollReveal from '../hooks/useScrollReveal';

const EngineeringThinking = () => {
  const { revealRef } = useScrollReveal();

  return (
    <section 
      id="engineering"
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
          // 04 — Engineering Thinking
        </p>
      </div>

      {/* Section Title */}
      <div ref={revealRef(1)} className="mb-6">
        <h2
          style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          How I <span style={{ color: '#00ff88' }}>Build Systems.</span>
        </h2>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px' }}>
        <div ref={revealRef(2)} className="mb-4">
          <h3
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.82rem',
              color: '#00ff88',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Backend + ML Integration
          </h3>
        </div>

        <div ref={revealRef(3)} className="mb-3" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          <strong style={{ color: '#e8e8f0' }}>1. API Layer (Spring Boot/Node.js)</strong> — RESTful endpoints, authentication, RBAC, request validation
        </div>

        <div ref={revealRef(4)} className="mb-3" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          <strong style={{ color: '#e8e8f0' }}>2. Orchestration Layer</strong> — Java subprocess calls to Python ML models, async processing, response caching
        </div>

        <div ref={revealRef(5)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          <strong style={{ color: '#e8e8f0' }}>3. ML Pipeline</strong> — Feature extraction → Model inference → Response formatting, confidence scoring, fallback handling
        </div>

        <div ref={revealRef(6)} className="mb-4" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          <strong style={{ color: '#00ff88' }}>Example Flow:</strong> User Request → API Validation → Subprocess to Python → ML Prediction → Response Cache → JSON Response
        </div>

        <div ref={revealRef(7)} style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.83rem',
          color: '#6b6b80',
          lineHeight: 1.9
        }}>
          <strong style={{ color: '#e8e8f0' }}>Goal:</strong> Build systems that are secure, performant, and maintainable.
        </div>
      </div>
    </section>
  );
};

export default EngineeringThinking;
