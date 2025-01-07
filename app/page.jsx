"use client";

import React from "react";
import Header from '@components/header'
// import Footer from '@components/footer'
//import "./page.css"; // Import the external CSS file

const LandingPage = () => {


  return (
    <div className="container">
        <Header/>
        <div className="pawpal_info">

          <div className="info_name">PawPal</div>

          <div className="info_info">A results-driven business <br /> dedicated 
            to helping clients <br /> achieve
          their goals
          </div>

          <a href="/" className="info_link">VIEW SERVICES</a>

        </div>

    </div>

    
    
  );
};

export default LandingPage;
