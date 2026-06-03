import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
            <a className="logo">👩🏻‍💻</a>
            <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </div>

            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="https://www.linkedin.com/in/sabrinalfang/">LinkedIn</a></li>
                <li><a href="https://drive.google.com/file/d/1BNLHVx61buuU3VxU-DMCsx3LdFgsdV9o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
        </nav>
  );
}

export default Navbar;
