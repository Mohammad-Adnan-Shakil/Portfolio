import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const StatItem = ({ end, label }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center sm:text-right flex-1 sm:flex-none">
      <div className="font-heading font-extrabold text-accent" style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)' }}>
        {count}{typeof end === 'string' && isNaN(end) ? end : ''}
      </div>
      <div className="font-mono text-muted uppercase tracking-[0.08em]" style={{ fontSize: 'clamp(0.5rem, 2vw, 0.62rem)' }}>
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 3,
    size: 1 + Math.random() * 2,
    opacity: 0.15 + Math.random() * 0.2,
    driftX: (Math.random() - 0.5) * 30,
    driftY: (Math.random() - 0.5) * 30,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '2rem',
        paddingLeft: 'clamp(1rem, 4vw, 4rem)',
        paddingRight: 'clamp(1rem, 4vw, 4rem)',
      }}
      id="hero"
    >
      {/* Spotlight glow following mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 60%)',
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.8s ease-out, top 0.8s ease-out',
          willChange: 'left, top',
        }}
      />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 80vw, 700px)',
          height: 'clamp(300px, 80vw, 700px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Animated particles */}
      <div className="hidden sm:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute pointer-events-none rounded-full bg-accent"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
            animate={{
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <p className="font-mono text-accent tracking-[0.2em]" style={{ fontSize: 'clamp(0.72rem, 2vw, 0.78rem)' }}>
            <span className="text-muted">&gt; </span>
            Mohammad Adnan Shakil · Full-Stack + ML Systems · Bengaluru
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5 sm:mb-8">
          <h1
            className="text-center sm:text-left font-heading font-extrabold leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.2rem, 10vw, 8rem)' }}
          >
            <div>ML</div>
            <div
              style={{
                WebkitTextStroke: '1.5px rgba(0,255,136,0.5)',
                color: 'transparent',
              }}
            >
              Engineer
            </div>
            <div>& Dev.</div>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <p
            className="text-center sm:text-left mx-auto sm:mx-0 font-heading font-semibold text-primary leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1.15rem)', maxWidth: 'min(90vw, 36rem)' }}
          >
            Full-stack engineer building production systems that integrate ML models into real applications.
            Working with Spring Boot, React, and Python to ship systems that make decisions — not just display data.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <p
            className="text-center sm:text-left mx-auto sm:mx-0 font-mono text-secondary leading-relaxed"
            style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.82rem)', maxWidth: 'min(85vw, 32rem)' }}
          >
            Software Engineering Intern building production serverless AI infrastructure at Dyslexia Reading Tutor AI. DeltaBox, my flagship project, is deployed and live — an F1 intelligence platform with a 79.6% Top-3 finish prediction accuracy ML engine.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10 items-stretch sm:items-start w-full sm:w-auto"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="group cursor-pointer transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center font-mono font-bold uppercase tracking-[0.1em]"
            style={{
              background: '#00ff88',
              color: '#000',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.78rem)',
              padding: 'clamp(0.75rem, 3vw, 0.9rem) clamp(1.5rem, 5vw, 2.2rem)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              boxShadow: '0 0 20px rgba(0,255,136,0.15)',
            }}
          >
            <span className="group-hover:brightness-0 transition-all duration-200">View Systems ↓</span>
          </Link>
          <a
            href="https://github.com/Mohammad-Adnan-Shakil"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center font-mono font-bold uppercase tracking-[0.1em]"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,255,136,0.2)',
              color: '#00ff88',
              fontSize: 'clamp(0.7rem, 2.5vw, 0.78rem)',
              padding: 'clamp(0.75rem, 3vw, 0.9rem) clamp(1.5rem, 5vw, 2.2rem)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            }}
          >
            <span className="group-hover:brightness-110 transition-all duration-200">GitHub ↗</span>
          </a>
        </motion.div>

        <div
          className="flex flex-col sm:flex-row justify-between sm:justify-start gap-4 sm:gap-6 sm:absolute sm:text-right mt-6 sm:mt-0 w-full sm:w-auto"
          style={{
            bottom: 'clamp(0.5rem, 4vh, 3rem)',
            right: 'clamp(0.5rem, 4vw, 4rem)',
            zIndex: 2,
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          }}
        >
          <StatItem end={2} label="Projects" />
          <StatItem end={5} label="Tech Stack" />
          <StatItem end="2nd" label="Year CSE" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden lg:flex absolute bottom-8 left-16 items-center gap-4"
      >
        <div className="w-10 h-px bg-accent animate-pulse" />
        <p className="font-mono text-[0.65rem] text-muted tracking-[0.15em] uppercase">
          scroll to explore
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
