import { useState, useEffect, useRef } from 'react';

const About = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p 
            className="text-green-400 font-mono text-sm tracking-wider mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            // 03 — ABOUT
          </p>
          <h2 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            The person behind the code.
          </h2>
        </div>

        {/* Body Content */}
        <div className="space-y-6">
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            I'm Mohammad Adnan Shakil, a second-year CS student at Presidency University, Bengaluru. I focus on building systems where backend logic drives real decisions, not just UI. Deltabox demonstrates my approach: Java calling Python ML models for real-time predictions, with JWT + RBAC security and caching for performance. I work fast, ship aggressively, and care about clean architecture. Discipline in code, gym, and execution. Targeting software engineering internships for mid-2026.
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 
              className="text-green-400 font-mono text-sm uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              Focus Areas
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Backend systems with ML integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Real-time prediction systems
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Secure API architecture
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 
              className="text-green-400 font-mono text-sm uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              Core Principles
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Clean, maintainable code
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Fast iteration and shipping
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Production-ready systems
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Highlight */}
        <div className="mt-16 p-6 border border-green-900/30" style={{ background: 'rgba(10, 10, 10, 0.8)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 
                className="text-green-400 font-mono text-sm uppercase tracking-wider mb-2"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                Education
              </h3>
              <p 
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Presidency University, Bengaluru
              </p>
              <p 
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Computer Science & Engineering · 2nd Year
              </p>
            </div>
            <div className="text-right">
              <p 
                className="text-green-400 font-mono text-sm"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                2024 — 2028
              </p>
              <p 
                className="text-gray-400 text-xs mt-2"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                Expected Graduation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
