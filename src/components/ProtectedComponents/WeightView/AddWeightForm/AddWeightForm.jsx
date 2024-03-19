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
      </div>
    </>
  );
}

export default AddWeightForm;
