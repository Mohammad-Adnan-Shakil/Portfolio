import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const { revealRef } = useScrollReveal();

  const skillGroups = [
    {
      title: 'Frontend',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,184,255,0.15))',
      borderColor: 'rgba(0,255,136,0.3)',
      skills: ['React + Redux', 'Tailwind CSS', 'JavaScript ES6+', 'HTML / CSS']
    },
    {
      title: 'Backend',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b8ff" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, rgba(0,184,255,0.2), rgba(0,255,136,0.15))',
      borderColor: 'rgba(0,184,255,0.3)',
      skills: ['Spring Boot', 'Java', 'Node.js + Express', 'JWT Auth']
    },
    {
      title: 'ML / Data',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(0,255,136,0.15))',
      borderColor: 'rgba(139,92,246,0.3)',
      skills: ['Python (XGBoost, RF)', 'Scikit-learn', 'Librosa']
    },
    {
      title: 'Infrastructure',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b8ff" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, rgba(0,184,255,0.2), rgba(139,92,246,0.15))',
      borderColor: 'rgba(0,184,255,0.3)',
      skills: ['PostgreSQL', 'Git / GitHub CI', 'Vercel', 'AWS Lambda / DynamoDB', 'Maven', 'Postman']
    }
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ borderTop: '1px solid rgba(0,255,136,0.12)' }}
    >
      <div ref={revealRef(0)} className="mb-4">
        <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
          // 02 — Technical Stack
        </p>
      </div>

      <div ref={revealRef(1)} className="mb-8">
        <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)]">
          What I <span className="text-accent">build with.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            ref={revealRef(2 + groupIndex)}
            className="rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#0c0d12',
              border: '1px solid rgba(0,255,136,0.06)',
              borderLeft: '2px solid',
              borderLeftColor: group.borderColor,
              padding: '1.25rem',
            }}
          >
            <h3 className="font-mono text-[0.6rem] tracking-[0.15em] uppercase mb-4 flex items-center gap-2"
              style={{ color: group.borderColor }}
            >
              <span className="flex-shrink-0">{group.icon}</span>
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[0.65rem] px-2 py-1 rounded-sm transition-all duration-200 cursor-default hover:opacity-100"
                  style={{
                    color: '#9494a8',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.03)',
                    opacity: 0.85,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
