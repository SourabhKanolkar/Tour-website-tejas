import React from 'react';
import '../css/Footer.css';
import logo from '../assets/rishlogo.png'; // Your logo file
import razorpayLogo from '../assets/razorpay-logo.png';
import axisBankLogo from '../assets/axis-bank-logo.png';
import pineLabsLogo from '../assets/pine-labs-logo.png';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-section about-section">
                    <img src={logo} alt="World Endless Vacation Logo" className="footer-logo" />
                    <p>
                        The world is changing all around us. To continue to thrive as a business over the next ten years and beyond, we must look ahead, understand the trends and forces that will shape our business in the future and move swiftly to prepare for what's to come.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaRegEnvelope /></a>
                    </div>
                </div>

                {/* Get In Touch Section */}
                <div className="footer-section">
                    <h3>Get In Touch</h3>
                    <ul className="contact-list">
                        <li><FaMapMarkerAlt className="contact-icon" /><span>306 third floor stadium complex havmore hotel navrangpura Ahmedabad 380009</span></li>
                        <li><FaEnvelope className="contact-icon" /><span>info@worldendlessvacation.com</span></li>
                        <li><FaPhoneAlt className="contact-icon" /><span>+91 88948 47702</span></li>
                        <li><FaPhoneAlt className="contact-icon" /><span>18002678006</span></li>
                        <li><FaClock className="contact-icon" /><span>09.00 AM - 17.00 PM</span></li>
                    </ul>
                </div>

                {/* Quicklinks Section */}
                <div className="footer-section">
                    <h3>Quicklinks</h3>
                    <ul className="quicklinks-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Benefits of Worldendless</a></li>
                        <li><a href="#">Resorts</a></li>
                        <li><a href="#">Cruise</a></li>
                        <li><a href="#">IAP</a></li>
                        <li><a href="#">Online Booking</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Payments Section */}
                <div className="footer-section">
                    <h3>PAYMENTS POWERED BY</h3>
                    <div className="payment-logos">
                        <img src={razorpayLogo} alt="Razorpay" />
                        <img src={axisBankLogo} alt="Axis Bank" />
                        <img src={pineLabsLogo} alt="Pine Labs" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © Worldendless Vacation Privacy | Integrity @2023 all right reversed
            </div>
        </footer>
    );
};

export default Footer;