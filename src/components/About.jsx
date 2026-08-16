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

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Text column */}
        <div className="max-w-none lg:max-w-[720px] flex-1">
          <p ref={revealRef(3)} className="mb-4 font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            I'm <span className="text-primary">Mohammad Adnan Shakil</span>, a second-year CS student at Presidency University, Bengaluru.
            I focus on building systems where backend logic drives real decisions, not just UI.
          </p>

          <p ref={revealRef(4)} className="mb-4 font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            DeltaBox demonstrates my approach: a full-stack F1 intelligence platform with a blended XGBoost + Random Forest ML engine (79.6% Top-3 accuracy, R² 0.62, 13.4ms blended inference), Java calling Python directly via ProcessBuilder subprocess for real-time predictions, and JWT + RBAC security built from scratch.
          </p>

          <p ref={revealRef(5)} className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
            Previously a Software Engineering Intern at Dyslexia Reading Tutor AI, where I designed and shipped a production serverless voice-AI pipeline on AWS (Lambda → ElevenLabs → DynamoDB → EventBridge → HubSpot), end-to-end verified within 3 weeks of joining. Also shipped Jurix (fine-tuned LLM on Indian legal corpus via QLoRA) and commute-memory-agent (CockroachDB × AWS Hackathon). Open to part-time backend or ML engineering roles at AI-first companies.
          </p>
        </div>

        {/* Mini card column */}
        <div ref={revealRef(6)} className="flex-shrink-0 lg:w-64">
          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: '#0c0d12',
              border: '1px solid rgba(0,255,136,0.08)',
            }}
          >
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
              Backend & ML Engineer
            </div>
            <div className="font-mono text-[0.6rem] text-muted">
              Ex-Intern · Dyslexia Reading Tutor AI
            </div>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,255,136,0.08)' }}>
              <div className="font-mono text-[0.55rem] text-accent uppercase tracking-[0.1em]">
                Open to Part-Time Roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;