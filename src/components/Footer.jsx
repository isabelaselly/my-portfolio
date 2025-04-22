import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">

      </div>
      <div className="social-icons">
        <a href="https://github.com/isabelaselly" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/isabela-selleck/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:isabelaselleck@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>
      <div className="copyright">
        &copy; 2025 Isabela Selleck. All rights reserved.
      </div>
      <div className="credits">
        Built with <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> &amp; <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>. Design inspired by Jesus's Creation.
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default Footer;