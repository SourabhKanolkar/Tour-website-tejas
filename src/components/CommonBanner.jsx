import React from 'react';
import '../css/AboutUsBanner.css';
import Navbar from './Navbar';

// It's best practice to import your image. 
// Place your image file in the same directory (or an assets folder) and update the path.
// For this example, we will link to a placeholder URL in the CSS.
// import bannerImage from './your-image-name.jpg';

const AboutUsBanner = () => {
  return (
    <>
    <section className="banner-container">
      {/* 
        The image is set as a background in the CSS file.
        This approach makes it easy to apply the dark overlay for text contrast.
      */}
      <div className="banner-text">
        <h1>About Us</h1>
      </div>
    </section>
    <Navbar/>
    </>
  );
};

export default AboutUsBanner;