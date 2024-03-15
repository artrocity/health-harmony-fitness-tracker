// Import 3rd Party Libraries
import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Import Custom Image
import logoImage from './Images/Logo.png';

function HorizontalNav() {
  const location = useLocation();

  // Function to determine if the route is active
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={RouterLink} to="/home">
            <img
              src={logoImage}
              alt="Logo"
              style={{ maxWidth: 120, maxHeight: '100%' }}
            />
          </Button>
        </Typography>
        {['home', 'features', 'about', 'contact', 'login'].map((path) => (
          <Button
            key={path}
            color="inherit"
            component={RouterLink}
            to={`/${path}`}
            sx={{
              '&:hover': { backgroundColor: '#782cf6' },
              backgroundColor: isActive(`/${path}`) ? '#782cf6' : 'transparent',
              margin: '0 4px',
            }}
          >
            {/* Capitalize the first letter */}
            {path.charAt(0).toUpperCase() + path.slice(1)}{' '}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default HorizontalNav;
