import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  const { revealRef } = useScrollReveal();

  const techTags = [
    'Spring Boot', 'PostgreSQL', 'React', 'Tailwind', 
    'XGBoost', 'Random Forest', 'Python', 'JWT'
  ];

  const secondaryProjects = [
    {
      number: '02 —',
      title: 'CentSight',
      badge: '🏆 Hackathon — Build With TRAE · Future Finance Theme',
      description: 'AI financial decision simulator predicting savings trajectory before spending decisions. Built full pipeline: React frontend → Node.js/Express backend → Python ML models (Scikit-learn). Implemented JWT auth and real-time risk scoring with financial health classification.',
      bullets: ['Full-stack pipeline with React + Node.js + Python ML models', 'JWT authentication + real-time risk scoring system', 'Financial health classification with instant feedback'],
      tags: ['React', 'Node.js', 'Express', 'Python', 'Scikit-learn', 'MongoDB', 'JWT'],
      github: 'https://github.com/Mohammad-Adnan-Shakil/CentSight'
    },
    {
      number: '03 —',
      title: 'FakeOut AI',
      badge: '🏆 Hackathon Project',
      description: 'Voice deepfake detection system using dual-model ML ensemble (XGBoost + Random Forest). Extracted 40 MFCC coefficients and spectral features from audio for classification. FastAPI backend serving ML inference with React frontend for audio upload/analysis.',
      bullets: ['Dual-model ensemble (XGBoost + Random Forest) for classification', '40 MFCC coefficients + spectral features from audio', 'FastAPI backend serving ML inference with React frontend'],
      tags: ['React', 'FastAPI', 'Python', 'XGBoost', 'Random Forest', 'Librosa', 'TailwindCSS'],
      github: 'https://github.com/FuncLexa/FakeOut-AI'
    }
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
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
          // 01 — Selected Work
        </p>
      </div>

      {/* Section Title */}
      <div ref={revealRef(1)} className="mb-12">
        <h2
          style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          Projects that <span style={{ color: '#00ff88' }}>ship.</span>
        </h2>
      </div>

      {/* Featured Card - Deltabox */}
      <div ref={revealRef(2)} className="mb-12 sm:mb-16">
        <div
          className="relative overflow-hidden transition-all duration-300 flex flex-col lg:grid lg:grid-cols-2"
          style={{
            border: '1px solid rgba(0,255,136,0.12)',
            background: 'rgba(255,255,255,0.02)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.35)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.12)'}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.04), transparent)'
            }}
          />

          {/* Left Column - Visual Panel */}
          <div
            className="relative overflow-hidden order-1 lg:order-1"
            style={{ 
              background: '#13131e', 
              minHeight: 'clamp(220px, 40vh, 420px)',
              height: 'auto'
            }}
          >
            {/* Monaco Circuit Visualization */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none">
              <svg
                className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] h-auto"
                viewBox="0 0 280 160"
                style={{ overflow: 'visible' }}
              >
                {/* Circuit track path - simplified Monaco layout */}
                <path
                  id="monaco-circuit"
                  d="M40,80 L50,40 L80,35 L120,40 L140,55 L160,45 L200,40 L230,50 L240,80 L235,110 L200,120 L160,115 L140,100 L120,110 L80,120 L50,115 L40,80 Z"
                  fill="none"
                  stroke="rgba(0,255,136,0.25)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Inner track line for depth */}
                <path
                  d="M45,80 L53,45 L78,40 L118,45 L138,58 L158,50 L198,45 L225,55 L233,80 L228,105 L198,113 L158,108 L138,95 L118,105 L78,113 L53,108 L45,80 Z"
                  fill="none"
                  stroke="rgba(0,255,136,0.12)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Racing dot - travels along circuit path */}
                <circle r="5" fill="#00ff88" filter="url(#glow)">
                  <animateMotion
                    dur="6s"
                    repeatCount="indefinite"
                    path="M40,80 L50,40 L80,35 L120,40 L140,55 L160,45 L200,40 L230,50 L240,80 L235,110 L200,120 L160,115 L140,100 L120,110 L80,120 L50,115 L40,80 Z"
                  />
                </circle>
                
                {/* Glow filter */}
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Corner indicators - subtle glow points */}
                <circle cx="50" cy="40" r="2" fill="rgba(0,255,136,0.3)" />
                <circle cx="120" cy="40" r="2" fill="rgba(0,255,136,0.3)" />
                <circle cx="200" cy="40" r="2" fill="rgba(0,255,136,0.3)" />
                <circle cx="240" cy="80" r="2" fill="rgba(0,255,136,0.3)" />
                <circle cx="200" cy="120" r="2" fill="rgba(0,255,136,0.3)" />
                <circle cx="80" cy="120" r="2" fill="rgba(0,255,136,0.3)" />
              </svg>
            </div>

            {/* Top-left data overlay - hidden on small mobile */}
            <div
              className="absolute pointer-events-none hidden sm:block"
              style={{
                top: 'clamp(0.75rem, 2vw, 1.5rem)',
                left: 'clamp(0.75rem, 2vw, 1.5rem)',
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.5rem, 1.5vw, 0.6rem)',
                color: 'rgba(0,255,136,0.45)',
                lineHeight: 1.8
              }}
            >
              <div>DELTABOX_AI v1.0</div>
              <div>RACE_PREDICTION: ACTIVE</div>
              <div>MODEL: XGBoost + RF</div>
            </div>

            {/* Bottom-right data overlay - hidden on small mobile */}
            <div
              className="absolute text-right pointer-events-none hidden sm:block"
              style={{
                bottom: 'clamp(0.75rem, 2vw, 1.5rem)',
                right: 'clamp(0.75rem, 2vw, 1.5rem)',
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.5rem, 1.5vw, 0.6rem)',
                color: 'rgba(0,255,136,0.45)',
                lineHeight: 1.8
              }}
            >
              <div>CONFIDENCE: 87.3%</div>
              <div>DRIVERS: 20</div>
              <div>RACES: 24</div>
            </div>

            {/* Scanline effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.015) 2px, rgba(0,255,136,0.015) 4px)'
              }}
            />
          </div>

          {/* Right Column - Info Panel */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 order-2 lg:order-2">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="rounded-full"
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#00ff88',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              />
              <p
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.62rem',
                  color: '#00ff88',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase'
                }}
              >
                Featured Project
              </p>
            </div>

            {/* Title */}
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 5vw, 2.6rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}
            >
              Deltabox
            </h3>

            {/* Description */}
            <div
              className="mb-6"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                color: '#5a5a70',
                lineHeight: 1.95
              }}
            >
              <p className="mb-4">
                AI-powered F1 analytics platform processing race data across 20+ drivers and 24 races per season.
              </p>
              <div style={{ paddingLeft: 'clamp(0.5rem, 2vw, 1rem)' }}>
                <div className="mb-2">• Spring Boot backend + Python ML integration via subprocess orchestration</div>
                <div className="mb-2">• What-if simulation engine + caching layer for performance optimization</div>
                <div>• JWT authentication + RBAC-secured APIs with 87.3% prediction confidence</div>
              </div>
            </div>

            {/* Prediction Engine Status - compact on mobile */}
            <div
              className="mb-6 sm:mb-8 p-3 sm:p-4"
              style={{
                border: '1px solid rgba(0,255,136,0.12)',
                background: 'rgba(0,255,136,0.02)'
              }}
            >
              <div
                className="mb-2 sm:mb-3"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)',
                  color: '#00ff88',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Prediction Engine
              </div>
              <div
                className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:gap-0"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 'clamp(0.65rem, 2vw, 0.72rem)',
                  color: '#5a5a70',
                  lineHeight: 1.6
                }}
              >
                <div>Accuracy: <span style={{ color: '#e8e8f0' }}>87.3%</span></div>
                <div className="hidden sm:block">Drivers: <span style={{ color: '#e8e8f0' }}>20</span></div>
                <div className="hidden sm:block">Races: <span style={{ color: '#e8e8f0' }}>24</span></div>
                <div>Models: <span style={{ color: '#e8e8f0' }}>XGBoost + RF</span></div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 'clamp(0.55rem, 1.8vw, 0.62rem)',
                    color: '#00c8ff',
                    border: '1px solid rgba(0,200,255,0.18)',
                    padding: 'clamp(0.2rem, 1vw, 0.28rem) clamp(0.4rem, 2vw, 0.65rem)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 sm:gap-8">
              <a
                href="https://github.com/Mohammad-Adnan-Shakil/DeltaBox"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 'clamp(0.65rem, 2vw, 0.72rem)',
                  color: '#00ff88',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
              >
                GitHub →
              </a>
              <span
                className="transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 'clamp(0.65rem, 2vw, 0.72rem)',
                  color: '#00ff88',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateX(6px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
              >
                Live Demo →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Cards Grid */}
      <div ref={revealRef(3)} className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {secondaryProjects.map((project, index) => (
          <div
            key={project.title}
            ref={revealRef(4 + index)}
            className="relative overflow-hidden transition-all duration-300 w-full"
            style={{
              background: '#0a0a0f',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0f0f17';
              e.currentTarget.querySelector('.hover-line').style.width = '100%';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0a0a0f';
              e.currentTarget.querySelector('.hover-line').style.width = '0';
            }}
          >
            {/* Hover line */}
            <div
              className="hover-line absolute bottom-0 left-0 transition-all duration-450"
              style={{
                width: '0',
                height: '1px',
                background: '#00ff88'
              }}
            />

            {/* Number */}
            <p
              className="mb-6"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.62rem',
                color: '#6b6b80',
                letterSpacing: '0.18em'
              }}
            >
              {project.number}
            </p>

            {/* Badge */}
            <p
              className="mb-3"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.58rem',
                color: '#00ff88'
              }}
            >
              {project.badge}
            </p>

            {/* Title */}
            <h3
              className="mb-3"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <div
              className="mb-6"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.7rem, 2vw, 0.76rem)',
                color: '#5a5a70',
                lineHeight: 1.85
              }}
            >
              <p className="mb-3">
                {project.description}
              </p>
              <div style={{ paddingLeft: 'clamp(0.5rem, 2vw, 1rem)' }}>
                {project.bullets.map((bullet, idx) => (
                  <div key={idx} className="mb-2">
                    • {bullet}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.62rem',
                    color: '#00c8ff',
                    border: '1px solid rgba(0,200,255,0.18)',
                    padding: '0.28rem 0.65rem'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.72rem',
                color: '#00ff88',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateX(6px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
