import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 80vw, 700px)',
          height: 'clamp(300px, 80vw, 700px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,127,0.07) 0%, transparent 70%)'
        }}
      />

      {/* Floating Particles */}
      <div className="hidden sm:block">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute pointer-events-none rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: '2px',
              height: '2px',
              backgroundColor: '#00ff7f',
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Top Line - Left Aligned */}
        <div className="mb-8 text-left">
          <p 
            className="text-green-400 font-mono text-xs sm:text-sm tracking-wider opacity-90"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Mohammad Adnan Shakil · Full-Stack + ML Systems · Bengaluru
          </p>
        </div>

        {/* Giant Stacked Display Type */}
        <div className="mb-12 text-center">
          <h1 className="text-white leading-none">
            <div 
              className="font-bold mb-4"
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(8rem, 15vw, 15rem)',
                WebkitTextStroke: '3px #00ff7f',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ML
            </div>
            <div 
              className="font-bold mb-4"
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(8rem, 15vw, 15rem)',
                color: '#ffffff'
              }}
            >
              Engineer
            </div>
            <div 
              className="font-bold"
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(8rem, 15vw, 15rem)',
                color: '#ffffff'
              }}
            >
              & Dev.
            </div>
          </h1>
        </div>

        {/* Subtext */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed text-center"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Full-stack engineer building production systems that integrate ML models into real applications. 
            Working with Spring Boot, React, and Python to ship systems that make decisions — not just display data.
          </p>
        </div>

        {/* Mono Line */}
        <div className="mb-12">
          <p 
            className="text-green-400 font-mono text-xs sm:text-sm leading-relaxed opacity-80 text-center"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Currently building Deltabox: Java backend calling Python ML models via subprocess for real-time race predictions with JWT + RBAC security.
          </p>
        </div>

        {/* Full-width neon green CTA button */}
        <div className="mb-8 text-center">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 font-bold text-sm sm:text-base rounded-none transition-all hover:opacity-80 focus:outline-none"
            style={{ 
              fontFamily: 'Space Grotesk',
              backgroundColor: '#00ff7f',
              color: '#0a0a0a'
            }}
          >
            VIEW SYSTEMS ↓
          </button>
        </div>

        {/* GitHub Link */}
        <div className="mb-12 text-center">
          <a 
            href="https://github.com/Mohammad-Adnan-Shakil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-mono text-sm hover:text-green-300 transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            GITHUB ↗
          </a>
        </div>

        {/* Stats Row with Separators */}
        <div className="flex justify-center items-center gap-8 text-green-400 font-mono text-sm">
          <div className="text-center">
            <div 
              className="font-bold text-lg mb-1"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              3+
            </div>
            <div 
              className="text-xs opacity-80"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              PROJECTS
            </div>
          </div>
          <div className="w-px h-8 bg-green-400 opacity-30"></div>
          <div className="text-center">
            <div 
              className="font-bold text-lg mb-1"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              5+
            </div>
            <div 
              className="text-xs opacity-80"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              TECH STACK
            </div>
          </div>
          <div className="w-px h-8 bg-green-400 opacity-30"></div>
          <div className="text-center">
            <div 
              className="font-bold text-lg mb-1"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              2nd
            </div>
            <div 
              className="text-xs opacity-80"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              YEAR CSE
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 font-mono text-xs animate-bounce">
        <div style={{ fontFamily: 'JetBrains Mono' }}>SCROLL</div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
