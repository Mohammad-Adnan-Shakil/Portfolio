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

        {/* Body Content - Plain paragraph only */}
        <div className="space-y-6">
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            I'm Mohammad Adnan Shakil, a second-year CS student at Presidency University, Bengaluru. I focus on building systems where backend logic drives real decisions, not just UI. Deltabox demonstrates my approach: Java calling Python ML models for real-time predictions, with JWT + RBAC security and caching for performance. I work fast, ship aggressively, and care about clean architecture. Discipline in code, gym, and execution. Targeting software engineering internships for mid-2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
