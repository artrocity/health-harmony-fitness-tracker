// Import 3rd Party Libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

//Import ChartJS

// Import Custom CSS
import './ExerciseView.css';

function ExerciseView() {
  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <h1>
            This will be a circle graph of calories eaten vs remaining or
            something similar
          </h1>

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
            <form>
              <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12} md={4}>
                  <InputLabel>Exercise Type</InputLabel>
                  <TextField
                    name="exercise"
                    variant="outlined"
                    type="text"
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputLabel>Calories Burned</InputLabel>
                  <TextField
                    name="calories"
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
