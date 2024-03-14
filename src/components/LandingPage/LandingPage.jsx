// Import 3rd Party Libraries
import React from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Custom CSS
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <div className="landing-page-container">
          <div className="clip-triangle">
            <h2 className="landing-page-header">Be Fit</h2>
            <h2 className="landing-page-header">Be Healthy</h2>
            <h2 className="landing-page-header">Be In Control</h2>
            <p className="landing-page-paragraph">
              Health Harmony's fitness tracker allows you to take control of
              <br />
              your life. We are here to help you understand the correlation
              <br />
              between how you feel and your daily fitness
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
