// Import 3rd Party Libraries
import React, { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Images
import logoImage from '../LoginView/images/loginLogo.png';

// Import MaterialUI CSS
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

// Import Custom CSS
import './RegisterView.css';

function RegisterView() {
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    password: '',
    height: '',
    weight: '',
    goalWeight: '',
    fitnessLevel: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New User: ', newUser);
    // Submit the information

    // Log the user in with the provided information
  };

  return (
    <>
      <div className="register-page-container">
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          className="login-logo-button"
        >
          <img
            src={logoImage}
            alt="Logo"
            style={{
              maxWidth: '100px',
              maxHeight: '100%',
              margin: '3rem auto',
            }}
          />
        </Button>
        <div className="register-form-container">
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              fontSize: '30px',
              marginBottom: '20px',
            }}
          >
            Welcome!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} wrap="wrap">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={newUser.name}
                  onChange={handleChange}
                  style={{ backgroundColor: 'white' }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Username"
                  name="username"
                  variant="outlined"
                  value={newUser.username}
                  onChange={handleChange}
                  style={{ backgroundColor: 'white' }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  value={newUser.password}
                  onChange={handleChange}
                  style={{ backgroundColor: 'white' }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  variant="outlined"
                  type="password"
                  style={{ backgroundColor: 'white' }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Height"
                  name="height"
                  type="number"
                  variant="outlined"
                  value={newUser.height}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Inches</InputAdornment>
                    ),
                  }}
                  style={{ backgroundColor: 'white' }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Weight"
                  name="weight"
                  type="number"
                  variant="outlined"
                  value={newUser.weight}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lbs</InputAdornment>
                    ),
                  }}
                  style={{ backgroundColor: 'white' }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Goal Weight"
                  name="goalWeight"
                  type="number"
                  variant="outlined"
                  value={newUser.goalWeight}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lbs</InputAdornment>
                    ),
                  }}
                  style={{ backgroundColor: 'white' }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    marginBottom: '16px',
                  }}
                >
                  <Select
                    labelId="fitness-level-select"
                    name="fitnessLevel"
                    id="fitness-level-select"
                    value={newUser.fitnessLevel}
                    onChange={handleChange}
                    displayEmpty
                    style={{ backgroundColor: 'white' }}
                    required
                  >
                    <MenuItem value="" disabled>
                      Select your fitness level
                    </MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <div className="register-button-container">
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  marginTop: '20px',
                  backgroundColor: '#782cf6',
                  color: 'white',
                }}
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterView;
