import { useState, useEffect, useRef } from 'react';

const Contact = () => {
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
            // 05 — CONTACT
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Let's build <span style={{ color: '#00ff7f' }}>production systems.</span>
          </h2>
          <p 
            className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Actively looking for software engineering internships (mid-2026). Open to backend, full-stack, or ML infrastructure roles.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 mb-16">
          <a 
            href="mailto:mohammadadnanshakil@example.com"
            className="px-8 py-3 border border-green-400 text-green-400 font-mono text-sm rounded transition-all hover:bg-green-400 hover:text-black"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            EMAIL
          </a>
          
          <a 
            href="https://github.com/Mohammad-Adnan-Shakil"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-green-400 text-green-400 font-mono text-sm rounded transition-all hover:bg-green-400 hover:text-black"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            GITHUB
          </a>
          
          <a 
            href="https://linkedin.com/in/mohammad-adnan-shakil"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-green-400 text-green-400 font-mono text-sm rounded transition-all hover:bg-green-400 hover:text-black"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            LINKEDIN
          </a>
        </div>

        {/* Footer - Single line only */}
        <div className="text-center border-t border-green-900/30 pt-8">
          <div className="flex items-center justify-center gap-2">
            <p 
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              © 2025 Mohammad Adnan Shakil
            </p>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <p 
              className="text-green-400 text-sm"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              Open to internships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
