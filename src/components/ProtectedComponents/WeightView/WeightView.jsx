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
        backgroundColor: 'rgb(120,44,246)',
        borderColor: 'rgba(120, 44, 246, 0.8)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: 'black',
        },
      },
      y: {
        grid: {
          color: 'black',
        },
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  // Calculate time until goal weight
  const currentWeightData = userWeightList[userWeightList.length - 1];
  const currentWeight = currentWeightData.current_weight;
  const goalWeight = user.goal_weight;

  function calculateGoalTime(currentWeight, goalWeight) {
    // Convert weights to numbers to ensure accurate calculations
    const current = parseFloat(currentWeight);
    const goal = parseFloat(goalWeight);
    const weightToLose = current - goal;

    if (weightToLose < 0) {
      return 'Goal weight already achieved or is less than current weight.';
    }

    const poundsPerWeek = 2;
    const weeksToLose = weightToLose / poundsPerWeek;
    const roundedWeeks = Math.ceil(weeksToLose);

    return roundedWeeks;
  }

  const weeksToLose = calculateGoalTime(currentWeight, goalWeight);

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
          <div className="weight-details-container">
            <h2>Weight Details</h2>
            <p>Current Weight: {currentWeight}</p>
            <p>Goal Weight: {user.goal_weight}</p>
            <p>
              If you lose 2lbs per week, it will take you{' '}
              <span className="weeks-left-span">{weeksToLose}</span> weeks to
              reach your goal!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeightView;
