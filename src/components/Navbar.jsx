import React from 'react'
import logo from "../assets/rishlogo.png"

export default function Navbar() {
  return (
   <>
   <nav class="navbar navbar-expand-lg  bg-body-tertiary fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="Bootstrap" height="50px" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
      <img src={logo} alt="Bootstrap" height="50px" />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>Resorts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>Cruise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>IAP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>Contact US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{fontFamily:"sans-serif",fontWeight:"500"}}>Privacy Policy</a>
          </li>
        
        </ul>
      
      </div>
    </div>
  </div>
</nav>
   
   </>
  )
}
