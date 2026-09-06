import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '✅',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      technologies: ['React', 'API Integration', 'CSS3', 'Geolocation'],
      image: '🌤️',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for monitoring social media metrics with dark mode support.',
      technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      image: '📊',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Content management system for creating, editing, and publishing blog posts.',
      technologies: ['Next.js', 'MongoDB', 'MDX', 'Authentication'],
      image: '📝',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-responsive app to track workouts, nutrition, and health goals.',
      technologies: ['React Native', 'Firebase', 'Charts', 'Push Notifications'],
      image: '💪',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-emoji">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" title="GitHub">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="project-link" title="Live Demo">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;