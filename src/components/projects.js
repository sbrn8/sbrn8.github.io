import React from 'react';
import uwpm from '../assets/uwpm_banner.png'
import frc from '../assets/frc_banner.png'
import girl from '../assets/girl_laptop.png'

const projects = [
    {
      heading: "2024 ProdCon",
      subheading: "UW Product Management Club",
      date: "2024/11",
      description: "Innovative Virtual Reality (VR) product idea for TD Invent's employee training modules.",
      image: uwpm,
      
    },
    {
        heading: "2023 FRC Charged Up",
        subheading: "FIRST Robotics Competition",
        date: "2023/01 - 2023/05",
        description: "Robot Code 🤖",
        image: frc,
      
    },
    {
        heading: "Personal Portfolio",
        subheading: "Web Development",
        date: "2024/09 - Present",
        description: "Website",
        image: girl,
        link: "https://github.com/sbrn8/sbrn8.github.io",
    },
];

const Project = () => {
    return (
        <section className="experience-section" id="projects">
          <h2>Projects</h2>
          <div className="experience-grid">
            {projects.map((project, index) => (
              <div className="experience-card" key={index}>
                <img src={project.image} alt={`${project.heading}`} />
                <h3>{project.heading}</h3>
                <h4>{project.subheading}</h4>
                <h5>{project.date}</h5>
                <p>{project.description}</p>
                <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                >
                <button className="details-button">Details</button>
                </a>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Project;