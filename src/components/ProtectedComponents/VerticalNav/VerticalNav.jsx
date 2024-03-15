// Import Modules/Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from '@mui/material';

// Import Material UI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ScaleIcon from '@mui/icons-material/Scale';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

// Import Custom Image
import logoImage from '../../HorizontalNav/Images/Logo.png';

function VerticalNav() {
  const location = useLocation();
  const dispatch = useDispatch();

  // Function to determine if route is active
  const isActive = (pathname) => location.pathname === pathname;

  const handleLogout = () => {
    console.log('Logging out');
    dispatch({
      type: 'LOGOUT',
    });
  };

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/user/dashboard' },
    { text: 'Food', icon: <RestaurantIcon />, path: '/user/food' },
    { text: 'Exercise', icon: <FitnessCenterIcon />, path: '/user/exercise' },
    { text: 'Weight', icon: <ScaleIcon />, path: '/user/weight' },
    { text: 'Symptoms', icon: <HealthAndSafetyIcon />, path: '/user/symptoms' },
    { text: 'User Profile', icon: <AccountBoxIcon />, path: '/user/profile' },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
      }}
      role="presentation"
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={RouterLink} to="/home">
          <img
            src={logoImage}
            alt="Logo"
            style={{
              maxWidth: 120,
              maxHeight: '100%',
              marginLeft: '10px',
              marginTop: '20px',
              marginBottom: '40px',
            }}
          />
        </Button>
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            selected={isActive(item.path)}
            sx={{
              color: 'white',
              marginLeft: '10px',
              marginTop: '5px',
              '&:hover': { backgroundColor: '#782cf6' },
              backgroundColor: isActive(item.path) ? '#782cf6' : 'transparent',
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          button
          key="Logout"
          sx={{
            color: '#fff',
            marginLeft: '10px',
            marginTop: '5px',
            '&:hover': { backgroundColor: '#782cf6' },
          }}
          onClick={handleLogout}
        >
          <ListItemIcon sx={{ color: '#fff' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
}

export default VerticalNav;
