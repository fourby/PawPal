"use client";

import React from "react";


const Sidebar = ({ onFeatureClick }) => {
  return (
    <div className="sidebar-container">
      <input type="checkbox" id="sidebar-toggle" className="toggle-checkbox" />

      <div className="sidebar">

        <div className="topmost">
          <div className="LogoName"><img src="/logo_dog_paw.png" alt="Logo" title="PawPal" className="PawPal_logo"/><div>PawPal</div></div>
          
          <label htmlFor="sidebar-toggle" className="menu-button">
            <img src="/Back_1.png" alt="menu" title="Collapse"/>
          </label>

        </div>

        <ul className="menu">
          <li onClick={() => onFeatureClick("My Dogs")} title="My Dogs">
            <i className="icon">🐾</i>
            <span>My Dogs</span>
          </li>
          <li onClick={() => onFeatureClick("Subscriptions")} title="Subscriptions">
            <i className="icon">📜</i>
            <span>Subscriptions</span>
          </li>
          <li onClick={() => onFeatureClick("Training Services")} title="Training Services">
            <i className="icon">🎓</i>
            <span>Training Services</span>
          </li>
          <li onClick={() => onFeatureClick("Veterinary Services")} title="Veterinary Services">
            <i className="icon">🐕‍🦺</i>
            <span>Veterinary Services</span>
          </li>
          <li onClick={() => onFeatureClick("Boarding & Grooming")} title="Boarding & Grooming">
            <i className="icon">🏠</i>
            <span>Boarding & Grooming</span>
          </li>
          <li onClick={() => onFeatureClick("Bookings")} title="Bookings">
            <i className="icon">🚶‍♂️</i>
            <span>Bookings</span>
          </li>
          <li onClick={() => onFeatureClick("Dog Walking & Sitting")} title="Dog Walking & Sitting">
            <i className="icon">⚙️</i>
            <span>Dog Walking & Sitting</span>
          </li>
          <li onClick={() => onFeatureClick("Community Connection")} title="Community Connection">
            <i className="icon">🌐</i>
            <span>Community Connection</span>
          </li>
        </ul>

        <div className="profile">
          <img
            src="https://via.placeholder.com/100"
            alt="User Profile"
            className="profile-pic"
          />
          <p className="UserName_mail">Username<br />mail@mail.com</p>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
