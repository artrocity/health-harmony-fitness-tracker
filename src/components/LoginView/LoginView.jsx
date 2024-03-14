// Import 3rd Party Libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Link as RouterLink } from 'react-router-dom';

// Import Logo Image
import logoImage from './images/loginLogo.png';

// Import Material UI
import { TextField, Button, Grid, Typography } from '@mui/material';

// Import Custom CSS
import './LoginView.css';

function LoginView() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="login-page-container">
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
        <form onSubmit={handleSubmit} style={{ width: '30%' }}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ textAlign: 'center', fontSize: '30px' }}
              >
                Welcome Back
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={user.username}
                required
                style={{
                  backgroundColor: 'white',
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                value={user.password}
                required
                style={{
                  backgroundColor: 'white',
                }}
                type="password"
              ></TextField>
            </Grid>
            <div className="login-button-container">
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
                Login
              </Button>
            </div>
          </Grid>
        </form>
        <p className="login-page-paragraph">
          Not a member yet? Click{' '}
          <Link to="/register" className="login-register-link">
            HERE
          </Link>{' '}
          to register
        </p>
      </div>
    </>
  );
}

export default LoginView;
