import React, { useState, useEffect } from 'react';

// Replace these imports with your exported design files
import img1 from '../assets/DDCIceCream.png';
import img2 from '../assets/DDCbonfire.png';
import img3 from '../assets/DevCon-main.png';


const designs = [
    { src: img3, alt: "DevCon Main Banner" },
    { src: img1, alt: "DDC Ice Cream Instagram Post" },
    { src: img2, alt: "DDC Bonfire Instagram Post" }
    
];

const GraphicDesign = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setSelected(null);
            if (e.key === 'ArrowRight') setSelected(i => i < designs.length - 1 ? i + 1 : i);
            if (e.key === 'ArrowLeft') setSelected(i => i > 0 ? i - 1 : i);
        };
        if (selected !== null) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selected]);

    return (
        <section className="design-section" id="design">
            <h2 className="projects-heading">Graphic Design</h2>
            <div className="design-grid">
                {designs.map((img, i) => (
                    <button key={i} className="design-thumb" onClick={() => setSelected(i)}
                        aria-label={`View ${img.alt}`}>
                        <img src={img.src} alt={img.alt} />
                    </button>
                ))}
            </div>

            {selected !== null && (
                <div className="lightbox-overlay" onClick={() => setSelected(null)}>
                    <button className="lightbox-close" onClick={() => setSelected(null)}
                        aria-label="Close">&#x2715;</button>

                    {selected > 0 && (
                        <button className="lightbox-nav lightbox-prev"
                            onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                            aria-label="Previous">&#8249;</button>
                    )}

                    <img
                        src={designs[selected].src}
                        alt={designs[selected].alt}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {selected < designs.length - 1 && (
                        <button className="lightbox-nav lightbox-next"
                            onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                            aria-label="Next">&#8250;</button>
                    )}
                </div>
            )}
        </section>
    );
};

export default GraphicDesign;
