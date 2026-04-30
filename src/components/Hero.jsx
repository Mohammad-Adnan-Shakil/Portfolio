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
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ 
        minHeight: '100vh',
        padding: '0 4rem'
      }}
      id="hero"
    >
      {/* Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)'
        }}
      />

      {/* Floating Particles */}
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

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
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

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1
            style={{
              fontFamily: 'Syne',
              fontWeight: 800,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em'
            }}
          >
            <div>ML</div>
            <div
              style={{
                WebkitTextStroke: '1.5px rgba(0,255,136,0.5)',
                color: 'transparent'
              }}
            >
              Engineer
            </div>
            <div>& Dev.</div>
          </h1>
        </motion.div>

        {/* Primary Line */}
        <motion.div variants={itemVariants} className="mb-6">
          <p
            style={{
              fontFamily: 'Syne',
              fontWeight: 600,
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#e8e8f0',
              maxWidth: '640px',
              lineHeight: 1.55
            }}
          >
            Full-stack engineer building production systems that integrate ML models into real applications.
            Working with Spring Boot, React, and Python to ship systems that make decisions — not just display data.
          </p>
        </motion.div>

        {/* Sub Line */}
        <motion.div variants={itemVariants} className="mb-8">
          <p
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.82rem',
              color: '#6b6b80',
              maxWidth: '560px',
              lineHeight: 1.8
            }}
          >
            Currently building Deltabox: Java backend calling Python ML models via subprocess for real-time race predictions with JWT + RBAC security.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: '#00ff88',
              color: '#000',
              fontFamily: 'JetBrains Mono',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '0.9rem 2.2rem',
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
            className="transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,255,136,0.2)',
              color: '#00ff88',
              fontFamily: 'JetBrains Mono',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '0.9rem 2.2rem',
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
      </motion.div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-16 flex items-center gap-4"
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

      {/* Stats - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute flex flex-col gap-6 text-right"
        style={{
          bottom: '3rem',
          right: '4rem',
          zIndex: 2,
          top: 'auto'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'Syne',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#00ff88'
            }}
          >
            3+
          </div>
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.62rem',
              color: '#6b6b80',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Production Projects
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: 'Syne',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#00ff88'
            }}
          >
            5+
          </div>
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.62rem',
              color: '#6b6b80',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Technologies
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: 'Syne',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#00ff88'
            }}
          >
            2nd
          </div>
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.62rem',
              color: '#6b6b80',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Year CSE
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
