// Import 3rd Party Libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Material UI
import { Button } from '@mui/material';

// Import Custom CSS
import './WeightView.css';

function WeightView() {
  const user = useSelector((state) => state.user);
  const userWeightList = useSelector((state) => state.userWeight);
  const dispatch = useDispatch();
  const history = useHistory();

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
        maxHeight: '300px',
        maintainAspectRatio: false,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
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
  let currentWeight = undefined;
  if (currentWeightData) {
    currentWeight = currentWeightData.current_weight;
  }
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

  // Handle add weight click
  const handleAddClick = () => {
    history.push('/user/weight/add');
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
            <div className="chart-container">
              <Line data={weightData} options={chartOptions} />
            </div>
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
          <div className="weight-button-container">
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                backgroundColor: '#782cf6',
                '&:hover': { backgroundColor: '#782cf6', scale: '1.1' },
              }}
              onClick={handleAddClick}
            >
              Add Weight
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeightView;
