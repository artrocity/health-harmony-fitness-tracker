// Import 3rd Party Libraries
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';
import calcBMI from './CalculateBMI';

// Import MaterialUI
import { TextField, Button, Grid, InputAdornment } from '@mui/material';

// Import Custom CSS and images
import './UserProfileView.css';
import profileImage from './images/profile.webp';

function UserProfileView() {
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState({
    name: '',
    height: '',
    weight: '',
    goalWeight: '',
  });

  const user = useSelector((state) => state.user);

  const bmi = calcBMI(user.height, user.weight);

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <>
      <div className="dashboard-page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="dashboard-right-container">
          {isEdit ? (
            <div className="user-profile-container">
              <div className="user-details">
                <img
                  src={profileImage}
                  alt="profile image"
                  className="user-profile-image"
                />
                <h1>Edit your profile, {user.name}</h1>
                <form>
                  <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        fullWidth
                        value={editUser.name}
                        onChange={handleChange}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Height"
                        name="height"
                        type="number"
                        variant="outlined"
                        value={editUser.height}
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              Inches
                            </InputAdornment>
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
                        value={editUser.weight}
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
                        value={editUser.goalWeight}
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
                  </Grid>
                  <Button
                    variant="outlined"
                    size="large"
                    style={{
                      backgroundColor: 'blue',
                      color: 'white',
                      marginTop: '10px',
                    }}
                    sx={{
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                    onClick={handleEditToggle}
                  >
                    Save
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="user-profile-container">
              <div className="user-details">
                <img
                  src={profileImage}
                  alt="profile image"
                  className="user-profile-image"
                />
                <h1>Welcome, {user.name}</h1>
                <hr />
                <h2 className="user-header">User Details</h2>
                <p className="user-info-paragraph">Name: {user.name}</p>
                <p className="user-info-paragraph">Height: {user.height}</p>
                <p className="user-info-paragraph">Weight: {user.weight}</p>
                <p className="user-info-paragraph">
                  Goal Weight: {user.goal_weight}
                </p>
                <Button
                  variant="outlined"
                  style={{ backgroundColor: '#782cf6', color: 'white' }}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                  size="large"
                  onClick={handleEditToggle}
                >
                  Edit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfileView;
