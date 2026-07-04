import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { revealRef } = useScrollReveal();

  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ borderTop: '1px solid rgba(0,255,136,0.12)' }}
    >
      <div ref={revealRef(0)} className="mb-4">
        <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
          // 03 — About
        </p>
      </div>

      <div ref={revealRef(1)} className="mb-6">
        <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,3rem)]">
          The person behind <span className="text-accent">the code.</span>
        </h2>
      </div>

      <div ref={revealRef(2)} className="mb-6">
        <div className="w-[60px] h-px bg-accent opacity-40" />
      </div>

      {/* Two-column layout on desktop */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Text column - 2/3 */}
        <div className="max-w-none lg:max-w-[720px] flex-1">
          <p ref={revealRef(3)} className="mb-4 font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            I'm <span className="text-primary">Mohammad Adnan Shakil</span>, a second-year CS student at Presidency University, Bengaluru.
            I focus on building systems where backend logic drives real decisions, not just UI.
          </p>

          <p ref={revealRef(4)} className="mb-4 font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            DeltaBox demonstrates my approach: a full-stack F1 intelligence platform with a blended XGBoost + Random Forest ML engine (79.6% Top-3 accuracy, R² 0.62), Java calling Python directly via subprocess for real-time predictions, and JWT + RBAC security built from scratch.
          </p>

          <p ref={revealRef(5)} className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            I work fast, ship aggressively, and care about clean architecture. Discipline in code, gym, and execution.
            Currently a Software Engineering Intern at Dyslexia Reading Tutor AI, building production AWS voice-AI infrastructure.
          </p>
        </div>

        {/* Avatar / mini-card column - 1/3 */}
        <div ref={revealRef(6)} className="flex-shrink-0 lg:w-64">
          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: '#0c0d12',
              border: '1px solid rgba(0,255,136,0.08)',
            }}
          >
            {/* Initials avatar */}
            <div
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold font-heading"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,255,0.1))',
                border: '1px solid rgba(0,255,136,0.2)',
                color: '#00ff88',
              }}
            >
              M
            </div>
            <div className="font-mono text-[0.65rem] text-accent uppercase tracking-[0.1em] mb-1">
              Software Engineering Intern
            </div>
            <div className="font-mono text-[0.6rem] text-muted">
              Dyslexia Reading Tutor AI
            </div>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,255,136,0.08)' }}>
              <div className="font-mono text-[0.55rem] text-muted uppercase tracking-[0.1em]">
                Available June 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
