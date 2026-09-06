import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>&lt;Dev /&gt;</h1>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </div>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;