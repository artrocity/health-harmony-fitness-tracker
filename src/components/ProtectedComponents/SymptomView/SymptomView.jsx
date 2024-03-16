// Import 3rd Party Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import MaterialUI
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

// Import Custom CSS
import './SymptomView.css';

function SymptomView() {
  const [addSymptom, setAddSymptom] = useState({
    symptom: '',
    dateBegan: '',
    severity: 1,
  });
  const symptomsList = useSelector((state) => state.symptoms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SYMPTOMS' });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddSymptom({ ...addSymptom, [name]: value });
  };

  const handleSubmit = () => {
    console.log('SUBMITTING FORM');
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
              <h1>This will be a table of previously added symptoms</h1>
            </div>
            <div className="symptoms-form-container">
              <Typography
                variant="h6"
                style={{
                  textAlign: 'center',
                  fontSize: '30px',
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
                        name="symptom"
                        value={addSymptom.symptom}
                        onChange={handleChange}
                        displayEmpty
                        required
                      >
                        <MenuItem value="" disabled>
                          Select a Symptom
                        </MenuItem>
                        {symptomsList &&
                          symptomsList.map((symptom) => (
                            <MenuItem
                              key={symptom.id}
                              value={symptom.symptom_name}
                            >
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
                      name="dateBegan"
                      variant="outlined"
                      value={addSymptom.dateBegan}
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
