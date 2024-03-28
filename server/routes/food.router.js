// Import 3rd party modules
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Function to format the current date as YYYY-MM-DD
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};

// GET ROUTES
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const todaysDate = getCurrentDate();
  const user_id = req.params.id;
  const dbQuery = `SELECT * FROM food WHERE date = $1 AND user_id = $2;`;

  pool
    .query(dbQuery, [todaysDate, user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN GET FOOD ROUTE: ', error);
      res.sendStatus(500);
    });
});

// POST ROUTES
router.post('/', rejectUnauthenticated, (req, res) => {
  const { user_id, food, calories, date } = req.body;
  const dbQuery = `
    INSERT INTO food (user_id, food, calories, date)
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(dbQuery, [user_id, food, calories, date])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR IN POST FOOD ROUTE: ', error);
      res.sendStatus(500);
    });
});

// Export Router
module.exports = router;
