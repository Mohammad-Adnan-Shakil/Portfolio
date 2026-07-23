import useScrollReveal from '../hooks/useScrollReveal';

const techTagColor = (tag) => {
  const lower = tag.toLowerCase();
  if (['python', 'google adk', 'langgraph', 'xgboost', 'random forest', 'librosa', 'scikit-learn'].some(t => lower.includes(t))) {
    return {
      color: '#a78bfa',
      border: 'rgba(139,92,246,0.25)',
      bg: 'rgba(139,92,246,0.06)',
      hoverBorder: 'rgba(139,92,246,0.5)',
      hoverBg: 'rgba(139,92,246,0.12)',
    };
  }
  if (['react', 'tailwind', 'tailwindcss', 'fastapi'].some(t => lower.includes(t))) {
    return {
      color: '#38bdf8',
      border: 'rgba(0,184,255,0.25)',
      bg: 'rgba(0,184,255,0.06)',
      hoverBorder: 'rgba(0,184,255,0.5)',
      hoverBg: 'rgba(0,184,255,0.12)',
    };
  }
  return {
    color: '#00c8ff',
    border: 'rgba(0,200,255,0.18)',
    bg: 'rgba(0,200,255,0.04)',
    hoverBorder: 'rgba(0,200,255,0.4)',
    hoverBg: 'rgba(0,200,255,0.08)',
  };
};

const categoryGradient = {
  backend: 'linear-gradient(135deg, rgba(0,255,136,0.12), rgba(0,184,255,0.08))',
  ml: 'linear-gradient(135deg, rgba(0,255,136,0.12), rgba(139,92,246,0.08))',
  infrastructure: 'linear-gradient(135deg, rgba(0,184,255,0.12), rgba(139,92,246,0.08))',
};

const categoryBorder = {
  backend: '1px solid rgba(0,255,136,0.06)',
  ml: '1px solid rgba(139,92,246,0.1)',
  infrastructure: '1px solid rgba(0,184,255,0.1)',
};

