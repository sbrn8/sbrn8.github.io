import React from 'react';
import photo1 from '../assets/macao.jpg';
import photo2 from '../assets/london.jpg';
import photo3 from '../assets/yea.jpg';

import photo4 from '../assets/drunk.JPG';
import photo5 from '../assets/Taylor.jpg';
import photo6 from '../assets/Taylor2.JPG';

const Home = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6]; 
  return (
    <div>
        <section className="home-gallery">
            <div className="intro">
                <h1>Hello, I'm <span className="highlight-name">Sabrina Fang</span></h1>
                <p>A Computer Science and Business Double Degree student at University of Waterloo and Wilfrid Laurier University.</p>
            </div>
            <div className="gallery">
                <div className="grid">
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Gallery ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
        <section className="experience">
                <h2>Leadership Experience</h2>
        </section>
    </div>

);
};

export default Home;
