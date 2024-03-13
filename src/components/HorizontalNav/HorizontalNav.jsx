// Installed 3rd Party
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function HorizontalNav() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#782CF6' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={RouterLink} to="/home">
            Logo
          </Button>
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          Features
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          Contact
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default HorizontalNav;
