import React from 'react';
import '../css/AboutUsBanner.css';
import Navbar from './Navbar';


const AboutUsBanner = ({name}) => {
  return (
    <>
     <Navbar/>
    <section className="banner-container">
      {/* 
        The image is set as a background in the CSS file.
        This approach makes it easy to apply the dark overlay for text contrast.
      */}
      <div className="banner-text">
        <h1> {name}</h1>
      </div>
    </section>
      
    </>
  );
};

export default AboutUsBanner;