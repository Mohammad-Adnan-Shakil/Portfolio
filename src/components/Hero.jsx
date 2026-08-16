import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(typeof end === 'number' ? 0 : end);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    if (typeof end !== 'number') return;
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

const StatItem = ({ end, label, suffix = '' }) => {
  const { count, ref } = useCountUp(end);
  const display = typeof end === 'number' ? `${count}${suffix}` : end;
  return (
    <div ref={ref} className="text-left sm:text-right flex-1 sm:flex-none">
      <div className="font-heading font-extrabold text-accent" style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)' }}>
        {display}
      </div>
      <div className="font-mono text-muted uppercase tracking-[0.08em]" style={{ fontSize: 'clamp(0.5rem, 2vw, 0.62rem)' }}>
        {label}
      </div>
    </div>
  );
};

const TypewriterText = () => {
  const lines = [
    'Built DeltaBox — AI F1 platform with 79.6% Top-3 accuracy',
    'Shipped Jurix — fine-tuned LLM on Indian legal corpus via QLoRA',
    'Built production serverless voice-AI pipeline on AWS',
    'Shipped Cypher — autonomous 5-agent job intelligence system',
  ];
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), 30);
    } else if (!isDeleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), 15);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((i) => (i + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <p className="font-mono text-accent/80" style={{ fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', minHeight: '1.4em' }}>
      <span className="text-accent">&gt; </span>
      {lines[lineIndex].substring(0, charIndex)}
      <span className="animate-pulse">▊</span>
    </p>
  );
};

const CanvasParticles = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random() * 1.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,136,0.4)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${0.08 * (1 - dist / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
      aria-hidden="true"
    />
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
      <CanvasParticles />

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

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 80vw, 700px)',
          height: 'clamp(300px, 80vw, 700px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <p className="font-mono text-accent tracking-[0.2em]" style={{ fontSize: 'clamp(0.72rem, 2vw, 0.78rem)' }}>
            <span className="text-muted">&gt; </span>
            Mohammad Adnan Shakil · Backend & ML Systems · Bengaluru
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="flex-1">
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

            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <p
                className="text-center sm:text-left mx-auto sm:mx-0 font-mono text-secondary leading-relaxed"
                style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.82rem)', maxWidth: 'min(85vw, 32rem)' }}
              >
                Previously: Software Engineering Intern at Dyslexia Reading Tutor AI — designed and shipped a production serverless voice-AI pipeline on AWS end-to-end. Currently building Jurix (fine-tuned LLM on Indian legal corpus via QLoRA) and a Road Damage Detection system for Indian roads.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <TypewriterText />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row sm:flex-col gap-6 sm:gap-5 mt-2 sm:mt-6 self-start"
          >
            <StatItem end={7} label="Projects" />
            <StatItem end={8} label="Tech Stack" />
            <StatItem end={2} label="Year CSE" suffix="nd" />
          </motion.div>
        </div>

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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden lg:flex absolute bottom-8 left-16 items-center gap-4"
      >
        <div className="w-10 h-px bg-accent/60" />
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          className="animate-chevron-bounce"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
        <p className="font-mono text-[0.65rem] text-muted tracking-[0.15em] uppercase">
          scroll to explore
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;