// Import 3rd Party Libraries
// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

function WeightView() {
  return (
    <>
      <div className="dashboard-page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="dashboard-right-container">
          <h1>Weight View</h1>
        </div>
      </div>
    </>
  );
}

export default WeightView;
