import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer.jsx'
import Partners from './Partners.jsx'
import GalleryCTA from './GalleryCTA.jsx'

export default function Home() {
  return (
 <>
 <Navbar />
<section id='home-section'>
  <div className="container">
    <div className="row">
      <div className="col-md-12 mt-3" >
        <h4 className='text-start playfair-font' style={{color:"#fff"}}>Welcome to Rishbanshi Vacation</h4>
        <h1 className='text-start playfair-font home-heading-2'  style={{color:"#fff" }}>Travel<br></br> Destination<br></br>This Month</h1>

        <button className='btn btn-primary home-cta-btn ' >Explore Now</button>
      </div>
    </div>
  </div>
</section>
{/* belwo is 2nd section of home page */}
<section id='home-secound-section'>
  <div className="container">
  <div className="home-secound-title">
        <h4 className='text-center playfair-font'>
				Welcome to Rishbhanshi Holidays				</h4>
      </div>
      <div className="home-secound-title" >
        <h1 className='text-center playfair-font' home-secound-title>
				The Best Travel Service Provider			</h1>
      </div>
    <div className="row" style={{marginTop:"50px"}}>
   
      <div className="col-md-6 ">
        <div className="explore-tile">
          <h3 style={{marginBottom:"30px"}} className='playfair-font'>Explore the World With Us</h3>
          <p className='playfair-font home-secound-p'>The world is changing all around us. To continue to<br></br> thrive as a business over the next ten years and beyond,<br></br> we must look ahead, understand the trends and forces <br></br>that will shape our business in the future and move<br></br> swiftly to prepare for what’s to come. We must get<br></br> ready for tomorrow today. That’s what our 2020 Vision is<br></br> all about. It creates a long-term destination for our<br></br> business and provides us with a “Roadmap” for winning<br></br> together with our partners.</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 text-center">
            <h2>5k</h2>
            <span>Succes Trips</span>
          </div>
          <div className="col-md-6 mb-3 text-center">
            <h2>25k</h2>
            <span>Happy Clients</span>
          </div>
        </div>
       <div className="btn-home-secound-btn">
       <button className='btn btn-primary' style={{backgroundColor:"#293133",color:"#fff",paddingTop:"20px",paddingRight:"30px",paddingBottom:"20px",paddingLeft:"20px"}}>Get Started</button>
       </div>
         
      </div>

      <div className="col-md-6">
        <img style={{height:"378px",width:"582px"}} className='img-fluid' src="https://worldendlessvacation.com/wp-content/uploads/2024/03/family-vacation-1024x665.jpeg" alt="" />
      </div>


    </div>
  </div>

</section>
<GalleryCTA />
<Partners />
<Footer />
 
 </>
  )
}
