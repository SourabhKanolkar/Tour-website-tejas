import React from 'react';
import '../css/ContactUs.css'; // We will create this CSS file next
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaBehance } from 'react-icons/fa';
import Footer from './Footer';
import Partners from './Partners';
import CommanBanner from './commonBanner';

const ContactUs = () => {
  return (
    <>
    <CommanBanner name="Contact Us" />
    
    <div className="contact-section">
      <div className="contact-header">
        <p className="subtitle">Our Contact</p>
        <h2 className="title">
          Don't Hesitate To<br />
          Contact Us
        </h2>
      </div>

      <div className="contact-body">
        {/* Left Column: Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>
              306 third floor stadium complex
              <br />
              havmor hotel navrangpura
              <br />
              Ahmedabad 380009
            </p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 88948 47702</p>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <p>09.00 AM - 17.00 PM</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>info@worldendlessvacation.com</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>reservation@worldendlessvacation.com</p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      {/* Social Media Icons Footer */}
      <div className="social-media">
        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://behance.net" className="social-icon" aria-label="Behance">
          <FaBehance />
        </a>
      </div>
    </div>
    <Partners/>
    <Footer/>
    </>
  );
};

export default ContactUs;