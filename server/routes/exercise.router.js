// Import 3rd party modules
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ROUTES
router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const dbQuery =
    'SELECT * FROM exercise WHERE user_id = $1 ORDER BY date ASC LIMIT 5;';

  pool
    .query(dbQuery, [userID])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR FETCHING EXERCISE DATA - GET REQUEST: ', error);
      res.sendStatus(500);
    });
});

// POST ROUTES
router.post('/', (req, res) => {
  const { user_id, exercise, calories_burned, date } = req.body;
  const dbQuery = `INSERT INTO exercise(user_id, exercise, calories_burned, date)
  VALUES($1, $2, $3, $4);`;

  pool
    .query(dbQuery, [user_id, exercise, calories_burned, date])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR INSIDE SERVER POST ROUTE - ADDING EXERCISE: ', error);
      res.sendStatus(500);
    });
});

// Export Router
module.exports = router;
