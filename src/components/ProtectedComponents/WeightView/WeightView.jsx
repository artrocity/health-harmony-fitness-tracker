// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Material UI

// Import Custom CSS
import './WeightView.css';

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
    labels: userWeightList.map((data) => {
      const date = new Date(data.date);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }),
    datasets: [
      {
        label: 'WEIGHT HISTORY',
        data: userWeightList.map((data) => parseFloat(data.current_weight)),
        fill: false,
        backgroundColor: 'rgb(75,192,192)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
      },
    ],
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
            <h1 className="weight-chart-header">Weight History</h1>
            <Line data={weightData} options={chartOptions} />
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
