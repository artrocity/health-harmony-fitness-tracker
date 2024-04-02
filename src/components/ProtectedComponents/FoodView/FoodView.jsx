// Import 3rd Party Libraries
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
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
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Import Custom Components
import VerticalNav from '../VerticalNav/VerticalNav';

// Import Custom CSS
import './FoodView.css';

function FoodView() {
  const food = useSelector((state) => state.food);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [goalCalories, setGoalCalories] = useState(2200);
  const [goalPercentage, setGoalPercentage] = useState(0);

  // Function to fetch food
  const fetchFoodList = () => {
    if (user.id) {
      dispatch({ type: 'FETCH_FOOD', payload: user.id });
    }
  };

  // Fetch Food List on page load
  useEffect(() => {
    fetchFoodList();
  }, []);

  // Calculate percentage of total calories vs goal calories
  useEffect(() => {
    const newTotalCalories = food.reduce((acc, item) => acc + item.calories, 0);

    setTotalCalories(newTotalCalories);
    console.log('new total calories: ', totalCalories);

    const newGoalPercentage = [
      (newTotalCalories / goalCalories) * 100,
      100 - (newTotalCalories / goalCalories) * 100,
    ];

    setGoalPercentage(newGoalPercentage);
    console.log('goal percentage: ', goalPercentage);
  }, [food]);

  // Assign chart data and options
  const data = {
    datasets: [
      {
        data: goalPercentage,
        backgroundColor: ['#782cf6', '#000'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: -90,
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  // ENV variables for Key and APP ID
  const VITE_NUTRITIONIX_API_KEY = import.meta.env.VITE_NUTRITIONIX_API_KEY;
  const VITE_NUTRITIONIX_APP_ID = import.meta.env.VITE_NUTRITIONIX_APP_ID;

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

  // Function to format the current date as YYYY-MM-DD
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = `0${today.getMonth() + 1}`.slice(-2);
    const day = `0${today.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  // Handle adding food from query to database
  const addFood = (item) => {
    const foodDetails = {
      user_id: user.id,
      food: item.food_name,
      calories: item.nf_calories,
      date: getCurrentDate(),
    };

    dispatch({ type: 'ADD_FOOD', payload: foodDetails });
    setSnackbarOpen(true);
    setQuery('');
  };

  // Handle closing the snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div className="page-container">
        <div className="nav-container">
          <VerticalNav />
        </div>
        <div className="page-right-container">
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message="Food was successfully added to the database"
            action={
              <>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleCloseSnackbar}
                >
                  UNDO
                </Button>
              </>
            }
          />
          <div className="food-history-container">
            <h1 className="daily-calories-header">Daily Food Intake</h1>
            <div className="daily-calories-container">
              <p style={{ zIndex: 2 }}>
                <span>Calories</span> <br /> <br />
                Current: {Math.ceil(totalCalories)} <br /> <br /> Goal:{' '}
                {goalCalories}
              </p>
              <Doughnut data={data} options={options} />
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
              {foodItems.length > 0 && (
                <>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: 'center',
                      marginTop: '20px',
                      fontWeight: 'bold',
                    }}
                  >
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
                          <TableCell>Serving</TableCell>
                          <TableCell>Add Food</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {foodItems &&
                          foodItems.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.food_name}</TableCell>
                              <TableCell>
                                {Math.floor(item.nf_calories)}
                              </TableCell>
                              <TableCell>
                                {item.serving_qty} {item.serving_unit}
                              </TableCell>
                              <TableCell>
                                <Button onClick={() => addFood(item)}>
                                  Add
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodView;
