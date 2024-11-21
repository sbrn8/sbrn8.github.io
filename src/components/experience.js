import React from 'react';
import uxl from '../assets/uxl_Banner.png'
import uwvr from '../assets/uwvr_banner.png'
import frc from '../assets/frc_banner.png'

const experiences = [
    {
      heading: "Vice President of Events",
      subheading: "UX Laurier",
      date: "2024/05 - Present",
      description: "Planned events and workshops, collaborated with industry professionals, and organized flagship events.",
      image: uxl,
    },
    {
      heading: "Director of Finance",
      subheading: "UW VR Club",
      date: "2024/05 - Present",
      description: "Submit budget proposals for each term, track expenses and income using Excel.",
      image: uwvr,
    },
    {
      heading: "Team Captain",
      subheading: "FIRST Robotics Competition team 7659",
      date: "2019/09 - 2023/08",
      description: "Managed a team of 40, developed code for Automous routine, engineered robot, organized outreach events.",
      image: frc,
    },
    {
        heading: "Production Manager",
        subheading: "FIRST Lego Regional Competition",
        date: "2022/09 - 2022/12",
        description: "Organized production involving 30 volunteers, 15 judges, and 22 teams across GTA",
        image: frc,
      },
  ];

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
          <h2>Leadership Experience</h2>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <img src={experience.image} alt={`${experience.heading}`} />
                <h3>{experience.heading}</h3>
                <h4>{experience.subheading}</h4>
                <h5>{experience.date}</h5>
                <p>{experience.description}</p>
                
              </div>
            ))}
          </div>
        </section>
      );
}

export default Experience;