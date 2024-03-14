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
              Health Harmony's mission is to guide you <br />
              in recognizing the vital connection between your <br />
              physical state and overall well-being. Through intuitive <br />
              tracking and insightful analysis, we're dedicated <br />
              to enhancing your health, one day at a time.
            </p>
            <div className="button-container">
              <Button
                style={{ backgroundColor: '#98FB98', color: 'black' }}
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/register"
              >
                Sign Up
              </Button>
              <Button
                style={{ backgroundColor: '#98FB98', color: 'black' }}
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
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
