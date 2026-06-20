import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="float-bg-1"></div>
      <h2 className="section-title">Featured Work</h2>
      
      {/* Category Filters */}
      <div className="projects-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
          onClick={() => setFilter('ai')}
        >
          AI/ML & NLP Research
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web & Software Systems
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => {
          // Identify special awards/publications
          const isiCOMET = project.title.includes("SceneNarrator");
          const isSIBAFest = project.title.includes("College Management");
          const isTechFest = project.title.includes("Anemia");
          const isBankExpo = project.title.includes("Bank Management");

          return (
            <div key={idx} className="glass-card project-card">
              <div className="project-card-header">
                <span className="project-type">{project.type}</span>

                {/* Special glowing badges */}
                {isiCOMET && (
                  <span className="award-badge i-comet-badge">
                    <span className="sparkle">★</span> Accepted iCOMET 2026
                  </span>
                )}
                {isSIBAFest && (
                  <span className="award-badge siba-fest-badge">
                    <span className="sparkle">🏆</span> 1st Prize SIBA Fest
                  </span>
                )}
                {isTechFest && (
                  <span className="award-badge tech-fest-badge">
                    <span className="sparkle">✦</span> Tech Fest 2025
                  </span>
                )}
                {isBankExpo && (
                  <span className="award-badge bank-expo-badge">
                    <span className="sparkle">⭐</span> Rank 5 Grand Tech
                  </span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-highlights-box">
                <ul className="project-highlights">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                </ul>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="https://github.com/sobanhussain" target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </section>
  );
}

export default Projects;
