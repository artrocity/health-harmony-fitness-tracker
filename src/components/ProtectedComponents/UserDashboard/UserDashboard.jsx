// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Material UI
import { Grid, Typography } from '@mui/material';

// Import Custom CSS
import './UserDashboard.css';

function UserDashboard() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          {user && user.id ? <h1>Welcome Back, {user.name}!</h1> : ''}
          <Grid></Grid>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
