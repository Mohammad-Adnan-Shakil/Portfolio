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
      description: 'AI financial decision simulator that predicts savings trajectory before spending decisions. Built full pipeline: React frontend → Node.js/Express backend → Python ML models (Scikit-learn). Implemented JWT auth and real-time risk scoring with financial health classification.',
      tags: ['React', 'Node.js', 'Express', 'Python', 'Scikit-learn', 'MongoDB', 'JWT'],
      github: 'https://github.com/Mohammad-Adnan-Shakil/CentSight'
    },
    {
      number: '03 —',
      title: 'FakeOut AI',
      badge: '🏆 Hackathon Project',
      description: 'Voice deepfake detection system using dual-model ML ensemble (XGBoost + Random Forest). Extracted 40 MFCC coefficients and spectral features from audio for classification. FastAPI backend serving ML inference with React frontend for audio upload/analysis.',
      tags: ['React', 'FastAPI', 'Python', 'XGBoost', 'Random Forest', 'Librosa', 'TailwindCSS'],
      github: 'https://github.com/FuncLexa/FakeOut-AI'
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 4rem' }}>
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
      <div ref={revealRef(2)} className="mb-16">
        <div
          className="featured-card-grid relative overflow-hidden transition-all duration-300"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid rgba(0,255,136,0.12)',
            background: 'rgba(255,255,255,0.02)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.35)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.12)'}
        >
          <style>{`
            @media (max-width: 768px) {
              .featured-card-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.04), transparent)'
            }}
          />

          {/* Left Column - Visual Panel */}
          <div
            className="relative overflow-hidden"
            style={{ background: '#13131e', minHeight: '420px' }}
          >
            {/* F1 Circuit Visual */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="relative"
                style={{
                  width: '280px',
                  height: '155px',
                  border: '1.5px solid rgba(0,255,136,0.25)',
                  borderRadius: '80px',
                  animation: 'orbit 8s linear infinite'
                }}
              >
                {/* Racing dot */}
                <div
                  className="absolute"
                  style={{
                    width: '10px',
                    height: '10px',
                    background: '#00ff88',
                    borderRadius: '50%',
                    boxShadow: '0 0 12px #00ff88',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
              </div>
              {/* Inner oval */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '200px',
                  height: '100px',
                  border: '1px solid rgba(0,255,136,0.12)',
                  borderRadius: '60px'
                }}
              />
            </div>

            {/* Top-left data overlay */}
            <div
              className="absolute"
              style={{
                top: '1.5rem',
                left: '1.5rem',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.6rem',
                color: 'rgba(0,255,136,0.45)',
                lineHeight: 1.8
              }}
            >
              <div>DELTABOX_AI v1.0</div>
              <div>RACE_PREDICTION: ACTIVE</div>
              <div>MODEL: XGBoost + RF</div>
            </div>

            {/* Bottom-right data overlay */}
            <div
              className="absolute text-right"
              style={{
                bottom: '1.5rem',
                right: '1.5rem',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.6rem',
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
          <div className="flex flex-col justify-between p-12">
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
                fontSize: '2.4rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              Deltabox
            </h3>

            {/* Description */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.8rem',
                color: '#6b6b80',
                lineHeight: 1.85
              }}
            >
              Built an AI-powered F1 analytics platform that processes real-time race data and predicts outcomes using ML models.
              Implemented Java (Spring Boot) backend integrated with Python ML models via subprocess orchestration.
              Designed what-if simulation engine and caching layer for performance optimization.
              Features JWT authentication, RBAC, and confidence scoring for race predictions.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
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
                href="https://github.com/Mohammad-Adnan-Shakil/DeltaBox"
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
        </div>
      </div>

      {/* Secondary Cards Grid */}
      <div ref={revealRef(3)} className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {secondaryProjects.map((project, index) => (
          <div
            key={project.title}
            ref={revealRef(4 + index)}
            className="relative overflow-hidden transition-all duration-300"
            style={{
              background: '#0a0a0f',
              padding: '2.5rem'
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
                fontSize: '1.25rem',
                letterSpacing: '-0.01em'
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="mb-6"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.76rem',
                color: '#6b6b80',
                lineHeight: 1.75
              }}
            >
              {project.description}
            </p>

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
