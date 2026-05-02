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
      github: 'https://github.com/Mohammad-Adnan-Shakil/centSight'
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

      {/* Featured Card - Deltabox - Fixed Spacing and Composition */}
      <div ref={revealRef(2)} className="mb-12 sm:mb-16">
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: '480px',
            maxHeight: '550px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          {/* LAYER 1 — Base: Deep gradient #05070A to #07111C */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #05070A 0%, #07111C 100%)'
            }}
          />

          {/* LAYER 2 — Tactical grid: very thin, low opacity, glowing green-blue tint */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '45px 45px',
              opacity: 0.6
            }}
          />

          {/* LAYER 3 — Data motion: animated telemetry dots, scanning signal lines, floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated telemetry dots */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i * 6)}%`,
                  width: '2px',
                  height: '2px',
                  backgroundColor: 'rgba(0,255,136,0.4)',
                  animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          
            {/* Scanning signal lines */}
            <div
              className="absolute w-full h-0.5"
              style={{
                top: '30%',
                background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.3), transparent)',
                animation: 'scanLine 4s linear infinite'
              }}
            />
            <div
              className="absolute w-full h-0.5"
              style={{
                top: '60%',
                background: 'linear-gradient(90deg, transparent, rgba(0,200,255,0.2), transparent)',
                animation: 'scanLine 4s linear infinite 1.5s'
              }}
            />
          
            {/* Floating digital particles */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: Math.random() > 0.6 ? '2px' : '1px',
                  height: Math.random() > 0.6 ? '2px' : '1px',
                  backgroundColor: `rgba(0,255,136,${0.15 + Math.random() * 0.2})`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* LAYER 4 — AI glow: radial neon green glow behind Monaco circuit with breathing animation */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 65%)',
              filter: 'blur(30px)',
              animation: 'breathe 6s ease-in-out infinite',
              zIndex: 2
            }}
          />

          {/* LAYER 5 — Hidden system text: 5-10% opacity */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              style={{
                position: 'absolute',
                top: '6%',
                left: '3%',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.42rem',
                color: 'rgba(0,255,136,0.08)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              SYNC_ACTIVE
            </div>
            <div
              style={{
                position: 'absolute',
                top: '10%',
                right: '3%',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.42rem',
                color: 'rgba(0,255,136,0.06)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              MODEL_RUNNING
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '3%',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.42rem',
                color: 'rgba(0,255,136,0.05)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              PREDICTION_READY
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '6%',
                right: '3%',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.42rem',
                color: 'rgba(0,255,136,0.04)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              JWT_SECURED
            </div>
          </div>

          {/* LAYER 6 — Hex geometry: 2-3 faint wireframe hexagons */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Hexagon 1 */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                left: '8%',
                width: '55px',
                height: '48px',
                border: '1px solid rgba(0,255,136,0.08)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                opacity: 0.25
              }}
            />
            {/* Hexagon 2 */}
            <div
              style={{
                position: 'absolute',
                top: '65%',
                right: '10%',
                width: '40px',
                height: '35px',
                border: '1px solid rgba(0,200,255,0.06)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                opacity: 0.2
              }}
            />
          </div>

          {/* LEFT COLUMN - DELTABOX CONTENT - Fixed spacing and vertical centering */}
          <div className="p-6 lg:p-8 relative z-20 flex flex-col justify-center">
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
              className="mb-4"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                color: '#5a5a70',
                lineHeight: 1.95
              }}
            >
              <p className="mb-3">
                AI-powered F1 analytics platform processing race data across 20+ drivers and 24 races per season.
              </p>
              <div style={{ paddingLeft: 'clamp(0.5rem, 2vw, 1rem)' }}>
                <div className="mb-2">• Spring Boot backend + Python ML integration via subprocess orchestration</div>
                <div className="mb-2">• What-if simulation engine + caching layer for performance optimization</div>
                <div>• JWT authentication + RBAC-secured APIs with 87.3% prediction confidence</div>
              </div>
            </div>

            {/* Prediction Engine Status */}
            <div
              className="mb-4 p-3"
              style={{
                border: '1px solid rgba(0,255,136,0.12)',
                background: 'rgba(0,255,136,0.02)'
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.65rem',
                  color: '#00ff88',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Prediction Engine
              </div>
              <div
                className="grid grid-cols-2 gap-2"
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.72rem',
                  color: '#5a5a70',
                  lineHeight: 1.6
                }}
              >
                <div>Accuracy: <span style={{ color: '#e8e8f0' }}>87.3%</span></div>
                <div>Drivers: <span style={{ color: '#e8e8f0' }}>20</span></div>
                <div>Races: <span style={{ color: '#e8e8f0' }}>24</span></div>
                <div>Models: <span style={{ color: '#e8e8f0' }}>XGBoost + RF</span></div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {techTags.map((tag) => (
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

            {/* Links */}
            <div className="flex gap-8">
              <a
                href="https://github.com/Mohammad-Adnan-Shakil/deltaBox"
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
              <span
                className="transition-all duration-200 cursor-pointer"
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
                Live Demo →
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN - MONACO CIRCUIT - Scaled up 20% and centered */}
          <div 
            className="relative overflow-hidden"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            {/* MONACO GRAND PRIX CIRCUIT - Scaled 20% larger */}
            <div 
              className="relative"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg
                className="w-full max-w-[520px] h-auto"
                viewBox="0 0 320 180"
                style={{ overflow: 'visible' }}
              >
                {/* Monaco Circuit Path */}
                <path
                  id="monaco-circuit"
                  d="M 40,90 
                   L 50,50 
                   Q 60,25 80,30 
                   L 110,35 
                   Q 140,38 150,50 
                   L 170,75 
                   Q 180,85 190,80 
                   L 220,55 
                   Q 240,45 260,50 
                   L 280,80 
                   Q 290,95 285,110 
                   L 270,130 
                   Q 255,145 235,145 
                   L 210,140 
                   Q 185,138 165,125 
                   L 145,105 
                   Q 130,90 115,95 
                   L 95,100 
                   Q 75,105 65,100 
                   L 50,90 
                   Q 45,90 40,90 Z"
                  fill="none"
                  stroke="rgba(0,255,136,0.6)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#circuit-glow)"
                />

                {/* Inner track line */}
                <path
                  d="M 45,90 
                   L 52,55 
                   Q 61,32 80,36 
                   L 108,40 
                   Q 137,42 147,53 
                   L 167,73 
                   Q 177,82 187,78 
                   L 217,58 
                   Q 237,48 255,53 
                   L 275,80 
                   Q 284,93 280,107 
                   L 265,125 
                   Q 250,140 232,140 
                   L 207,135 
                   Q 182,133 162,122 
                   L 142,103 
                   Q 127,88 112,93 
                   L 92,98 
                   Q 72,103 62,98 
                   L 47,90 
                   Q 42,90 45,90 Z"
                  fill="none"
                  stroke="rgba(0,255,136,0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Racing telemetry dot */}
                <circle r="6" fill="#00ff88" filter="url(#telemetry-glow)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M 40,90 
                     L 50,50 
                     Q 60,25 80,30 
                     L 110,35 
                     Q 140,38 150,50 
                     L 170,75 
                     Q 180,85 190,80 
                     L 220,55 
                     Q 240,45 260,50 
                     L 280,80 
                     Q 290,95 285,110 
                     L 270,130 
                     Q 255,145 235,145 
                     L 210,140 
                     Q 185,138 165,125 
                     L 145,105 
                     Q 130,90 115,95 
                     L 95,100 
                     Q 75,105 65,100 
                     L 50,90 
                     Q 45,90 40,90 Z"
                  />
                </circle>

                {/* Trail effect */}
                <circle r="4" fill="rgba(0,255,136,0.6)" filter="url(#trail-glow)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    begin="0.2s"
                    rotate="auto"
                    path="M 40,90 
                     L 50,50 
                     Q 60,25 80,30 
                     L 110,35 
                     Q 140,38 150,50 
                     L 170,75 
                     Q 180,85 190,80 
                     L 220,55 
                     Q 240,45 260,50 
                     L 280,80 
                     Q 290,95 285,110 
                     L 270,130 
                     Q 255,145 235,145 
                     L 210,140 
                     Q 185,138 165,125 
                     L 145,105 
                     Q 130,90 115,95 
                     L 95,100 
                     Q 75,105 65,100 
                     L 50,90 
                     Q 45,90 40,90 Z"
                  />
                </circle>

                {/* Enhanced glow filters */}
                <defs>
                  <filter id="telemetry-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="trail-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
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
