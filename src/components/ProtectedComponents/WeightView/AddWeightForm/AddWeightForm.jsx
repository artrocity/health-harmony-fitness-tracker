// Import 3rd party libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

// Import Custom CSS

function AddWeightForm() {
  const weightHistoryList = useSelector((state) => state.userWeight);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toISOString().split('T')[0];
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
                    <TableCell>Date</TableCell>
                    <TableCell>Weight(lbs)</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weightHistoryList &&
                    weightHistoryList.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{formatDate(entry.date)}</TableCell>
                        <TableCell>{entry.current_weight}</TableCell>
                        <TableCell>
                          <Button>Edit</Button>
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
            <form>
              <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12} md={6}>
                  <InputLabel>Date</InputLabel>
                  <TextField
                    name="date"
                    variant="outlined"
                    type="date"
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel>Weight</InputLabel>
                  <TextField
                    name="weight"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">lbs</InputAdornment>
                      ),
                    }}
                    style={{ backgroundColor: 'white' }}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
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
