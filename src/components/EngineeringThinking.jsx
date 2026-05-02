import { useState, useEffect, useRef } from 'react';

const EngineeringThinking = () => {
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
            // 04 — ENGINEERING THINKING
          </p>
          <h2 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            How I Build Systems.
          </h2>
        </div>

        {/* BACKEND + ML INTEGRATION */}
        <div className="mb-16 lg:mb-20">
          <h3 
            className="text-green-400 font-mono text-lg font-bold mb-8"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            BACKEND + ML INTEGRATION
          </h3>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center text-green-400 font-bold"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  API Layer
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  RESTful endpoints, authentication, RBAC, request validation
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center text-green-400 font-bold"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Orchestration
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Java subprocess calls to Python ML models, async processing, response caching
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center text-green-400 font-bold"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  ML Pipeline
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Feature extraction → Model inference → Response formatting, confidence scoring, fallback handling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Example Flow */}
        <div className="mb-16 lg:mb-20">
          <h3 
            className="text-green-400 font-mono text-lg font-bold mb-8"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Example Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                User Request
              </p>
            </div>
            
            <div className="text-green-400">→</div>
            
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                API Validation
              </p>
            </div>
            
            <div className="text-green-400">→</div>
            
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                Subprocess to Python
              </p>
            </div>
            
            <div className="text-green-400">→</div>
            
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                ML Prediction
              </p>
            </div>
            
            <div className="text-green-400">→</div>
            
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                Response Cache
              </p>
            </div>
            
            <div className="text-green-400">→</div>
            
            <div className="px-4 py-3 border border-green-900/50 rounded">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                JSON Response
              </p>
            </div>
          </div>
        </div>

        {/* Goal */}
        <div className="p-8 border border-green-900/30 text-center" style={{ background: 'rgba(10, 10, 10, 0.8)' }}>
          <h3 
            className="text-green-400 font-mono text-sm uppercase tracking-wider mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Goal
          </h3>
          <p 
            className="text-white text-xl font-bold leading-relaxed"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Build systems that are secure, performant, and maintainable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringThinking;
