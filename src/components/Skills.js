import React from 'react';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaCode, FaCss3 } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'UI/UX'],
      icon: FaReact
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Middleware'],
      icon: FaNode
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      icon: FaDatabase
    },
    {
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'Docker', 'Webpack', 'NPM/Yarn'],
      icon: FaGitAlt
    },
    {
      title: 'Programming',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'APIs'],
      icon: FaCode
    },
    {
      title: 'Styling',
      skills: ['CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap', 'Animations'],
      icon: FaCss3
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <IconComponent />
                </div>
                <h3>{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;