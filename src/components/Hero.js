import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

function Hero() {
  const { name, titles, summary, github, linkedin, slogan } = portfolioData.personalInfo;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeTitle = titles[currentTitleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(activeTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
        
        if (displayedText === activeTitle) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(activeTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
        
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="float-bg-1"></div>
      <div className="float-bg-2"></div>
      
      <div className="hero-container">
        {/* Left Column: Slogan, Name, Prioritized Titles, Trust Bar */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Open to AI/ML, Research & Applied AI Roles
          </div>
          
          <h1 className="hero-name">
            Hi, I'm <span>{name}</span>
          </h1>
          
          <h2 className="hero-title">
            <span className="txt-rotate">
              <span className="wrap">{displayedText}</span>
            </span>
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-slogan">
            {slogan}
          </p>
          
          <p className="hero-summary">
            {summary}
          </p>

          {/* Sourcing Trust Bar - Quick Validation for Evaluators (HCI principle) */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-icon">📝</span>
              <div className="trust-text">
                <strong>iCOMET 2026</strong>
                <span>Accepted Presenter</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🏆</span>
              <div className="trust-text">
                <strong>1st Prize SIBA Fest</strong>
                <span>Software Winner</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🤖</span>
              <div className="trust-text">
                <strong>VLM & GenAI</strong>
                <span>Benchmarking & Fine-Tuning</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button onClick={() => handleScrollToSection('projects')} className="btn btn-primary">
              Explore Featured Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button onClick={() => handleScrollToSection('contact')} className="btn btn-secondary">
              Recruiter Quick Contact
            </button>
          </div>
        </div>
        
        {/* Right Column: Profile Image (Neon Box Frame) & Recruiter Spotlights */}
        <div className="hero-profile-side">
          <div className="hero-profile-container">
            {/* Animated corner accents for neon box effect */}
            <span className="profile-corner tl"></span>
            <span className="profile-corner tr"></span>
            <span className="profile-corner bl"></span>
            <span className="profile-corner br"></span>

            <div className="profile-image-frame">
              <img 
                src="/soban_image_for_profile.jfif" 
                alt="Soban Hussain Profile" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('profile-fallback');
                }}
              />
            </div>
          </div>

          {/* Recruiter / Evaluator Project Spotlights (Above the Fold) */}
          <div className="glass-card recruiter-spotlight-card">
            <div className="spotlight-header">
              <span className="spotlight-badge">💡 Featured Project Spotlights</span>
              <div className="spotlight-socials">
                <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="spotlight-item" onClick={() => handleScrollToSection('projects')}>
              <div className="spotlight-marker primary-marker"></div>
              <div className="spotlight-body">
                <strong>SceneNarrator: VLM Benchmarking</strong>
                <p>Assistive scene-description & navigation. Accepted iCOMET 2026.</p>
              </div>
              <span className="spotlight-arrow">→</span>
            </div>

            <div className="spotlight-item" onClick={() => handleScrollToSection('projects')}>
              <div className="spotlight-marker secondary-marker"></div>
              <div className="spotlight-body">
                <strong>Dementia Support Conversational AI</strong>
                <p>Responsible Dialogue system built with privacy-first limits.</p>
              </div>
              <span className="spotlight-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
