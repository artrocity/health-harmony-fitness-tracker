// Import 3rd Party Libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Import Material UI
// Table
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

// Form
import { Grid, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

function FoodView() {
  const [query, setQuery] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // ENV Variables for Key and APP ID
  const VITE_NUTRITIONIX_API_KEY = import.meta.env.VITE_NUTRITIONIX_API_KEY;
  const VITE_NUTRITIONIX_APP_ID = import.meta.env.VITE_NUTRITIONIX_APP_ID;
  console.log('API KEY: ', VITE_NUTRITIONIX_API_KEY);
  console.log('APP ID: ', VITE_NUTRITIONIX_APP_ID);

  // Handle the search of food items from user query
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        { query: query },
        {
          headers: {
            'x-app-id': VITE_NUTRITIONIX_APP_ID,
            'x-app-key': VITE_NUTRITIONIX_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      setFoodItems(response.data.foods);
    } catch (error) {
      console.error('Error fetching food data:', error);
      setFoodItems([]);
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <div className="food-history-container">
            <h1>Food History</h1>
          </div>
          <div className="food-search-container">
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Add Food
            </Typography>
            <form onSubmit={handleSearch}>
              <Grid container spacing={2} wrap="wrap">
                <Grid item xs={12}>
                  <TextField
                    label="Search..."
                    type="text"
                    variant="outlined"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    style={{ backgroundColor: 'white', width: '30%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    required
                  ></TextField>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className="food-results-container">
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Results
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ maxWidth: '700px', margin: '20px auto' }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Food Name</TableCell>
                    <TableCell>Food Calories</TableCell>
                    <TableCell>Add Food</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foodItems &&
                    foodItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.food_name}</TableCell>
                        <TableCell>{item.nf_calories}</TableCell>
                        <TableCell>
                          <Button>Add</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodView;
