import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

// SVG Icon library for skills (inline for zero-dependency)
const SkillIcons = {
  Python: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9 2C9.2 2 7.5 3.2 7.5 5.1v1.6h4.8v.5H5.6C3.6 7.2 2 8.9 2 11.5s1.7 4.9 3.6 4.9H7V14c0-2.1 1.8-3.9 4.2-3.9h4.6c2 0 3.6-1.6 3.6-3.6V5.1C19.4 3.2 17.6 2 14.9 2h-3zm-1.4 1.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1S9.4 5.5 9.4 4.9s.5-1.1 1.1-1.1z" fill="#4f46e5"/><path d="M19.4 7.7h-1.3v2.5c0 2.1-1.8 3.9-4.2 3.9H9.3c-2 0-3.6 1.6-3.6 3.6v3.2C5.7 22.8 7.5 24 11.1 24c3.6 0 4.7-1.8 4.7-3.1v-1.6H11v-.5h7c2 0 4-1.7 4-4.3S21.4 7.7 19.4 7.7zm-2.5 11c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#0d9488"/></svg>,
  JavaScript: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#f7df1e"/><path d="M6 18.5l1.8-1.1c.4.6.7 1.1 1.4 1.1.7 0 1.1-.3 1.1-1.3v-7h2.3v7.1c0 2.1-1.2 3.1-3 3.1-1.6 0-2.5-.8-3-1.9zm7.2-.3l1.8-1c.4.7.9 1.3 1.9 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.7 1.1c-.3-.6-.7-.8-1.2-.8-.5 0-.8.3-.8.8 0 .6.3.8 1.2 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-1.9z" fill="#000"/></svg>,
  Java: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.8 16.3s-.7.4.5.5c1.4.2 2.1.2 3.7-.1 0 0 .4.3.9.5-3.3 1.4-7.4-.1-5.1-1zM8.4 14.1s-.8.6.4.7c1.6.2 2.8.2 4.9-.2 0 0 .3.3.7.4-4.3 1.3-9.2.1-5.9-1z" fill="#4f46e5"/><path d="M11.8 9.8c.9 1-2.3 1.9-2.3 1.9s2.2-.4 3.3-1.3c1.3-1.2.3-2.3.3-2.3s.8 1.7-.3 2.8c-.1.1-.1.2 0 .3V9.8z" fill="#4f46e5"/><path d="M13.1 17.5s.5.4-.6.7c-2.2.7-9.1.9-11-.1-.7-.3.6-.8 1-.8.4-.1.6 0 .6 0-.7-.5-4.6 1-2 1.4 7.3 1.2 13.3-.5 12-1.2z" fill="#0d9488"/><path d="M9.2 11.9s-3.3.8-1.2 1c.8.1 2.5.1 4-.1 1.3-.2 2.5-.5 2.5-.5s-.4.2-.7.3c-3 .8-8.7.4-7.1-.3 1.4-.7 2.5-.4 2.5-.4z" fill="#0d9488"/><path d="M15 14.9c3-.6 4.5-2.4 4.5-2.4s-.6.9-1.9 1.5c-1.5.7-3.5.9-3.5.9v1.4c0 .1-.1.2-.2.2h-.1c.1-.5.1-1.3.2-1.6z" fill="#4f46e5"/></svg>,
  SQL: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#4f46e5" strokeWidth="1.5"/><path d="M3 9h18M9 9v10" stroke="#0d9488" strokeWidth="1.5"/></svg>,
  'C++': <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#4f46e5" strokeWidth="1.5"/><path d="M9 12h6M12 9v6M16 12h3M18 10v4" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  React: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#4f46e5" strokeWidth="1.5" transform="rotate(-60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#0d9488" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#4f46e5" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="#0d9488"/></svg>,
  HTML5: <svg viewBox="0 0 24 24" fill="none"><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#4f46e5" opacity=".12" stroke="#4f46e5" strokeWidth="1.5"/><path d="M7 7h10l-.8 9L12 17.5 7.8 16z" fill="#0d9488" opacity=".18"/></svg>,
  CSS3: <svg viewBox="0 0 24 24" fill="none"><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#0d9488" opacity=".12" stroke="#0d9488" strokeWidth="1.5"/><path d="M8 8h8l-.6 7L12 16.5l-3.4-1.5z" fill="#4f46e5" opacity=".18"/></svg>,
  PyTorch: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#4f46e5" strokeWidth="1.5"/><circle cx="15" cy="9" r="1.5" fill="#0d9488"/><path d="M12 6v6l4 2" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  OpenCV: <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="4" stroke="#4f46e5" strokeWidth="1.5"/><circle cx="15" cy="9" r="4" stroke="#0d9488" strokeWidth="1.5"/><circle cx="12" cy="15" r="4" stroke="#db2777" strokeWidth="1.5"/></svg>,
  MySQL: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="#4f46e5" strokeWidth="1.5"/><path d="M4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke="#4f46e5" strokeWidth="1.5"/><path d="M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" stroke="#0d9488" strokeWidth="1.5"/></svg>,
  MongoDB: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 7 9 7 14a5 5 0 0010 0c0-5-5-11-5-11z" stroke="#0d9488" strokeWidth="1.5" fill="#0d9488" fillOpacity=".1"/><path d="M12 3v16" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  GitHub: <svg viewBox="0 0 24 24" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

const defaultIcon = <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#4f46e5" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/></svg>;

function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', emoji: '⚡' },
    { id: 'languages', label: 'Languages', emoji: '💻' },
    { id: 'aiMl', label: 'AI/ML & CV', emoji: '🤖' },
    { id: 'genAiNlp', label: 'GenAI & NLP', emoji: '🧠' },
    { id: 'webDev', label: 'Web Dev', emoji: '🌐' },
    { id: 'databasesTools', label: 'Tools & DBs', emoji: '🛠️' }
  ];

  const getSkillsForTab = () => {
    if (activeTab === 'all') {
      return [
        { title: 'Programming Languages', list: skills.languages, color: 'var(--primary)', accent: 'rgba(79,70,229,0.08)', emoji: '💻' },
        { title: 'AI/ML Libraries & Frameworks', list: skills.aiMl, color: 'var(--secondary)', accent: 'rgba(13,148,136,0.08)', emoji: '🤖' },
        { title: 'Generative AI & NLP', list: skills.genAiNlp, color: 'var(--accent)', accent: 'rgba(219,39,119,0.08)', emoji: '🧠' },
        { title: 'Web Development', list: skills.webDev, color: 'var(--secondary)', accent: 'rgba(13,148,136,0.08)', emoji: '🌐' },
        { title: 'Databases & Tools', list: skills.databasesTools, color: 'var(--text-secondary)', accent: 'rgba(100,116,139,0.08)', emoji: '🛠️' }
      ];
    }
    const map = {
      languages:     { title: 'Programming Languages', list: skills.languages, color: 'var(--primary)', accent: 'rgba(79,70,229,0.08)', emoji: '💻' },
      aiMl:          { title: 'AI/ML Libraries & Frameworks', list: skills.aiMl, color: 'var(--secondary)', accent: 'rgba(13,148,136,0.08)', emoji: '🤖' },
      genAiNlp:      { title: 'Generative AI & NLP Models', list: skills.genAiNlp, color: 'var(--accent)', accent: 'rgba(219,39,119,0.08)', emoji: '🧠' },
      webDev:        { title: 'Web Systems & Workflows', list: skills.webDev, color: 'var(--secondary)', accent: 'rgba(13,148,136,0.08)', emoji: '🌐' },
      databasesTools:{ title: 'Software, Databases & Tools', list: skills.databasesTools, color: 'var(--text-secondary)', accent: 'rgba(100,116,139,0.08)', emoji: '🛠️' }
    };
    return [map[activeTab]];
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="float-bg-2"></div>
      <h2 className="section-title">Technical Expertise</h2>
      
      {/* Skill Tabs */}
      <div className="skills-tabs">
        {categories.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.emoji}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="skills-container">
        {getSkillsForTab().map((group, idx) => (
          <div key={idx} className="skill-group-card" style={{ '--group-accent': group.accent }}>
            <div className="skill-group-header">
              <span className="skill-group-emoji">{group.emoji}</span>
              <h3 className="skill-group-title" style={{ color: group.color }}>{group.title}</h3>
            </div>
            <div className="skills-list">
              {group.list.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item" style={{ '--item-color': group.color }}>
                  <span className="skill-icon-wrap">
                    {SkillIcons[skill] || defaultIcon}
                  </span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
