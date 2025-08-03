import React from 'react';
import './GalleryCTA.css';
import canyonImage from '../assets/canyon-background.webp'; // Import your background image

const GalleryCTA = () => {
    return (
        <div className="gallery-section-wrapper">
            {/* --- Top Title Section --- */}
            <div className="gallery-header">
                <p className="gallery-subtitle">Gallery</p>
                <h2 className="gallery-title">Memories We Collect</h2>
            </div>

            {/* --- Full-Width CTA Banner --- */}
            <div
                className="cta-banner"
                style={{ backgroundImage: `url(${canyonImage})` }}
            >
                <div className="cta-overlay">
                    <div className="cta-content">
                        <p className="cta-subtitle">Are You Ready</p>
                        <h3 className="cta-title">Explore With Us</h3>
                        <button className="cta-button">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCTA;