// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
  const foodList = useSelector((store) => store.food);
  const weightList = useSelector((store) => store.userWeight);
  const exerciseList = useSelector((store) => store.exercise);
  console.log('FOOD: ', foodList);
  console.log('weight: ', weightList);
  console.log('exercise: ', exerciseList);

  const dispatch = useDispatch();

  // Initialize user exercise data on load
  useEffect(() => {
    if (user.id) {
      dispatch({ type: 'FETCH_USER_EXERCISE', payload: user.id });
      dispatch({ type: 'FETCH_FOOD', payload: user.id });
      dispatch({ type: 'FETCH_USER_WEIGHT', payload: user.id });
    }
  }, []);

  const todaysCalories = foodList.reduce((acc, item) => acc + item.calories, 0);

  // Obtain the last weight entry from the weight list and store it in a variable
  const currentWeightData = weightList[weightList.length - 1];
  let currentWeight = undefined;
  if (currentWeightData) {
    currentWeight = currentWeightData.current_weight;
  }

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          {user && user.id ? <h1>Welcome Back, {user.name}!</h1> : ''}
          <div className="dashboard-container">
            <div className="summary-container">
              <Grid
                container
                spacing={1}
                wrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <div className="dashboard-calories-container">
                    <h2>Calories Consumed Today</h2>
                    <p>{Math.ceil(todaysCalories)}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="dashboard-weight-container">
                    <h2>Last Weigh-In</h2>
                    <p>{currentWeight}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sx={{ margin: '10px auto' }}>
                  <div className="dashboard-activity-container">
                    <h2>Activity Div</h2>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="diet-container">
              <Grid container spacing={1} wrap="wrap" flexDirection="column">
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
                    className="diet-external-link"
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
                    className="diet-external-link"
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
                    className="diet-external-link"
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
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