const Projects = () => {
  const { revealRef } = useScrollReveal();

  const techTags = [
    'Spring Boot', 'PostgreSQL', 'React', 'Tailwind',
    'XGBoost', 'Random Forest', 'Python', 'JWT'
  ];

  const secondaryProjects = [
    {
      number: '02 —',
      title: 'bengaluru-commute-agent',
      category: 'backend',
      badge: 'Google AI Agent Builder 2026 · Top 100',
      description: 'Multi-agent commute planning AI for Bengaluru. Strict separation of concerns: orchestrator routes between route_agent (data only) and advisor_agent (decisions only). Real road geometry via OpenRouteService, color-coded congestion map via React-Leaflet.',
      bullets: [
        'Shortlisted Top 100 at Google AI Agent Builder Series 2026 (HiDevs × Google for Developers)',
        "Grand Finale at Google's Bengaluru office, August 2026",
        'Deployed: Backend on Render, Frontend on Vercel'
      ],
      tags: ['Python', 'Google ADK', 'FastAPI', 'React'],
      github: 'https://github.com/Mohammad-Adnan-Shakil/bengaluru-commute-agent',
      live: 'https://bengaluru-commute-agent.vercel.app'
    },
    {
      number: '03 —',
      title: 'Cypher',
      category: 'backend',
      badge: 'Autonomous Agent · Live',
      description: 'Fully autonomous 5-agent job intelligence system. Finds opportunities, researches founders, drafts personalized outreach, tracks replies, and learns from feedback — zero manual intervention.',
      bullets: [
        '5 specialized agents (Opportunity Scout, Founder Researcher, Outreach Drafter, Tech Pulse, Reply Tracker) orchestrated via LangGraph',
        'Persistent memory feedback loop — learns from approve/skip patterns over time',
        'Batched LLM calls reduced Groq API usage ~15x after hitting production rate limits',
        'Gmail OAuth2 integration for reply detection and outreach delivery'
      ],
      tags: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'React'],
      github: 'https://github.com/Mohammad-Adnan-Shakil/Cypher',
      live: 'https://cypher-navy.vercel.app'
    },
    {
      number: '04 —',
      title: 'commute-memory-agent',
      category: 'infrastructure',
      badge: 'CockroachDB × AWS Hackathon · In Progress',
      description: 'Extends bengaluru-commute-agent with persistent agentic memory via CockroachDB Distributed Vector Indexing + MCP Server. Agent remembers past commutes, preferred routes, and outcome history to improve recommendations over time.',
      bullets: [],
      tags: ['Python', 'CockroachDB', 'AWS', 'LangGraph'],
      github: '',
      live: ''
    },
    {
      number: '05 —',
      title: 'FakeOut AI',
      category: 'ml',
      badge: '🏆 [Experiment]',
      description: 'Voice deepfake detection system using dual-model ML ensemble (XGBoost + Random Forest). Extracted 40 MFCC coefficients and spectral features from audio for classification. FastAPI backend serving ML inference with React frontend for audio upload/analysis.',
      bullets: ['Dual-model ensemble (XGBoost + Random Forest) for classification', '40 MFCC coefficients + spectral features from audio', 'FastAPI backend serving ML inference with React frontend'],
      tags: ['React', 'FastAPI', 'Python', 'XGBoost', 'Random Forest', 'Librosa', 'TailwindCSS'],
      github: 'https://github.com/FuncLexa/FakeOut-AI',
      isExperiment: true
    }
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">

      <div ref={revealRef(0)} className="mb-4">
        <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
          // 01 — Selected Work
        </p>
      </div>

      <div ref={revealRef(1)} className="mb-12">
        <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)]">
          Projects that <span className="text-accent">ship.</span>
        </h2>
      </div>

      {/* Featured Card - Deltabox */}
      <div ref={revealRef(2)} className="mb-12 sm:mb-16">
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            background: '#0c0d12',
            border: '1px solid rgba(0,255,136,0.08)',
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2rem',
            width: '100%'
          }}
        >
          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #07080a 0%, #0c0d12 100%)' }}
          />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.02) 1px, transparent 1px)',
              backgroundSize: '45px 45px',
            }}
          />

          {/* AI glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 65%)',
              filter: 'blur(30px)',
              animation: 'glow-pulse 4s ease-in-out infinite',
              zIndex: 2
            }}
          />

          {/* System status labels */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '6%', left: '3%', text: 'SYNC_ACTIVE', opacity: 0.08 },
              { top: '10%', right: '3%', text: 'MODEL_RUNNING', opacity: 0.06 },
              { bottom: '10%', left: '3%', text: 'PREDICTION_READY', opacity: 0.05 },
              { bottom: '6%', right: '3%', text: 'JWT_SECURED', opacity: 0.04 },
            ].map(({ text, opacity, ...pos }) => (
              <div
                key={text}
                className="absolute font-mono text-[0.42rem] uppercase tracking-[0.15em] font-medium"
                style={{ ...pos, color: `rgba(0,255,136,${opacity})` }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* LEFT COLUMN - Text content */}
          <div className="relative z-20 flex flex-col justify-center w-1/2 p-6 pl-6 sm:pl-8 lg:p-8">

            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full w-1.5 h-1.5 bg-accent animate-pulse" />
              <p className="font-mono text-[0.62rem] text-accent tracking-[0.18em] uppercase">
                Featured Project
              </p>
            </div>

            <h3
              className="font-heading font-extrabold mb-4 tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(2.45rem, 7vw, 3.64rem)' }}
            >
              Deltabox
            </h3>

            <div className="mb-4 font-body text-muted leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
              <p className="mb-3">AI-powered F1 analytics platform processing race data across 20+ drivers and 24 races per season.</p>
              <div style={{ paddingLeft: 'clamp(0.5rem, 2vw, 1rem)' }}>
                <div className="mb-2">• Spring Boot backend + Python ML integration via subprocess orchestration</div>
                <div className="mb-2">• What-if simulation engine + caching layer for performance optimization</div>
                <div>• JWT authentication + RBAC-secured APIs from scratch</div>
              </div>
            </div>

            <div className="mb-4 p-3" style={{ border: '1px solid rgba(0,255,136,0.12)', background: 'rgba(0,255,136,0.02)', borderRadius: '8px' }}>
              <div className="mb-2 font-mono text-[0.65rem] text-accent tracking-[0.15em] uppercase">
                Prediction Engine
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[0.72rem] text-muted leading-relaxed">
                <div>Top-3 Accuracy: <span className="text-primary">79.6%</span></div>
                <div>R²: <span className="text-primary">0.62</span></div>
                <div>Latency: <span className="text-primary">13.4ms</span></div>
                <div>Models: <span className="text-primary">XGBoost + RF (blended)</span></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {techTags.map((tag) => {
                const tc = techTagColor(tag);
                return (
                  <span
                    key={tag}
                    className="font-mono text-[0.62rem] border px-[0.65rem] py-[0.28rem] rounded-sm transition-all duration-200"
                    style={{
                      color: tc.color,
                      borderColor: tc.border,
                      background: tc.bg,
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="flex gap-8">
              <a
                href="https://github.com/Mohammad-Adnan-Shakil/deltabox"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-[0.72rem] text-accent uppercase tracking-[0.1em] transition-all duration-200"
              >
                GitHub <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
              </a>
              <a
                href="https://deltabox.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-[0.72rem] text-accent uppercase tracking-[0.1em] transition-all duration-200"
              >
                Live Demo <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Suzuka SVG + Architecture Diagram */}
          <div className="relative z-20 flex flex-col items-center justify-center w-1/2 overflow-visible gap-4 p-4">
            {/* Architecture pipeline diagram */}
            <svg
              viewBox="0 0 440 60"
              className="w-full max-w-md"
              style={{ overflow: 'visible' }}
              aria-label="Architecture pipeline: Spring Boot to Python ML subprocess"
              role="img"
            >
              <defs>
                <linearGradient id="archGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00b8ff" stopOpacity="0.3" />
                </linearGradient>
                <filter id="archGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Spring Boot */}
              <rect x="0" y="18" width="80" height="24" rx="4" fill="none" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.5" />
              <text x="40" y="33" textAnchor="middle" fill="#00ff88" fontSize="8" fontFamily="JetBrains Mono" opacity="0.8">Spring Boot</text>
              {/* Arrow */}
              <path d="M82 30 h18" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <polygon points="102,26 110,30 102,34" fill="#00ff88" fillOpacity="0.3" />
              {/* ProcessBuilder */}
              <rect x="112" y="14" width="88" height="32" rx="4" fill="none" stroke="#00b8ff" strokeWidth="1" strokeOpacity="0.5" />
              <text x="156" y="29" textAnchor="middle" fill="#00b8ff" fontSize="7" fontFamily="JetBrains Mono" opacity="0.8">ProcessBuilder</text>
              <text x="156" y="40" textAnchor="middle" fill="#00b8ff" fontSize="5" fontFamily="JetBrains Mono" opacity="0.5">JSON → STDIN</text>
              {/* Arrow */}
              <path d="M202 30 h18" stroke="#00b8ff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <polygon points="222,26 230,30 222,34" fill="#00b8ff" fillOpacity="0.3" />
              {/* Python ML */}
              <rect x="232" y="14" width="76" height="32" rx="4" fill="none" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5" />
              <text x="270" y="29" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="JetBrains Mono" opacity="0.8">Python ML</text>
              <text x="270" y="40" textAnchor="middle" fill="#a78bfa" fontSize="5" fontFamily="JetBrains Mono" opacity="0.5">STDOUT → JSON</text>
              {/* Arrow */}
              <path d="M310 30 h18" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <polygon points="330,26 338,30 330,34" fill="#a78bfa" fillOpacity="0.3" />
              {/* Response */}
              <rect x="340" y="18" width="60" height="24" rx="4" fill="none" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.5" />
              <text x="370" y="33" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily="JetBrains Mono" opacity="0.8">Response</text>
            </svg>

            {/* Suzuka track SVG — smaller inset */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              className="w-3/4 max-w-xs"
              style={{ overflow: 'visible' }}
              role="img"
              aria-label="Suzuka Circuit F1 track map with animated telemetry dot"
            >
              <defs>
                <filter id="glowS" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                id="suzuka-sm"
                d="M214.902 264.546c-4.263.328-5.803-.797-6.964-6.36-1.16-5.565-10.35-52.063-12.284-61.7-1.12-5.576-.962-14.257 1.644-19.872 2.999-6.458 5.822-12.607 7.255-15.698 1.836-3.975.773-6.955-2.322-8.247-2.978-1.244-5.03-.101-7.35 4.074-2.322 4.173-12.672 21.262-15.283 25.733-2.153 3.687-8.92 17.507-26.309 19.871-10.163 1.38-19.687 1.207-28.146-.199-7.964-1.324-15.005-3.757-20.119-6.358-17.369-8.84-26.889-12.917-38.592-41.034-6.216-14.93-8.706-20.865-9.866-24.045s-6.259-10.384-16.25-9.637c-5.32.397-8.334.725-13.348 1.987-9.865 2.484-14.279 11.485-11.026 20.368 3.675 10.035 7.145 12.684 21.666 23.845 27.276 20.965 40.187 27.009 54.455 33.086 18.664 7.949 100.496 37.755 115.585 42.823 8.293 2.785 13.156 3.078 23.89-1.69 14.312-6.358 24.468-14.207 34.047-24.242 9.108-9.546 20.215-18.976 30.565-27.522 3.32-2.742 4.453-1.049 5.706.199 3 2.98 3.77 3.676 5.32 4.967 1.752 1.463 2.812 1.8 4.836.1 2.128-1.789 6.544-5.557 7.643-6.258 8.992-5.762 12.435-7.209 19.143-5.619q2.56.607 5.23 1.446c13.93 4.372 17.894 8.247 32.694 25.634 8.66 10.175 94.452 116.714 100.98 124.992 7.834 9.934 7.94 13.91 6.482 23.744-1.546 10.433-6.74 21.182-17.704 19.971-8.994-.993-11.294-7.23-14.509-12.32-3.577-5.663-9.067-15.082-13.154-21.461-5.028-7.85-5.807-13.238-19.345-13.91-14.025-.695-19.964-2.105-23.407-17.685-.967-4.372-1.38-5.691-3.289-12.32-2.513-8.744-8.513-14.227-18.764-13.811-14.702.596-23.273-2.344-27.661-12.519-3.772-8.743-.236-15.137 1.933-20.765 1.837-4.77 6.382-16.195 2.71-23.35-3.676-7.153-7.966-9.22-12.866-11.524-5.707-2.683-17.812-8.054-30.855-6.757-14.994 1.49-27.083 9.837-35.207 20.17-6.979 8.877-17.12 21.656-19.442 24.839-2.321 3.181-3.96 3.926-6.287 4.173-6.577.693-23.699 2.285-31.435 2.881z"
                fill="none"
                stroke="#00ff88"
                strokeWidth="5"
                strokeLinejoin="round"
                style={{ filter: 'url(#glowS)', opacity: 0.6 }}
              />
              <circle r="5" fill="#00ff88" style={{ filter: 'url(#glowS)' }}>
                <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#suzuka-sm" />
                </animateMotion>
              </circle>
            </svg>
          </div>

        </div>
      </div>

      {/* Secondary Cards Grid */}
      <div ref={revealRef(3)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project, index) => {
          const grad = categoryGradient[project.category] || categoryGradient.backend;
          const bord = categoryBorder[project.category] || categoryBorder.backend;
          return (
            <div
              key={project.title}
              ref={revealRef(4 + index)}
              className="group/card relative overflow-hidden transition-all duration-300 rounded-xl"
              style={{
                background: '#0c0d12',
                border: bord,
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              }}
            >
              {/* Gradient header bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: grad }}
              />

              <div className="absolute bottom-0 left-0 h-px bg-accent transition-all duration-500 group-hover/card:w-full" style={{ width: '0%' }} />

              <p className="font-mono text-[0.62rem] text-muted tracking-[0.18em] mb-6">
                {project.number}
              </p>

              <p className="font-mono text-[0.58rem] text-accent mb-3">
                {project.badge}
              </p>

              <h3 className="font-heading font-bold mb-3 tracking-[-0.01em] leading-snug" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)' }}>
                {project.title}
              </h3>

              <div className="mb-6 font-body text-muted leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.85rem)' }}>
                <p className="mb-3">{project.description}</p>
                {project.bullets.length > 0 && (
                  <div style={{ paddingLeft: 'clamp(0.5rem, 2vw, 1rem)' }}>
                    {project.bullets.map((bullet, idx) => (
                      <div key={idx} className="mb-2">• {bullet}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => {
                  const tc = techTagColor(tag);
                  return (
                    <span
                      key={tag}
                      className="font-mono text-[0.62rem] border px-[0.65rem] py-[0.28rem] rounded-sm transition-all duration-200"
                      style={{
                        color: tc.color,
                        borderColor: tc.border,
                        background: tc.bg,
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-all duration-200"
                    style={{ color: project.isExperiment ? '#6b6b80' : '#00ff88' }}
                  >
                    GitHub <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group font-mono text-[0.72rem] text-accent uppercase tracking-[0.1em] transition-all duration-200"
                  >
                    Live Demo <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Projects;
