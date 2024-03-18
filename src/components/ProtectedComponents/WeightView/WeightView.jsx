// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

function WeightView() {
  const user = useSelector((state) => state.user);
  const userWeightList = useSelector((state) => state.userWeight);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch({ type: 'FETCH_USER_WEIGHT', payload: user.id });
    }
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <div className="weight-chart-container">
            <h1>This needs to be a chart of weight history using chart.js</h1>
          </div>
          <div>
            <h2>This will be a form to add weight to history</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeightView;
