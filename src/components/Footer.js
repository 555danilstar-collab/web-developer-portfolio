import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ isDarkTheme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Web Developer</h3>
          <p>Creating beautiful and functional web experiences.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="footer-socials">
            <a href="#" title="GitHub"><FaGithub /></a>
            <a href="#" title="LinkedIn"><FaLinkedin /></a>
            <a href="#" title="Twitter"><FaTwitter /></a>
            <a href="#" title="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Web Developer Portfolio. Made with <FaHeart className="heart-icon" /> by Me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;