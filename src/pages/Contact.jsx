import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-page">
      <div className="banner">
        <img
          src="../../assets/lightbulb.png" 
          alt="Contact Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Lets Create some Memories</h1>
          <p className="banner-subtext">Lets work together</p>
          <button className="linkedin-button">
  <a
    href="https://www.linkedin.com/in/isabela-selleck" 
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</button>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>If you have any questions or need help, please fill out the form below. We do our best to respond within 1 business day.</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Enter your full name...</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email address...</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter your message...</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;