import React from 'react';
import './App.css';
import Navbar from './Navbar';
import myImage from '../Assets/myImage.jpeg';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    
    <div>
      <Navbar/>

      <header>

        <div className="container">
          <br /><br /><br /><br /><br /><br />
          <h1 className="animated-header">Muhammad Amjad</h1>
          <p className="animated-subheader">Web Developer | Software Engineer</p>
        </div>
      </header>

      <div className="container">
        <section id="about">
          <div className="container">
            <img src={myImage}  className="profile-image" />
            <h2 style={{ textAlign: 'center' }}>About Me</h2>
            <div className="row">
              <div className="container">
                <p>
                  Hi, I'm Muhammad Amjad, an undergraduate student in the Software Engineering Department at Bahria University Karachi Campus. I have a strong passion for web development and enjoy working with various technologies and frameworks.
                  I have experience working on both front-end and back-end development. On the back-end, I have worked with the MERN (MongoDB, Express, React, Node.js) stack to develop web applications, implementing functionalities and APIs. Additionally, I have worked with C# ASP.NET framework web forms and SQL Server Database, gaining knowledge in server-side programming and database management.
                  In addition to my proficiency in the MERN stack and C#, I am familiar with HTML, CSS, JavaScript, Java, and C++. I believe in continuously expanding my skill set and staying updated with the latest technologies in the field of software development.
                  As an aspiring software engineer, I am dedicated to learning and growing in the industry. Currently, I am focusing on enhancing my full-stack development skills and exploring new frameworks and libraries to create efficient and user-friendly web solutions.
                </p>
                <p><strong>Download my Resume: </strong><a href="https://www.dropbox.com/s/vnmu5h9yxfogv3r/resume.pdf?dl=0" download="resume.pdf" target='_blank'>Download Resume</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <img src={project1} alt="Project 1" height="50%" width="50%" />
            <br />
            <h4 style={{ fontWeight: 'bolder' }}>Al-Hadi Quran Teaching Website</h4>
            <p>Developed a MERN-based web application for Al-Hadi backend using Node.js, Express.js, and MongoDB</p>
            <p>Technology used: MERN stack</p>
          </div>
          <div className="project">
            <img src={project2} alt="Project 2" height="50%" width="50%" />
            <br />
            <h4 style={{ fontWeight: 'bolder' }}>Insurance Management System</h4>
            <p>Developed and implemented SQL Server database for JHA Insurance including designing and implementing database tables, stored procedures, and triggers for seamless integration with the front-end based on Asp. Net Web forms.</p>
            <p><strong>Technologies used:</strong> Web Application Asp.net (.net framework) with SQL Server Database</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills">
            <li>MERN Stack (Mongo DB, Express JS, Node JS)</li>
            <li>Asp.net (.net Framework) Web Forms</li>
            <li>SQL Server</li>
            <li>Java, C# and C++ Programming</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>Bachelor of Software Engineering (Ongoing) from
              Bahria University Karachi Campus,
              Expected Year of Graduation: [2024] with Current CGPA: [3.44]</li>
          </ul>
        </section>

        <section id="github">
          <h2>GitHub Profile</h2>
          <p>Check out my GitHub profile to see more of my projects:</p>
          <a href="https://github.com/amjad5azx" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form className="contact-form" action="https://formsubmit.co/c6f5103747869730861fedb6a87335ba" method="POST" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>

      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
