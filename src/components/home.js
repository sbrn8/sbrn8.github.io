import React, { useState } from 'react';
import Navbar from './navbar';
import Project from './projects';
import GraphicDesign from './graphicDesign';
import taylor from '../assets/Taylor2.JPG';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Hamburger clicked");
        setMenuOpen(!menuOpen);
      };
  return (

    <div>
      <div className="hero-wrapper">
        <Navbar />

        {/* Intro and gallery */}
        <section className="home-gallery">
            <div className="intro highlight-name">
                <h1>Sabrina Fang</h1>
                <p>A Computer Science and Business Double Degree student at University of Waterloo and Wilfrid Laurier University.</p>
            </div>
        </section>
      </div>

      <section className="about-section" id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Sabrina — a student passionate about building products at the intersection of technology and people.
            I love diving into user experience, software development, and finding creative solutions to real problems.
          </p>
          <p>
            Outside of school, you'll find me exploring new cities, going to concerts, or tinkering on side projects.
          </p>
        </div>
        <div className="about-photo">
          <img src={taylor} alt="Sabrina Fang" />
        </div>
      </section>

      <Project />
      <GraphicDesign />
    </div>

);
};

export default Home;
