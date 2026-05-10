import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const { revealRef } = useScrollReveal();

  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React + Redux — building state-heavy UI and dynamic dashboards', 'Tailwind CSS — rapid UI development with modern patterns', 'JavaScript ES6+ — modern frontend patterns', 'HTML / CSS']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot — building secure, scalable REST APIs with authentication, RBAC, and caching', 'Java — type-safe backend development', 'Node.js + Express — API layer and middleware', 'JWT Auth — secure authentication systems']
    },
    {
      title: 'ML / Data',
      skills: ['Python — XGBoost, Random Forest, and inference pipelines', 'Scikit-learn — feature engineering and model training', 'Librosa — audio feature extraction', 'Linear Regression']
    },
    {
      title: 'Infrastructure',
      skills: ['PostgreSQL — relational data with complex queries', 'MongoDB — document storage with flexible schemas', 'Git / GitHub — version control and CI/CD', 'Vercel — deployment and edge caching', 'Maven', 'Postman']
    }
  ];

  return (
    <section 
      id="skills"
      className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16"
      style={{ 
        borderTop: '1px solid rgba(0,255,136,0.12)'
      }}
    >
      {/* Section Label */}
      <div ref={revealRef(0)} className="mb-4">
        <p
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.68rem',
            color: '#00ff88',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          // 02 — Technical Stack
        </p>
      </div>

      {/* Section Title */}
      <div ref={revealRef(1)} className="mb-8">
        <h2
          style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          What I <span style={{ color: '#00ff88' }}>build with.</span>
        </h2>
      </div>

      {/* Skills Grid - 1 column on mobile, 2 on sm, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title} ref={revealRef(2 + groupIndex)}>
            {/* Group Title */}
            <h3
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(0.55rem, 1.5vw, 0.62rem)',
                color: '#00ff88',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(0,255,136,0.12)',
                paddingBottom: '0.5rem sm:0.75rem'
              }}
            >
              {group.title}
            </h3>

            {/* Skills List */}
            <div>
              {group.skills.map((skill, skillIndex) => (
                <div
                  key={skill}
                  className="flex items-start gap-2 transition-colors duration-200 cursor-default"
                  style={{ padding: '0.35rem 0' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e8e8f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6b6b80';
                  }}
                >
                  <span
                    className="mt-1.5 flex-shrink-0"
                    style={{
                      color: 'rgba(0,255,136,0.15)',
                      fontSize: '0.5rem'
                    }}
                  >
                    —
                  </span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: 'clamp(0.68rem, 2vw, 0.78rem)',
                      color: '#6b6b80',
                      lineHeight: 1.5
                    }}
                  >
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
