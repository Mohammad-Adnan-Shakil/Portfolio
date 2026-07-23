import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const TypewriterLine = ({ text, delay, onComplete }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.substring(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, 15);
    return () => clearInterval(interval);
  }, [text, delay, onComplete]);

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse text-accent">▊</span>}
    </span>
  );
};

const ArchitectureDiagram = () => (
  <svg
    viewBox="0 0 720 160"
    className="w-full max-w-3xl"
    style={{ overflow: 'visible' }}
    aria-label="Architecture diagram: Spring Boot to Python ML subprocess pipeline"
    role="img"
  >
    <defs>
      <linearGradient id="gSpring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00ff88" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="gPB" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00b8ff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00b8ff" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="gPy" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="gResp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00ff88" stopOpacity="0.05" />
      </linearGradient>
      <filter id="archGlow2">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background */}
    <rect x="0" y="0" width="720" height="160" rx="12" fill="#050608" stroke="rgba(0,255,136,0.08)" strokeWidth="1" />

    {/* Spring Boot card */}
    <rect x="30" y="35" width="110" height="90" rx="8" fill="url(#gSpring)" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.4" />
    <text x="85" y="65" textAnchor="middle" fill="#00ff88" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Spring Boot</text>
    <text x="85" y="82" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">Controller</text>
    <text x="85" y="97" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">JWT + RBAC</text>
    <text x="85" y="112" textAnchor="middle" fill="#00ff88" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">/api/predict</text>

    {/* Arrow 1 */}
    <line x1="140" y1="80" x2="195" y2="80" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
    <polygon points="195,76 205,80 195,84" fill="#00ff88" fillOpacity="0.4" />
    <text x="167" y="72" textAnchor="middle" fill="#00ff88" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">JSON</text>

    {/* ProcessBuilder card */}
    <rect x="210" y="35" width="120" height="90" rx="8" fill="url(#gPB)" stroke="#00b8ff" strokeWidth="1" strokeOpacity="0.4" />
    <text x="270" y="65" textAnchor="middle" fill="#00b8ff" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">ProcessBuilder</text>
    <text x="270" y="82" textAnchor="middle" fill="#00b8ff" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">subprocess.exec()</text>
    <text x="270" y="97" textAnchor="middle" fill="#00b8ff" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">STDIN → STDOUT</text>
    <text x="270" y="112" textAnchor="middle" fill="#00b8ff" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">~200ms round-trip</text>

    {/* Arrow 2 */}
    <line x1="330" y1="80" x2="385" y2="80" stroke="#00b8ff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
    <polygon points="385,76 395,80 385,84" fill="#00b8ff" fillOpacity="0.4" />
    <text x="362" y="72" textAnchor="middle" fill="#00b8ff" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">pipe</text>

    {/* Python ML card */}
    <rect x="400" y="35" width="120" height="90" rx="8" fill="url(#gPy)" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.4" />
    <text x="460" y="65" textAnchor="middle" fill="#a78bfa" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Python ML</text>
    <text x="460" y="82" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">Feature Extract</text>
    <text x="460" y="97" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">XGBoost + RF</text>
    <text x="460" y="112" textAnchor="middle" fill="#a78bfa" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">79.6% Top-3</text>

    {/* Arrow 3 */}
    <line x1="520" y1="80" x2="575" y2="80" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
    <polygon points="575,76 585,80 575,84" fill="#a78bfa" fillOpacity="0.4" />
    <text x="552" y="72" textAnchor="middle" fill="#a78bfa" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">JSON</text>

    {/* Response card */}
    <rect x="590" y="35" width="100" height="90" rx="8" fill="url(#gResp)" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.4" />
    <text x="640" y="65" textAnchor="middle" fill="#00ff88" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Response</text>
    <text x="640" y="82" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">Prediction</text>
    <text x="640" y="97" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily="JetBrains Mono" opacity="0.6">Confidence</text>
    <text x="640" y="112" textAnchor="middle" fill="#00ff88" fontSize="6" fontFamily="JetBrains Mono" opacity="0.4">&lt; 200ms</text>

    {/* Labels */}
    <text x="360" y="150" textAnchor="middle" fill="#5a5a70" fontSize="7" fontFamily="JetBrains Mono">Java ↔ Python Subprocess Pipeline — Single-server ML inference architecture</text>
  </svg>
);

