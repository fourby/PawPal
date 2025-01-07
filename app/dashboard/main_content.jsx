import React from 'react';

const MainContent = ({ selectedFeature }) => {
  return (
    <div className="main-content">
      <h1>{selectedFeature}</h1>
    </div>
  );
};

export default MainContent;
