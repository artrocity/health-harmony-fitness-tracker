// Import 3rd Party Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Material UI
import { Grid, Typography } from '@mui/material';

// Import Custom CSS and Images
import './UserDashboard.css';
import plantImage from './images/plant_based.avif';
import paleoImage from './images/paleo.avif';
import lowCarbImage from './images/low_carb.avif';

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
          <Grid
            container
            spacing={1}
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <h2>Calories Div</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>Weight Div</h2>
            </Grid>
            <Grid item xs={12}>
              <h2>Activity Div</h2>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{ textAlign: 'left', marginBottom: '0px' }}
              >
                Diet Plans
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <a
                href="https://www.health.harvard.edu/blog/what-is-a-plant-based-diet-and-why-should-you-try-it-2018092614760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="diet-plan-container"
                  style={{ backgroundImage: `url(${plantImage})` }}
                >
                  <h2 className="diet-header">Plant Based</h2>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a
                href="https://www.healthline.com/nutrition/paleo-diet-meal-plan-and-menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="diet-plan-container"
                  style={{ backgroundImage: `url(${paleoImage})` }}
                >
                  <h2 className="diet-header">Paleo</h2>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a
                href="https://www.healthline.com/nutrition/low-carb-diet-meal-plan-and-menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="diet-plan-container"
                  style={{ backgroundImage: `url(${lowCarbImage})` }}
                >
                  <h2 className="diet-header">Low-Carb</h2>
                </div>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
