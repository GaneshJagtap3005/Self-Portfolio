import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-section">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: yourmail@example.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Pune, India</p>
      </div>
    </footer>
  );
};

export default Footer;
