import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
    opacity: 0.2 + Math.random() * 0.2
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section 
      className="relative flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-16"
      style={{ 
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '2rem'
      }}
      id="hero"
    >
      {/* Radial Glow - scaled for mobile */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 80vw, 700px)',
          height: 'clamp(300px, 80vw, 700px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)'
        }}
      />

      {/* Floating Particles - hidden on mobile */}
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
              backgroundColor: '#00ff88',
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Tag Line */}
        <motion.div variants={itemVariants} className="mb-6">
          <p
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.72rem',
              color: '#00ff88',
              letterSpacing: '0.2em'
            }}
          >
            <span style={{ color: '#6b6b80' }}>&gt; </span>
            Mohammad Adnan Shakil · Full-Stack + ML Systems · Bengaluru
          </p>
        </motion.div>

        {/* Main Heading - mobile-optimized sizes */}
        <motion.div variants={itemVariants} className="mb-5 sm:mb-8">
          <h1
            className="text-center sm:text-left"
            style={{
              fontFamily: 'Syne',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 10vw, 8rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em'
            }}
          >
            <div className="whitespace-nowrap">ML</div>
            <div
              className="whitespace-nowrap"
              style={{
                WebkitTextStroke: '1.5px rgba(0,255,136,0.5)',
                color: 'transparent'
              }}
            >
              Engineer
            </div>
            <div className="whitespace-nowrap">& Dev.</div>
          </h1>
        </motion.div>

        {/* Primary Line */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <p
            className="text-center sm:text-left max-w-[90vw] sm:max-w-xl mx-auto sm:mx-0"
            style={{
              fontFamily: 'Syne',
              fontWeight: 600,
              fontSize: 'clamp(0.85rem, 3.5vw, 1.15rem)',
              color: '#e8e8f0',
              lineHeight: 1.55
            }}
          >
            Full-stack engineer building production systems that integrate ML models into real applications.
            Working with Spring Boot, React, and Python to ship systems that make decisions — not just display data.
          </p>
        </motion.div>

        {/* Sub Line */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <p
            className="text-center sm:text-left max-w-[85vw] sm:max-w-lg mx-auto sm:mx-0"
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.82rem)',
              color: '#6b6b80',
              lineHeight: 1.7
            }}
          >
            Currently building Deltabox: Java backend calling Python ML models via subprocess for real-time race predictions with JWT + RBAC security.
          </p>
        </motion.div>

        {/* CTA Buttons - optimized for mobile */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10 items-stretch sm:items-start w-full sm:w-auto">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 w-full sm:w-auto text-center"
            style={{
              background: '#00ff88',
              color: '#000',
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.78rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: 'clamp(0.75rem, 3vw, 0.9rem) clamp(1.5rem, 5vw, 2.2rem)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
            onMouseEnter={(e) => e.target.style.background = '#ffffff'}
            onMouseLeave={(e) => e.target.style.background = '#00ff88'}
          >
            View Systems ↓
          </Link>
          <a
            href="https://github.com/Mohammad-Adnan-Shakil"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:-translate-y-1 w-full sm:w-auto text-center"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,255,136,0.2)',
              color: '#00ff88',
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.78rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: 'clamp(0.75rem, 3vw, 0.9rem) clamp(1.5rem, 5vw, 2.2rem)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#00ff88';
              e.target.style.background = 'rgba(0,255,136,0.06)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(0,255,136,0.2)';
              e.target.style.background = 'transparent';
            }}
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats - horizontal row on mobile, vertical on desktop */}
        <div
          className="flex flex-row sm:flex-col justify-between sm:justify-start gap-4 sm:gap-6 sm:absolute sm:text-right mt-6 sm:mt-0 w-full sm:w-auto px-2 sm:px-0"
          style={{
            bottom: 'clamp(0.5rem, 4vh, 3rem)',
            right: 'clamp(0.5rem, 4vw, 4rem)',
            zIndex: 2
          }}
        >
          <div className="text-center sm:text-right flex-1 sm:flex-none">
            <div
              style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: '#00ff88'
              }}
            >
              3+
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.5rem, 2vw, 0.62rem)',
                color: '#6b6b80',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Projects
            </div>
          </div>
          <div className="text-center sm:text-right flex-1 sm:flex-none">
            <div
              style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: '#00ff88'
              }}
            >
              5+
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.5rem, 2vw, 0.62rem)',
                color: '#6b6b80',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Tech Stack
            </div>
          </div>
          <div className="text-center sm:text-right flex-1 sm:flex-none">
            <div
              style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: '#00ff88'
              }}
            >
              2nd
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.5rem, 2vw, 0.62rem)',
                color: '#6b6b80',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Year CSE
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden lg:flex absolute bottom-8 left-16 items-center gap-4"
      >
        <div
          className="w-10"
          style={{
            height: '1px',
            background: '#00ff88',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
        <p
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.65rem',
            color: '#6b6b80',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          scroll to explore
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
