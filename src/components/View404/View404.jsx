// Import 3rd Party Libraries
import React from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Image
import errorImage from './images/404.png';

// Import Custom CSS
import './View404.css';

function View404() {
  return (
    <div className="container">
      <HorizontalNav />
      <div className="view404-page-container">
        <h1 className="view404-page-header">
          OOPS! <br /> It looks like you're lost!
        </h1>
        <p className="view404-page-paragraph">
          Either the page you're trying to access doesn't exist <br /> or you
          don't have authorized access to view it!
        </p>
      </div>
    </div>
  );
}

export default View404;
