import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a love for creating clean, user-friendly web experiences.
              With expertise in modern web technologies, I transform ideas into fully functional applications.
            </p>
            <p>
              My journey in web development started with a curiosity to build things on the internet,
              and it has evolved into a career dedicated to writing quality code and delivering exceptional results.
            </p>
            <p>
              When I'm not coding, you can find me learning new technologies, contributing to open-source projects,
              or sharing my knowledge with the community.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="highlight-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="highlight-item">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;