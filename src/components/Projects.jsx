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

          {/* Split-Screen Engineering Dashboard */}
          <div
            className="flex flex-col lg:flex-row order-1 lg:order-1"
            style={{ 
              background: '#13131e', 
              minHeight: 'clamp(400px, 60vh, 600px)',
              height: 'auto'
            }}
          >
            {/* Left Panel - Project Intelligence (40% on desktop) */}
            <div 
              className="lg:w-2/5 w-full relative overflow-hidden border-r border-green-900/20"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.02) 0%, transparent 100%)'
              }}
            >
              {/* Terminal Grid Background */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '15px 15px',
                  opacity: 0.3
                }}
              />
              
              {/* DELTABOX Header */}
              <div className="relative p-4 sm:p-6 border-b border-green-900/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-green-400 font-mono font-bold"
                    style={{
                      fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                      fontFamily: 'JetBrains Mono',
                      textShadow: '0 0 10px rgba(0,255,136,0.5)'
                    }}
                  >
                    DELTABOX v1.0
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span 
                      className="text-green-400 text-xs font-mono"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      ONLINE
                    </span>
                  </div>
                </div>
                
                {/* System Status */}
                <div 
                  className="text-green-400 font-mono text-sm mb-2"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  RACE PREDICTION: <span className="text-white font-bold animate-pulse">ACTIVE</span>
                </div>
              </div>
              
              {/* Metrics Panel */}
              <div className="relative p-4 sm:p-6 space-y-4">
                {/* Model Info */}
                <div className="space-y-2">
                  <div 
                    className="text-green-400 font-mono text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    Model Architecture
                  </div>
                  <div 
                    className="text-white font-mono text-sm"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    XGBoost + Random Forest
                  </div>
                </div>
                
                {/* Confidence Metric */}
                <div className="space-y-2">
                  <div 
                    className="text-green-400 font-mono text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    Prediction Confidence
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="text-white font-mono text-2xl font-bold"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      87.3%
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-green-400" />
                      <div className="w-1 h-4 bg-green-400" />
                      <div className="w-1 h-2 bg-green-400/50" />
                      <div className="w-1 h-1 bg-green-400/30" />
                    </div>
                  </div>
                </div>
                
                {/* Dataset Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      Drivers
                    </div>
                    <div 
                      className="text-white font-mono text-lg font-bold"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      20
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      Races
                    </div>
                    <div 
                      className="text-white font-mono text-lg font-bold"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      24
                    </div>
                  </div>
                </div>
                
                {/* Performance Indicators */}
                <div className="space-y-2">
                  <div 
                    className="text-green-400 font-mono text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    System Performance
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-gray-400 font-mono text-xs"
                        style={{ fontFamily: 'JetBrains Mono' }}
                      >
                        CPU Usage
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-gray-700 rounded">
                          <div className="w-3/4 h-full bg-green-400 rounded" />
                        </div>
                        <span 
                          className="text-green-400 font-mono text-xs"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          74%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-gray-400 font-mono text-xs"
                        style={{ fontFamily: 'JetBrains Mono' }}
                      >
                        Memory
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-gray-700 rounded">
                          <div className="w-1/2 h-full bg-green-400 rounded" />
                        </div>
                        <span 
                          className="text-green-400 font-mono text-xs"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          52%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Monaco Circuit (60% on desktop) */}
            <div 
              className="lg:w-3/5 w-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(0,255,136,0.02) 100%)'
              }}
            >
              {/* Circuit Background Grid */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  opacity: 0.4
                }}
              />
              
              {/* Monaco Circuit Animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none">
                <svg
                  className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] h-auto"
                  viewBox="0 0 280 160"
                  style={{ overflow: 'visible' }}
                >
                  {/* Monaco Circuit Path */}
                  <path
                    id="monaco-circuit"
                    d="M 30,80 
                     L 35,45 
                     Q 45,25 65,30 
                     L 95,35 
                     Q 115,38 125,45 
                     L 140,65 
                     Q 145,75 155,70 
                     L 185,45 
                     Q 205,35 225,40 
                     L 245,65 
                     Q 250,75 245,85 
                     L 235,105 
                     Q 225,115 210,115 
                     L 185,110 
                     Q 165,108 150,95 
                     L 135,85 
                     Q 125,78 115,80 
                     L 95,85 
                     Q 75,88 65,85 
                     L 45,80 
                     Q 35,80 30,80 Z"
                    fill="none"
                    stroke="rgba(0,255,136,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#circuit-glow)"
                  />
                  
                  {/* Inner track line */}
                  <path
                    d="M 35,80 
                     L 38,50 
                     Q 47,32 65,36 
                     L 93,40 
                     Q 112,42 122,48 
                     L 137,63 
                     Q 142,72 152,68 
                     L 182,48 
                     Q 202,38 220,43 
                     L 240,65 
                     Q 245,73 242,82 
                     L 232,100 
                     Q 222,110 208,110 
                     L 183,105 
                     Q 163,103 148,92 
                     L 133,83 
                     Q 123,76 113,78 
                     L 93,82 
                     Q 73,85 63,82 
                     L 43,78 
                     Q 35,78 35,80 Z"
                    fill="none"
                    stroke="rgba(0,255,136,0.25)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Racing telemetry dot */}
                  <circle r="6" fill="#00ff88" filter="url(#telemetry-glow)">
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 30,80 
                       L 35,45 
                       Q 45,25 65,30 
                       L 95,35 
                       Q 115,38 125,45 
                       L 140,65 
                       Q 145,75 155,70 
                       L 185,45 
                       Q 205,35 225,40 
                       L 245,65 
                       Q 250,75 245,85 
                       L 235,105 
                       Q 225,115 210,115 
                       L 185,110 
                       Q 165,108 150,95 
                       L 135,85 
                       Q 125,78 115,80 
                       L 95,85 
                       Q 75,88 65,85 
                       L 45,80 
                       Q 35,80 30,80 Z"
                    />
                  </circle>
                  
                  {/* Trail effect */}
                  <circle r="4" fill="rgba(0,255,136,0.6)" filter="url(#trail-glow)">
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      begin="0.1s"
                      rotate="auto"
                      path="M 30,80 
                       L 35,45 
                       Q 45,25 65,30 
                       L 95,35 
                       Q 115,38 125,45 
                       L 140,65 
                       Q 145,75 155,70 
                       L 185,45 
                       Q 205,35 225,40 
                       L 245,65 
                       Q 250,75 245,85 
                       L 235,105 
                       Q 225,115 210,115 
                       L 185,110 
                       Q 165,108 150,95 
                       L 135,85 
                       Q 125,78 115,80 
                       L 95,85 
                       Q 75,88 65,85 
                       L 45,80 
                       Q 35,80 30,80 Z"
                    />
                  </circle>
                  
                  {/* Glow filters */}
                  <defs>
                    <filter id="telemetry-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="trail-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <radialGradient id="radar-gradient">
                      <stop offset="0%" stopColor="rgba(0,255,136,0.4)" />
                      <stop offset="100%" stopColor="rgba(0,255,136,0)" />
                    </radialGradient>
                  </defs>
                  
                  {/* Animated radar rings */}
                  <circle cx="140" cy="80" r="35" fill="none" stroke="url(#radar-gradient)" strokeWidth="1.5" opacity="0.7">
                    <animate attributeName="r" values="25;45;25" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="80" r="25" fill="none" stroke="rgba(0,255,136,0.3)" strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="15;35;15" dur="4s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  
                  {/* Blinking checkpoints */}
                  <circle cx="35" cy="45" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="65" cy="30" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <circle cx="125" cy="45" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="185" cy="45" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <circle cx="245" cy="85" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  <circle cx="210" cy="115" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="2.5s" />
                  </circle>
                  <circle cx="150" cy="95" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="3s" />
                  </circle>
                  <circle cx="95" cy="85" r="3" fill="rgba(0,255,136,0.8)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="3.5s" />
                  </circle>
                </svg>
              </div>
              
              {/* Scanning Line Effect */}
              <div 
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"
                style={{
                  top: '50%',
                  animation: 'scanLine 3s ease-in-out infinite',
                  transform: 'translateY(-50%)'
                }}
              />
              
              {/* Circuit Info Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4">
                <div 
                  className="text-green-400 font-mono text-sm"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  TRACK: MONACO GP
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center">
                  <div 
                    className="text-green-400 font-mono text-xs"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    SECTOR: 3
                  </div>
                  <div 
                    className="text-green-400 font-mono text-xs"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    TELEMETRY: ACTIVE
                  </div>
                </div>
              </div>
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
