// Import 3rd party libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Import custom components
import VerticalNav from '../../VerticalNav/VerticalNav';

// Import Material UI
// Form
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputLabel,
  InputAdornment,
} from '@mui/material';

// Table
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function AddWeightForm() {
  const weightHistoryList = useSelector((state) => state.userWeight);
  const user = useSelector((state) => state.user);
  const [newWeight, setNewWeight] = useState({
    user_id: user.id,
    current_weight: '',
    date: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  // Format Date
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toISOString().split('T')[0];
  };

  // Handle User Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewWeight({ ...newWeight, [name]: value });
  };

  // Navigate back to main weight page
  const handleGoBack = () => {
    history.push('/user/weight');
  };

  // Handle Form Submission (Submit Button)
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: 'ADD_WEIGHT', payload: newWeight });

    setNewWeight({
      user_id: user.id,
      current_weight: '',
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
          <div className="weight-table-container">
            <Typography
              variant="h1"
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bolder',
                margin: '20px',
              }}
            >
              Weight History
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ maxWidth: '700px', margin: '20px auto' }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ textAlign: 'center', fontWeight: 'bolder' }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{ textAlign: 'center', fontWeight: 'bolder' }}
                    >
                      Weight(lbs)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weightHistoryList &&
                    weightHistoryList.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell align="center">
                          {formatDate(entry.date)}
                        </TableCell>
                        <TableCell align="center">
                          {entry.current_weight}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="weight-form-container">
            <Typography
              variant="h2"
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bolder',
                margin: '20px',
              }}
            >
              Add Weight Entry
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12} md={6}>
                  <InputLabel>Date</InputLabel>
                  <TextField
                    name="date"
                    variant="outlined"
                    type="date"
                    value={newWeight.date}
                    onChange={handleChange}
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel>Weight</InputLabel>
                  <TextField
                    name="current_weight"
                    variant="outlined"
                    type="number"
                    value={newWeight.current_weight}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">lbs</InputAdornment>
                      ),
                    }}
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    onClick={handleGoBack}
                    sx={{
                      backgroundColor: '#782cf6',
                      color: 'white',
                      '&:hover': { scale: '1.2', backgroundColor: '#782cf6' },
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    type="submit"
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

export default AddWeightForm;
