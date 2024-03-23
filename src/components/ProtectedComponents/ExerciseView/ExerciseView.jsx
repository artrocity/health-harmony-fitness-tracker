// Import 3rd Party Libraries
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Material UI
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputLabel,
  Input,
} from '@mui/material';

// Import Custom CSS
import './ExerciseView.css';

function ExerciseView() {
  const user = useSelector((state) => state.user);
  const exerciseList = useSelector((state) => state.exercise);
  const dispatch = useDispatch();

  const [newExercise, setNewExercise] = useState({
    user_id: user.id,
    exercise: '',
    calories_burned: '',
    date: '',
  });

  // Initialize user exercise data on load
  useEffect(() => {
    if (user.id) {
      dispatch({ type: 'FETCH_USER_EXERCISE', payload: user.id });
    }
  }, []);

  // Configure Chart.js for Bar Graph
  const chartData = {
    labels: exerciseList.map((data) => {
      const date = new Date(data.date);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }),
    datasets: [
      {
        label: 'Calories Burned',
        data: exerciseList.map((data) => data.calories_burned),
        backgroundColor: 'rgba(120, 44, 246, 0.8)',
        borderColor: 'rgba(120, 44, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Calories Burned',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  // Handle use input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  // Form submission to add exercise to the database
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: 'ADD_USER_EXERCISE', payload: newExercise });

    setNewExercise({
      user_id: user.id,
      exercise: '',
      calories_burned: '',
      date: '',
    });
  };

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <div className="chart-container">
            <Typography
              variant="h6"
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bolder',
                margin: '20px',
              }}
            >
              Exercise History
            </Typography>
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
          <div className="add-weight-form-container">
            <Typography
              variant="h6"
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bolder',
                margin: '20px',
              }}
            >
              Add an Exercise
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12} md={4}>
                  <InputLabel>Exercise Type</InputLabel>
                  <TextField
                    name="exercise"
                    value={newExercise.exercise}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputLabel>Calories Burned</InputLabel>
                  <TextField
                    name="calories_burned"
                    value={newExercise.calories_burned}
                    onChange={handleChange}
                    variant="outlined"
                    type="number"
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputLabel>Date</InputLabel>
                  <TextField
                    name="date"
                    value={newExercise.date}
                    onChange={handleChange}
                    variant="outlined"
                    type="date"
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    type="submit"
                    size="large"
                    sx={{
                      backgroundColor: '#782cf6',
                      color: 'white',
                      '&:hover': { scale: '1.2', backgroundColor: '#782cf6' },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseView;
