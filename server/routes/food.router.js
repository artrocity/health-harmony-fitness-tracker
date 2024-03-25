// Import 3rd party modules
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Function to format the current date as YYYY-MM-DD
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};

const todaysDate = getCurrentDate();

// GET ROUTES
router.get('/', (req, res) => {
  const dbQuery = `SELECT * FROM food WHERE date = $1;`;

  pool
    .query(dbQuery, [todaysDate])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN GET FOOD ROUTE: ', error);
      res.sendStatus(500);
    });
});

// POST ROUTES
router.post('/', (req, res) => {});

// Export Router
module.exports = router;
