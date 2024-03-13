// Import 3rd Party Libraries
import React from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

function FeaturesView() {
  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <div className="landing-page-container">
          <div>
            <p>Features View</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesView;
