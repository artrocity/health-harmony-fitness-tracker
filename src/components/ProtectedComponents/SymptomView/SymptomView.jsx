// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import MaterialUI

// Import Custom CSS
import './SymptomView.css';

function SymptomView() {
  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <h1>Symptoms View</h1>
        </div>
      </div>
    </>
  );
}

export default SymptomView;
