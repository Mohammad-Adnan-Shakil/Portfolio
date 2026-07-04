import useScrollReveal from '../hooks/useScrollReveal';

const EngineeringThinking = () => {
  const { revealRef } = useScrollReveal();

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

      {/* Terminal window */}
      <div
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
          <div ref={revealRef(2)} className="flex gap-3">
            <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none">$</span>
            <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
              <strong className="text-primary">The problem:</strong> Running ML inference inside a Java Spring Boot service.
            </div>
          </div>

          <div ref={revealRef(3)} className="flex gap-3">
            <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none">$</span>
            <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
              <strong className="text-primary">The decision:</strong> Cross-language subprocess execution via ProcessBuilder — Java serializes request to JSON, writes to Python's STDIN, reads the prediction from STDOUT, and deserializes the response.
            </div>
          </div>

          <div ref={revealRef(4)} className="flex gap-3">
            <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none">$</span>
            <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
              <strong className="text-primary">Why not a REST microservice?</strong> Eliminated network latency and deployment complexity for a single-server setup. Traded horizontal scalability for simplicity and speed at this scale.
            </div>
          </div>

          <div ref={revealRef(5)} className="flex gap-3">
            <span className="font-mono text-[0.65rem] text-accent/60 mt-0.5 select-none">$</span>
            <div className="font-mono text-[clamp(0.75rem,2.5vw,0.83rem)] text-muted leading-relaxed">
              <strong className="text-primary">The result:</strong> Sub-200ms ML inference integrated directly into the API response cycle with no external service dependency.
            </div>
          </div>

          {/* Output block */}
          <div
            ref={revealRef(6)}
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
    </section>
  );
};

export default EngineeringThinking;
