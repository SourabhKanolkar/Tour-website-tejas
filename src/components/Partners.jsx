import React from 'react';
import Slider from 'react-slick';

// Don't forget to import the required CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/Partners.css'; // Your custom CSS file

// --- Import your logos ---
import kumarPlazaLogo from '../assets/kumar-plaza-logo.jpeg';
import deAlturasLogo from '../assets/de-alturas-logo.jpeg';
import maldivesLogo from '../assets/maldives-logo.png';
import marriottLogo from '../assets/marriott-logo.png';
import whotelsLogo from '../assets/w-hotels-logo.png';
import ramadaLogo from '../assets/ramada-logo-2.png';


// --- Define the logos for each slider ---
const associatedLogos = [
  { id: 1, src: kumarPlazaLogo, alt: 'Hotel Kumar Plaza' },
  { id: 2, src: deAlturasLogo, alt: 'De Alturas Resorts' },
  { id: 3, src: maldivesLogo, alt: 'Maldives', specialClass: 'maldives-logo' }, // Special class for unique styling
  // Add more associated logos here
];

const partnerLogos = [
  { id: 1, src: marriottLogo, alt: 'Marriott' },
  { id: 2, src: whotelsLogo, alt: 'W Hotels' },
  { id: 3, src: ramadaLogo, alt: 'Ramada' },
  // Add more partner logos here
];

const Partners = () => {
    // Configuration for the slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // A separate setting for the top slider to hide dots
    const topSliderSettings = { ...settings, dots: false };

    return (
        <div className="partners-page-wrapper">
            <div className="partners-container">
                {/* --- Associated With Slider --- */}
                <div className="slider-section">
                    <h2 className="slider-title">Associated With</h2>
                    <Slider {...topSliderSettings}>
                        {associatedLogos.map(logo => (
                            <div key={logo.id} className={`logo-slide ${logo.specialClass || ''}`}>
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* --- Our Partners Slider --- */}
                <div className="slider-section">
                    <h2 className="slider-title">Our Partners</h2>
                    <Slider {...settings}>
                        {partnerLogos.map(logo => (
                            <div key={logo.id} className="logo-slide">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="footer-bar"></div>
        </div>
    );
};

export default Partners;