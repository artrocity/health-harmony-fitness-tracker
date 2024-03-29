// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import MaterialUI
// Form
import {
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
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
import './SymptomView.css';

function SymptomView() {
  const [addSymptom, setAddSymptom] = useState({
    user_id: '',
    symptom_id: '',
    severity: 1,
    date_began: '',
  });
  const user = useSelector((state) => state.user);
  const symptomsList = useSelector((state) => state.symptoms);
  const userSymptomsList = useSelector((state) => state.userSymptoms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SYMPTOMS' });
    dispatch({ type: 'FETCH_USER_SYMPTOMS', payload: user.id });

    setAddSymptom((symptom) => ({
      ...symptom,
      user_id: user.id,
    }));
  }, [dispatch, user.id]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toISOString().split('T')[0];
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddSymptom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: 'ADD_SYMPTOM', payload: addSymptom });

    setAddSymptom({
      symptom_id: '',
      date_began: '',
      severity: 1,
      user_id: user.id,
    });
  };

  const handleDelete = (symptom) => {
    console.log('SYMPTOM TO BE DELETED ID: ', symptom);
    dispatch({ type: 'DELETE_SYMPTOM', payload: symptom });
  };

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <div className="symptoms-container">
            <div className="symptoms-table-container">
              <Typography
                variant="h6"
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 'bolder',
                  margin: '20px',
                }}
              >
                Symptom History
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  maxWidth: '700px',
                  margin: '20px auto',
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Symptom</TableCell>
                      <TableCell>Severity</TableCell>
                      <TableCell>Date Began</TableCell>
                      <TableCell>Why?</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userSymptomsList.map((symptom) => (
                      <TableRow key={symptom.id}>
                        <TableCell>{symptom.symptom_name}</TableCell>
                        <TableCell>{symptom.severity}</TableCell>
                        <TableCell>{formatDate(symptom.date_began)}</TableCell>
                        <TableCell>
                          <Button size="small">View Correlation</Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            sx={{ color: 'red' }}
                            onClick={() => handleDelete(symptom)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="symptoms-form-container">
              <Typography
                variant="h6"
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 'bolder',
                  margin: '20px',
                }}
              >
                Add a Symptom
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} wrap="wrap">
                  <Grid item xs={12} sm={4}>
                    <InputLabel>Symptom</InputLabel>
                    <FormControl
                      variant="outlined"
                      style={{
                        width: '100%',
                        backgroundColor: 'white',
                        marginBottom: '16px',
                      }}
                    >
                      <Select
                        name="symptom_id"
                        value={addSymptom.symptom_id}
                        onChange={handleChange}
                        displayEmpty
                        required
                      >
                        <MenuItem value="" disabled>
                          Select a Symptom
                        </MenuItem>
                        {symptomsList &&
                          symptomsList.map((symptom) => (
                            <MenuItem key={symptom.id} value={symptom.id}>
                              {symptom.symptom_name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputLabel>Date Began</InputLabel>
                    <TextField
                      type="date"
                      name="date_began"
                      variant="outlined"
                      value={addSymptom.date_began}
                      onChange={handleChange}
                      style={{ backgroundColor: 'white' }}
                      required
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputLabel>Severity Level (1-10)</InputLabel>
                    <TextField
                      type="number"
                      name="severity"
                      variant="outlined"
                      value={addSymptom.severity}
                      onChange={handleChange}
                      style={{ backgroundColor: 'white' }}
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      required
                    ></TextField>
                  </Grid>
                </Grid>
                <div className="symptom-button-container">
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
        </div>
      </div>
    </>
  );
}

export default SymptomView;
