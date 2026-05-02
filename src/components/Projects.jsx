import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      id="projects"
      className="relative py-20 lg:py-32"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p 
            className="text-green-400 font-mono text-sm tracking-wider mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            // 01 — SELECTED WORK
          </p>
          <h2 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Projects that ship.
          </h2>
        </div>

        {/* Project 1 - DELTABOX */}
        <div className="mb-16 lg:mb-20">
          <div className="relative">
            {/* Data Table Aesthetic */}
            <div 
              className="border border-green-900/30 bg-black/50"
              style={{ background: 'rgba(10, 10, 10, 0.8)' }}
            >
              {/* Header Row */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-green-900/30">
                <div className="flex items-center gap-4">
                  <h3 
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    DELTABOX v1.0
                  </h3>
                  <span 
                    className="px-3 py-1 text-xs font-mono rounded"
                    style={{ 
                      fontFamily: 'JetBrains Mono',
                      backgroundColor: '#00ff7f',
                      color: '#0a0a0a'
                    }}
                  >
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Content Rows */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-3">
                    <p 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      PROBLEM
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <p 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      Built an AI-powered F1 analytics engine that predicts race outcomes using backend + ML orchestration.
                    </p>
                  </div>
                </div>

                {/* Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-3">
                    <p 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      ARCHITECTURE
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <p 
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      Spring Boot → Python ML → Prediction API → React UI
                    </p>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-3">
                    <p 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      TECHNOLOGY STACK
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <p 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      Spring Boot, PostgreSQL, Python, XGBoost, Random Forest, JWT, React
                    </p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-3">
                    <p 
                      className="text-green-400 font-mono text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      PERFORMANCE METRICS
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: 'Space Grotesk' }}
                      >
                        Prediction Accuracy
                      </span>
                      <span 
                        className="text-green-400 font-bold text-lg"
                        style={{ fontFamily: 'JetBrains Mono' }}
                      >
                        87.3%
                      </span>
                    </div>
                    <div className="flex gap-8 mt-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-gray-400 text-xs"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          DRIVERS
                        </span>
                        <span 
                          className="text-white font-bold"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          20
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-gray-400 text-xs"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          RACES
                        </span>
                        <span 
                          className="text-white font-bold"
                          style={{ fontFamily: 'JetBrains Mono' }}
                        >
                          24
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button 
                    className="px-6 py-2 border border-green-400 text-green-400 font-mono text-sm rounded transition-all hover:bg-green-400 hover:text-black"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    GitHub
                  </button>
                  <button 
                    className="px-6 py-2 bg-green-400 text-black font-mono text-sm rounded transition-all hover:bg-green-300"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* F1 Track Animation Below Card */}
            <div className="mt-8 relative">
              <div className="flex justify-center">
                <div className="relative" style={{ width: '100%', maxWidth: '600px' }}>
                  <svg
                    viewBox="0 0 600 300"
                    className="w-full h-auto"
                    style={{ overflow: 'visible' }}
                  >
                    {/* F1 Track Circuit */}
                    <path
                      d="M 50,150 
                       L 100,50 
                       Q 200,20 300,50 
                       L 400,100 
                       Q 450,120 500,150 
                       L 450,200 
                       Q 400,250 300,250 
                       L 200,200 
                       Q 100,180 50,150 Z"
                      fill="none"
                      stroke="#00ff7f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.8"
                    />

                    {/* Animated Dot */}
                    <circle r="4" fill="#00ff7f">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        path="M 50,150 
                               L 100,50 
                               Q 200,20 300,50 
                               L 400,100 
                               Q 450,120 500,150 
                               L 450,200 
                               Q 400,250 300,250 
                               L 200,200 
                               Q 100,180 50,150 Z"
                      />
                    </circle>
                  </svg>

                  {/* Track Label */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p 
                      className="text-green-400 font-mono text-xs text-center"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      SECTOR DASHBOARD: ACTIVE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - CentSight */}
        <div className="mb-16 lg:mb-20">
          <div className="border border-green-900/30 bg-black/50" style={{ background: 'rgba(10, 10, 10, 0.8)' }}>
            {/* Header */}
            <div className="px-6 py-4 border-b border-green-900/30">
              <div className="flex items-center gap-4">
                <h3 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  CentSight
                </h3>
                <span 
                  className="px-3 py-1 text-xs font-mono rounded border border-green-400 text-green-400"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  Hackathon — Build With TRAE · Future Finance Theme
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                AI financial decision simulator predicting savings trajectory before spending decisions. Built full pipeline: React frontend → Node.js/Express backend → Python ML models (Scikit-learn). Implemented JWT auth and real-time risk scoring with financial health classification.
              </p>

              {/* Bullets */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Full-stack pipeline with React + Node.js + Python ML models
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    JWT authentication + real-time risk scoring system
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Financial health classification with instant feedback
                  </p>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'Python', 'Scikit-learn', 'MongoDB', 'JWT'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-mono border border-green-900/50 text-green-400 rounded"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a 
                href="https://github.com/Mohammad-Adnan-Shakil/CentSight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 font-mono text-sm hover:text-green-300 transition-colors"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                GITHUB →
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - FakeOut AI */}
        <div className="mb-16 lg:mb-20">
          <div className="border border-green-900/30 bg-black/50" style={{ background: 'rgba(10, 10, 10, 0.8)' }}>
            {/* Header */}
            <div className="px-6 py-4 border-b border-green-900/30">
              <div className="flex items-center gap-4">
                <h3 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  FakeOut AI
                </h3>
                <span 
                  className="px-3 py-1 text-xs font-mono rounded border border-green-400 text-green-400"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  Hackathon Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Voice deepfake detection system using dual-model ML ensemble (XGBoost + Random Forest). Extracted 40 MFCC coefficients and spectral features from audio for classification. FastAPI backend serving ML inference with React frontend.
              </p>

              {/* Bullets */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Dual-model ensemble (XGBoost + Random Forest) for classification
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    40 MFCC coefficients + spectral features from audio
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    FastAPI backend serving ML inference with React frontend
                  </p>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {['React', 'FastAPI', 'Python', 'XGBoost', 'Random Forest', 'Librosa', 'TailwindCSS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-mono border border-green-900/50 text-green-400 rounded"
                    style={{ fontFamily: 'JetBrains Mono' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a 
                href="https://github.com/Mohammad-Adnan-Shakil/FakeOut-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 font-mono text-sm hover:text-green-300 transition-colors"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                GITHUB →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
