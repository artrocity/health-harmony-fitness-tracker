// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

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

  // Configure Chart JS parameters
  const weightData = {
    labels: userWeightList.map((data) => data.date),
    datasets: {
      label: 'WEIGHT HISTORY',
      data: userWeightList.map((data) => data.current_weight),
      fill: false,
      backgroundColor: 'rgb(75,192,192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <div className="weight-chart-container">
            <p>{JSON.stringify(userWeightList)}</p>
            {/* <Line data={weightData} options={chartOptions} /> */}
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
