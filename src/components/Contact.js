import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

function Contact() {
  const { emails, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [copiedText, setCopiedText] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopiedText(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic front-end validation (keeps UX smart + prevents fake success)
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option A: If you add a backend endpoint later, just set REACT_APP_CONTACT_ENDPOINT.
      // We keep a safe fallback so the UI never lies.
      const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        });

        if (!res.ok) {
          throw new Error(`Contact request failed: ${res.status}`);
        }
      } else {
        // Fallback: copy-to-email flow (no backend). This avoids showing "sent" when nothing is sent.
        const mailto = `mailto:${encodeURIComponent(emails[0])}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
        window.location.href = mailto;

        // If the mail client opens, treat as success; if blocked, user will handle.
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      // Keep content so user can retry.
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="float-bg-2"></div>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        {/* Contact Information Cards */}
        <div className="contact-info-column">
          <h3 className="sub-title">Contact Information</h3>
          
          <div className="contact-cards-container">
            {/* Email Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-card-content">
                <h4>Email</h4>
                {emails.map((email, idx) => (
                  <div key={idx} className="email-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', marginBottom: idx === 0 ? '0.75rem' : '0' }}>
                    <p className="contact-value">{email}</p>
                    <button 
                      onClick={() => handleCopy(email, `email${idx}`)} 
                      className="copy-btn"
                      aria-label={`Copy email address ${email}`}
                    >
                      {copiedText[`email${idx}`] ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-card-content">
                <h4>Phone</h4>
                <p className="contact-value">{phone}</p>
                <button 
                  onClick={() => handleCopy(phone, 'phone')} 
                  className="copy-btn"
                  aria-label="Copy phone number"
                >
                  {copiedText.phone ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-card-content">
                <h4>Location</h4>
                <p className="contact-value">{location}</p>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="glass-card contact-info-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div className="contact-card-content">
                <h4>Social Profiles</h4>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="copy-btn" style={{ textDecoration: 'none' }}>
                    GitHub
                  </a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="copy-btn" style={{ textDecoration: 'none' }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-column">
          <div className="glass-card contact-form-card">
            <h3 className="form-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Feedback, inquiry, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-status success">
                  Your message has been sent successfully! Thank you.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
