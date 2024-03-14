// Import 3rd Party Libraries
import React, { useEffect } from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Custom CSS
import './AboutView.css';

// Import Image
import aboutImage from './images/self_portrait.jpg';

function AboutView() {
  useEffect(() => {
    // Store the current body background style
    const originalBackground = document.body.style.background;

    // Change the body background style for this component
    document.body.style.background = 'solid black';

    // Revert to the original body background style when the component unmounts
    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <div className="about-page-container">
          <div>
            <h1 className="about-page-header">Health Harmony</h1>
            <p className="about-page-paragraph">
              I am Ryan, the Founder of Health Harmony, a pioneering
              organization committed to enhancing your quality of life. We have
              innovated within the fitness tracker industry, crafting a
              harmonious balance between dietary requirements, physical
              activity, weight management, and symptom tracking. Our mission is
              to revolutionize your wellness journey, ensuring a holistic
              approach to health and well-being.
            </p>
          </div>
          <div>
            <img src={aboutImage} alt="self portrait" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutView;
