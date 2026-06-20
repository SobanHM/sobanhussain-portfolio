import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

function Footer() {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand" onClick={handleScrollToTop}>
          <span>Soban</span> Hussain
        </div>
        
        <p className="footer-copy">
          © {currentYear} {name}. All rights reserved.
        </p>

        <button onClick={handleScrollToTop} className="footer-top-btn" aria-label="Scroll to top of page">
          Back to Top
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
