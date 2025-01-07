import React from 'react';

const PawpalFeatures = () => {
  return (
    <div className="pawpal_features_section">

      <div className="pawpal_features_item1">
        <div className="features_heading">PAWPAL FEATURES</div>
        <div className="features_subheading">Everything your dog needs in one place!</div>
      </div>

      <div className="pawpal_features_item2">

        <div className="feature_card">
          <img src="/image_1.png" alt="Dog health tracking" className="feature_image" />
          <div className="feature_content">
            <h3>Dog health tracking</h3>
            <p>Keep a close eye on your dog's health and milestones.</p>
          </div>
        </div>

        <div className="feature_card">
          <img src="/background3.jpg" alt="Training resources" className="feature_image" />
          <div className="feature_content">
            <h3>Training resources</h3>
            <p>Access a wealth of training materials for your dog.</p>
          </div>
        </div>

        <div className="feature_card">
          <img src="/pexels-julia-barthold-61520-1322737.jpg" alt="Dog walking and sitting" className="feature_image" />
          <div className="feature_content">
            <h3>Dog walking & sitting</h3>
            <p>Flexible and reliable options for dog walking and sitting.</p>
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default PawpalFeatures;
