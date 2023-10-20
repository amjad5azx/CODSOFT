import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a className="navbar-brand" href="#about">Muhammad Amjad</a>
        <button
          className={`navbar-toggler ${isNavbarCollapsed ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!isNavbarCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#github">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.dropbox.com/s/vnmu5h9yxfogv3r/resume.pdf?dl=0" download="resume.pdf" target='_blank'>Download Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
