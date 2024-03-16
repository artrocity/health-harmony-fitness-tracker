// Import 3rd Party Libraries
// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

function FoodView() {
  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <h1>Food View</h1>
        </div>
      </div>
    </>
  );
}

export default FoodView;
