import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm a Web Developer</h1>
          <p className="hero-subtitle">
            I create beautiful, responsive, and functional websites that solve real-world problems.
            Let's build something amazing together!
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href="#" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;