const EngineeringThinking = () => {
  const { revealRef } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('architecture');
  const [startTypewriter, setStartTypewriter] = useState(false);

  return (
    <section
      id="process"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ borderTop: '1px solid rgba(0,255,136,0.12)' }}
    >
      <div ref={revealRef(0)} className="mb-4">
        <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
          // 04 — ENGINEERING THINKING
        </p>
      </div>

      <div ref={revealRef(1)} className="mb-4 sm:mb-6">
        <h2 className="font-heading font-extrabold text-[clamp(1.6rem,5vw,3.5rem)]">
          How I <span className="text-accent">Build Systems.</span>
        </h2>
      </div>

      {/* Tab toggle */}
      <div ref={revealRef(2)} className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('architecture')}
          className="font-mono text-[0.65rem] uppercase tracking-[0.1em] px-4 py-2 rounded-md transition-all duration-200"
          style={{
            background: activeTab === 'architecture' ? 'rgba(0,255,136,0.1)' : 'transparent',
            border: `1px solid ${activeTab === 'architecture' ? 'rgba(0,255,136,0.3)' : 'rgba(0,255,136,0.08)'}`,
            color: activeTab === 'architecture' ? '#00ff88' : '#5a5a70',
          }}
        >
          Architecture View
        </button>
        <button
          onClick={() => {
            setActiveTab('terminal');
            setStartTypewriter(true);
          }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.1em] px-4 py-2 rounded-md transition-all duration-200"
          style={{
            background: activeTab === 'terminal' ? 'rgba(0,255,136,0.1)' : 'transparent',
            border: `1px solid ${activeTab === 'terminal' ? 'rgba(0,255,136,0.3)' : 'rgba(0,255,136,0.08)'}`,
            color: activeTab === 'terminal' ? '#00ff88' : '#5a5a70',
          }}
        >
          Technical Log
        </button>
      </div>

      {/* Architecture View */}
      {activeTab === 'architecture' && (
        <div ref={revealRef(3)} className="overflow-x-auto pb-4">
          <ArchitectureDiagram />
        </div>
      )}

      {/* Terminal View */}
      {activeTab === 'terminal' && (
        <div
          ref={revealRef(3)}
          className="rounded-xl overflow-hidden border"
          style={{
            background: '#050608',
            borderColor: 'rgba(0,255,136,0.1)',
            maxWidth: '800px',
          }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{
              background: '#0a0b10',
              borderBottom: '1px solid rgba(0,255,136,0.08)',
            }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
            <span className="ml-3 font-mono text-[0.6rem] text-muted tracking-[0.05em]">
              architecture-decision.log — bash
            </span>
          </div>

          {/* Terminal content */}
          <div className="px-5 py-5 sm:px-6 sm:py-6 space-y-4">
            <div className="flex gap-3">
              <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none shrink-0">$</span>
              <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
                {startTypewriter ? (
                  <TypewriterLine text="The problem: Running ML inference inside a Java Spring Boot service." delay={0} />
                ) : (
                  <><strong className="text-primary">The problem:</strong> Running ML inference inside a Java Spring Boot service.</>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none shrink-0">$</span>
              <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
                {startTypewriter ? (
                  <TypewriterLine text="The decision: Cross-language subprocess execution via ProcessBuilder — Java serializes request to JSON, writes to Python's STDIN, reads the prediction from STDOUT, and deserializes the response." delay={0} />
                ) : (
                  <><strong className="text-primary">The decision:</strong> Cross-language subprocess execution via ProcessBuilder — Java serializes request to JSON, writes to Python's STDIN, reads the prediction from STDOUT, and deserializes the response.</>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none shrink-0">$</span>
              <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
                {startTypewriter ? (
                  <TypewriterLine text="Why not a REST microservice? Eliminated network latency and deployment complexity for a single-server setup. Traded horizontal scalability for simplicity and speed at this scale." delay={0} />
                ) : (
                  <><strong className="text-primary">Why not a REST microservice?</strong> Eliminated network latency and deployment complexity for a single-server setup. Traded horizontal scalability for simplicity and speed at this scale.</>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none shrink-0">$</span>
              <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
                {startTypewriter ? (
                  <TypewriterLine text="The result: Sub-200ms ML inference integrated directly into the API response cycle with no external service dependency." delay={0} />
                ) : (
                  <><strong className="text-primary">The result:</strong> Sub-200ms ML inference integrated directly into the API response cycle with no external service dependency.</>
                )}
              </div>
            </div>

            {/* Output block */}
            <div
              className="mt-4 p-3 sm:p-4 rounded-lg font-mono text-[clamp(0.7rem,2vw,0.8rem)] text-muted leading-relaxed"
              style={{
                border: '1px solid rgba(0,255,136,0.1)',
                background: 'rgba(0,255,136,0.02)',
              }}
            >
              <span className="text-accent">&gt; </span><strong className="text-accent">Goal:</strong> Every architectural decision has a reason. Build systems that are secure, performant, and maintainable.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EngineeringThinking;
