import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Publications.css';

function Publications() {
  const { publications = [] } = portfolioData;

  return (
    <section id="publications" className="section publications-section">
      <div className="float-bg-1"></div>
      <h2 className="section-title">Publications</h2>
      <p className="section-subtitle">
        Research outputs from benchmarking, fine-tuning, and applied accessibility-focused AI.
      </p>

      <div className="publications-grid">
        {publications.map((pub, idx) => (
          <div key={idx} className="glass-card publication-card">
            <div className="publication-top">
              <span className={`publication-status ${pub.statusTone || 'tone-default'}`}>
                {pub.status}
              </span>
              {pub.relatedProject && (
                <span className="publication-related">
                  Related: <strong>{pub.relatedProject}</strong>
                </span>
              )}
            </div>

            <h3 className="publication-title">{pub.title}</h3>

            <div className="publication-meta">
              <div className="meta-row">
                <span className="meta-label">Venue</span>
                <span className="meta-value">{pub.conference}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Role</span>
                <span className="meta-value">{pub.role}</span>
              </div>
            </div>

            <div className="publication-divider" />

            <p className="publication-description">
              {pub.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;

