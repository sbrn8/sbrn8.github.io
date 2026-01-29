import React, { useState } from 'react';
import Navbar from './navbar';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Hamburger clicked");
        setMenuOpen(!menuOpen); 
      };
  return (
    
    <div>
       <Navbar />

        {/* Intro and gallery */}
        <section className="home-gallery">
            <div className="intro highlight-name">
                <h1>Sabrina Fang</h1>
                <p>A Computer Science and Business Double Degree student at University of Waterloo and Wilfrid Laurier University.</p>
            </div>
            {/* <div className="gallery">
                <div className="grid">
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Gallery ${index + 1}`} />
                    ))}
                </div>
            </div> */}
        </section>
    </div>

);
};

export default Home;
