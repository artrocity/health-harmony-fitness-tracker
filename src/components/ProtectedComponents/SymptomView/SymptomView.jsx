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
  InputLabel,
} from '@mui/material';

// Import Custom CSS
import './SymptomView.css';

function SymptomView() {
  const [addSymptom, setAddSymptom] = useState({
    symptom: '',
    severity: '',
    dateBegan: '',
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
                    <Select
                      name="symptom"
                      value={addSymptom.symptom}
                      onChange={handleChange}
                      label="Symptom"
                    >
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
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SymptomView;
