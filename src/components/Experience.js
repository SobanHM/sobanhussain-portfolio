import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="float-bg-2"></div>
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline-container">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Timeline node marker */}
            <div className="timeline-dot">
              <span className="dot-pulse"></span>
            </div>
            
            {/* Timeline Content */}
            <div className="glass-card timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                </div>
                <div className="timeline-meta">
                  <span className="badge badge-active">{exp.duration}</span>
                  <span className="timeline-loc">{exp.location}</span>
                </div>
              </div>
              
              <ul className="timeline-highlights">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="timeline-bullet">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
