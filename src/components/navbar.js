import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
            <a className="logo">👩🏻‍💻</a>
            <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </div>

            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><Link to="/about">About Me</Link></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="https://www.linkedin.com/in/sabrinalfang/">LinkedIn</a></li>
            </ul>
        </nav>
  );
}

export default Navbar;
