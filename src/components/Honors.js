import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Honors.css';

function Honors() {
  const { honors, certifications, leadership, credlyLink } = portfolioData;
  const [activeSubTab, setActiveSubTab] = useState('achievements');

  return (
    <section id="honors" className="section honors-section">
      <div className="float-bg-1"></div>
      <h2 className="section-title">Achievements & Leadership</h2>
      
      {/* Sub Tabs */}
      <div className="honors-tabs">
        <button 
          className={`honors-tab-btn ${activeSubTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('achievements')}
        >
          Awards & Activities
        </button>
        <button 
          className={`honors-tab-btn ${activeSubTab === 'leadership' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('leadership')}
        >
          Leadership
        </button>
        <button 
          className={`honors-tab-btn ${activeSubTab === 'certifications' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('certifications')}
        >
          Certifications
        </button>
      </div>

      {/* Content Panels */}
      <div className="honors-content">
        {activeSubTab === 'achievements' && (
          <div className="achievements-panel grid-view">
            {honors.map((item, idx) => (
              <div key={idx} className="glass-card honor-card">
                <div className="honor-icon-wrapper">
                  {idx === 0 || idx === 2 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  )}
                </div>
                <h3 className="honor-card-title">{item.title}</h3>
                <p className="honor-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'leadership' && (
          <div className="leadership-panel list-view">
            {leadership.map((role, idx) => (
              <div key={idx} className="glass-card leadership-card">
                <div className="leadership-header">
                  <div>
                    <h3 className="leadership-role">{role.role}</h3>
                    <h4 className="leadership-org">{role.organization}</h4>
                  </div>
                  <span className="badge badge-active">{role.duration}</span>
                </div>
                <p className="leadership-desc">{role.details}</p>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'certifications' && (
          <div className="certifications-panel list-view">
            <div className="glass-card cert-card-wrapper">
              <div className="credly-badge-cta" style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Google Career Certificates</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Verified professional credentials and badges on Credly.</p>
                </div>
                <a 
                  href={credlyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Verify Badges on Credly
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              
              <ul className="certifications-list">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="cert-item">
                    <div className="cert-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="cert-text">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Honors;
