// Import 3rd Party Libraries
import React from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

function RegisterView() {
  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <div className="landing-page-container">
          <div>
            <p>Register Page</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterView;
