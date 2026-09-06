import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: '2022 - Present',
      description: 'Lead frontend development team, architect scalable React applications, mentor junior developers.',
      responsibilities: [
        'Developed and maintained React applications serving 100k+ users',
        'Implemented responsive design patterns and performance optimizations',
        'Mentored 3 junior developers on best practices'
      ]
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      duration: '2020 - 2022',
      description: 'Built full-stack web applications using React and Node.js, collaborated with cross-functional teams.',
      responsibilities: [
        'Created REST APIs using Node.js and Express',
        'Implemented MongoDB database schemas and queries',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ]
    },
    {
      id: 3,
      position: 'Junior Frontend Developer',
      company: 'Web Services Co.',
      duration: '2019 - 2020',
      description: 'Developed responsive web interfaces, fixed bugs, and improved website performance.',
      responsibilities: [
        'Built responsive UI components using HTML, CSS, and JavaScript',
        'Participated in code reviews and peer programming sessions',
        'Improved page load time by 30% through optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <span className="company-name">{exp.company}</span>
                </div>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;