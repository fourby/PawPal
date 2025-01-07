'use client'

import React from 'react'
import "./signup.css"

const page = () => {
  return (
    <div className="SignUp_Main">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/Background_prot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="content">

        {/* Logo Section */}
        {/* <div className="content_item1">
          <h1>PawPal</h1>
        </div> */}

        {/* Form Section */}
        <div className="content_item2">
        <div className="cover">  </div>
          <form>
           <div className="signup-form">
             <h2 className="form_header">Sign Up</h2>

            {/* Personal Information */}
            {/* className="form_group form_group1" */}
            <div className="form_group form_group1">

            <div className="group1">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>

            <div className="group1">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>

            <div className="group1">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>

            </div>

            {/* className="form_group form_group2" */}
            <div className="form_group form_group2">
           
            <div className="group1 group_email">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            
            </div>

            {/* className="form_group form_group3" */}

            <div className="form_group form_group3">
            <div className="group1">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>

            <div className="group1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" required />
            </div>

            <div className="group1">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" required />
            </div>
            </div>

            {/* Address Details */}
             {/* className="form_group form_group4" */}
            <div className="form_group form_group4">
            

            <div className="group1">
              <label htmlFor="streetAddress">Street Address</label>
              <input type="text" id="streetAddress" />
            </div>

            <div className="group1">
              <label htmlFor="city">City</label>
              <input type="text" id="city" required />
            </div>

            <div className="group1">
              <label htmlFor="state">State/Region</label>
              <input type="text" id="state" />
            </div>

            </div>

            

            {/* Dog Details */}
            <h3 className="form_other_header">Dog Details</h3>

             {/* className="form_group form_group5" */}
            <div className="form_group form_group5">
            <div className="group1">
              <label htmlFor="dogName">Dog Name</label>
              <input type="text" id="dogName" />
            </div>

            <div className="group1">
              <label htmlFor="dogBreed">Dog Breed</label>
              <input type="text" id="dogBreed" />
            </div>
            </div>

             {/* className="form_group form_group6" */}
            <div className="form_group form_group6">
            <div className="group1">
              <label htmlFor="dogAge">Age of Dog</label>
              <input type="number" id="dogAge" />
            </div>

            <div className="group1">
              <label htmlFor="dogGender">Gender of Dog</label>
              <select id="dogGender">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            </div>

             {/* className="form_group form_group7" */}
            <div className="form_group form_group7">

            <div className="group1">
              <label htmlFor="vaccinationStatus">Vaccination Status</label>
              <select id="vaccinationStatus">
                <option value="">Select</option>
                <option value="Up-to-date">Up-to-date</option>
                <option value="Partially up-to-date">Partially up-to-date</option>
                <option value="Not vaccinated">Not vaccinated</option>
              </select>
            </div>

            <div className="group1">
              <label htmlFor="dogImage">Dog Image</label>
              <input type="file" id="dogImage" accept="image/*" />
            </div>

            <button>Preview Image</button>
            </div>

            {/* Terms and Conditions */}
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the terms and conditions.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">Sign Up</button>
           </div>
          
          </form>
        </div>

      </div>
    </div>
  )
}

export default page
