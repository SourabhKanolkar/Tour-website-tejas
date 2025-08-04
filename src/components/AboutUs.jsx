import React from "react";
import "../css/AboutUs.css";
import Footer from "./Footer";
import Partners from "./Partners";
import CommonBanner from "./commonBanner";
import testImg from "../assets/bali.jpg";
import Navbar from "./Navbar";
import GalleryCTA from "./GalleryCTA";

const AboutUs = () => {
  return (
    <>
    <CommonBanner />
    <div className="about-container">
      <section id='home-secound-section'>
        <div className="container">
          <div className="home-secound-title">
            {/* <h4 className='text-center playfair-font'>
              Welcome to Rishbhanshi Holidays
            </h4> */}
          </div>
          <div className="home-secound-title">
            {/* <h1 className='text-center playfair-font home-secound-title'>
              The Best Travel Service Provider
            </h1> */}
          </div>

          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-md-6">
              <div className="explore-tile">
                 <h3 style={{ marginBottom: "30px" }} className='playfair-font'>About World endless vacation</h3>
                <h3 style={{ marginBottom: "30px" }} className='playfair-font'>About Us</h3>
                <p className='playfair-font home-secound-p'>
                  The world is changing all around us. To continue to thrive as a business over the next ten years and beyond, we must look ahead, understand the trends and forces that will shape our business in the future and move swiftly to prepare for what’s to come. We must get ready for tomorrow today. That’s what our 2020 Vision is all about. It creates a long-term destination for our business and provides us with a “Roadmap” for winning together with our partners.
                </p>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3 text-center">
                  <h2>5k</h2>
                  <span>Succes Trips</span>
                </div>
                <div className="col-md-4 mb-3 text-center">
                  <h2>25k</h2>
                  <span>Happy Clients</span>
                </div>
                <div className="col-md-4 mb-3 text-center">
                  <h2>500k</h2>
                  <span>Positive Reviews</span>
                </div>
              </div>

              {/* <div className="btn-home-secound-btn">
                <button className='btn btn-primary' style={{
                  backgroundColor: "#293133",
                  color: "#fff",
                  paddingTop: "20px",
                  paddingRight: "30px",
                  paddingBottom: "20px",
                  paddingLeft: "20px"
                }}>
                  Get Started
                </button>
              </div> */}
            </div>

            <div className="col-md-6">
              <img
                style={{ height: "378px", width: "582px" }}
                className='img-fluid'
                src={testImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <GalleryCTA/>
      <Partners />
      <Footer />
    </div>
    </>
  );
};

export default AboutUs;
