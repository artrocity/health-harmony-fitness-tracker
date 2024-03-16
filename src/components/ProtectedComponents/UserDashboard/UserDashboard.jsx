// Import 3rd Party Libraries
// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Custom CSS
import './UserDashboard.css';

function UserDashboard() {
  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <h1>User Dashboard</h1>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
