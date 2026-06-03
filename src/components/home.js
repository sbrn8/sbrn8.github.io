import { useRef } from 'react';
import Navbar from './navbar';
import Project from './projects';
import GraphicDesign from './graphicDesign';
import FloatingNav from './floatingNav';
import taylor from '../assets/Taylor2.JPG';
import uwLogo from '../assets/UWlogo.png';
import uxlLogo from '../assets/ux_laurier_logo.jpeg';
import WLBClogo from '../assets/WLBClogo.png';

const previousRoles = [
    { logo: uwLogo, title: 'Undergraduate Researcher', company: 'UW Human-Computer Interaction Lab' },
    { logo: WLBClogo, title: 'Operations Lead', company: 'Waterloo Blockchain' },
    { logo: uxlLogo,  title: 'Co-President (Formerly VP of Events/Outreach)',  company: 'UX Laurier'  },
];

const Home = () => {
    const navbarRef = useRef(null);
  return (

    <div>
      <FloatingNav navbarRef={navbarRef} />
      <div className="hero-wrapper">
        <div ref={navbarRef}>
          <Navbar />
        </div>

        {/* Intro and gallery */}
        <section className="home-gallery">
            <div className="intro highlight-name">
                <h1>Sabrina Fang</h1>
                <p>A Computer Science and Business Double Degree student at University of Waterloo and Wilfrid Laurier University.</p>
            </div>
        </section>
      </div>

      <section className="about-section" id="about">
        <div className="about-main">
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
        </div>

        <div className="about-previously">
          <span className="previously-label">Previously at</span>
          <div className="previously-list">
            {previousRoles.map(({ logo, title, company }) => (
              <div className="previously-item" key={company}>
                <img src={logo} alt={company} />
                <div className="previously-item-text">
                  <span className="previously-company">{company}</span>
                  <span className="previously-title">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Project />
      <GraphicDesign />
    </div>

);
};

export default Home;
