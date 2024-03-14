// Import 3rd Party Libraries
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Material UI CSS
import Button from '@mui/material/Button';

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
              Health Harmony's fitness tracker empowers <br />
              you to master your wellness journey. Our mission <br />
              is to guide you in recognizing the vital connection <br /> between
              your physical state and overall well-being. <br />
              Through intuitive tracking and insightful analysis, <br />
              we're dedicated to enhancing your health, one day at a time.
            </p>
            <div className="button-container">
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/register"
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download our App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
