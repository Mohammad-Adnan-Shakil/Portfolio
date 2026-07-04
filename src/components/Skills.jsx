import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const { revealRef } = useScrollReveal();

  const skillGroups = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React + Redux — building state-heavy UI and dynamic dashboards', 'Tailwind CSS — rapid UI development with modern patterns', 'JavaScript ES6+ — modern frontend patterns', 'HTML / CSS']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Spring Boot — building secure, scalable REST APIs with authentication, RBAC, and caching', 'Java — type-safe backend development', 'Node.js + Express — API layer and middleware', 'JWT Auth — secure authentication systems']
    },
    {
      title: 'ML / Data',
      icon: '🤖',
      skills: ['Python — XGBoost, Random Forest, and inference pipelines', 'Scikit-learn — feature engineering and model training', 'Librosa — audio feature extraction']
    },
    {
      title: 'Infrastructure',
      icon: '☁️',
      skills: ['PostgreSQL — relational data with complex queries', 'Git / GitHub — version control and CI/CD', 'Vercel — deployment and edge caching', 'AWS Lambda / API Gateway / DynamoDB — serverless event-driven architecture', 'Maven', 'Postman']
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
              borderLeft: '2px solid rgba(0,255,136,0.2)',
              padding: '1.25rem',
            }}
          >
            <h3 className="font-mono text-[0.6rem] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
              <span className="text-base">{group.icon}</span>
              {group.title}
            </h3>

            <div className="space-y-2">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-start gap-2 transition-colors duration-200 cursor-default hover:text-primary"
                  style={{ color: '#6b6b80' }}
                >
                  <span className="mt-1.5 flex-shrink-0 text-[0.5rem] text-accent/20">
                    —
                  </span>
                  <span className="font-mono text-[clamp(0.68rem,2vw,0.78rem)] leading-relaxed">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
