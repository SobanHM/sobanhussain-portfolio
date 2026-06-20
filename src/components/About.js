import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

function About() {
  const { education, coreStrengths } = portfolioData;

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me & Education</h2>
      
      <div className="about-grid">
        {/* Left column: Education Card */}
        <div className="education-column">
          <div className="glass-card education-card">
            <div className="card-header-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </div>
            <h3 className="education-title">{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            <div className="education-meta">
              <span className="badge badge-active">{education.duration}</span>
              <span className="badge badge-active">CGPA: {education.cgpa}</span>
              <span className="education-loc">{education.location}</span>
            </div>
            <ul className="education-details">
              {education.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Core Strengths */}
        <div className="strengths-column">
          <h3 className="sub-title">Core Competencies</h3>
          <div className="strengths-grid">
            {coreStrengths.map((strength, idx) => (
              <div key={idx} className="glass-card strength-card">
                <div className="strength-number">0{idx + 1}</div>
                <h4 className="strength-title">{strength.title}</h4>
                <p className="strength-desc">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
