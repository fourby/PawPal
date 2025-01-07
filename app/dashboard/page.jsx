"use client";
//import dynamic from "next/dynamic";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainContent from "./main_content";
import "./sidebar.css";

const DashboardPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(
    "Welcome to PawPal Dashboard"
  );

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="dashboard">
      <Sidebar onFeatureClick={handleFeatureClick} />
      <MainContent selectedFeature={selectedFeature} />
    </div>
  );
};

//export default dynamic (() => Promise.resolve(DashboardPage), {ssr: false})
export default DashboardPage
