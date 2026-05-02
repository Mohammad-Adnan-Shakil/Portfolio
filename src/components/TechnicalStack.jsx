import { useState, useEffect, useRef } from 'react';

const TechnicalStack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 lg:py-32"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p 
            className="text-green-400 font-mono text-sm tracking-wider mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            // 02 — TECHNICAL STACK
          </p>
          <h2 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            What I build with.
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FRONTEND Column */}
          <div>
            <h3 
              className="text-green-400 font-mono text-lg font-bold mb-8"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              FRONTEND
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  React + Redux
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  building state-heavy UI and dynamic dashboards
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Tailwind CSS
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  rapid UI development with modern patterns
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  JavaScript ES6+
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  modern frontend patterns
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  HTML / CSS
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  semantic markup and styling
                </p>
              </div>
            </div>
          </div>

          {/* BACKEND Column */}
          <div>
            <h3 
              className="text-green-400 font-mono text-lg font-bold mb-8"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              BACKEND
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Spring Boot
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  building secure, scalable REST APIs with authentication, RBAC, and caching
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Java
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  type-safe backend development
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Node.js + Express
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  API layer and middleware
                </p>
              </div>

              <div>
                <h4 
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  JWT Auth
                </h4>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  secure authentication systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ML / DATA Section */}
        <div className="mt-16 lg:mt-20">
          <h3 
            className="text-green-400 font-mono text-lg font-bold mb-8"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            ML / DATA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Python
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                XGBoost, Random Forest, and inference pipelines
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Scikit-learn
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                feature engineering and model training
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Librosa
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                audio feature extraction
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Linear Regression
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                statistical modeling and predictions
              </p>
            </div>
          </div>
        </div>

        {/* INFRASTRUCTURE Section */}
        <div className="mt-16 lg:mt-20">
          <h3 
            className="text-green-400 font-mono text-lg font-bold mb-8"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            INFRASTRUCTURE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                PostgreSQL
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                relational data with complex queries
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                MongoDB
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                document storage with flexible schemas
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Git / GitHub
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                version control and CI/CD
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Vercel
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                deployment and edge caching
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Maven
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Java project management
              </p>
            </div>

            <div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Postman
              </h4>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                API testing and documentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStack;
