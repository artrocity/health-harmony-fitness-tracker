// Import 3rd Party Libraries
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTES
router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const dbQuery =
    'SELECT * FROM weight WHERE user_id = $1 ORDER BY date DESC LIMIT 5;';

  pool
    .query(dbQuery, [userID])
    .then((result) => {
      const reversedResults = result.rows.reverse();
      res.send(reversedResults);
    })
    .catch((error) => {
      console.error('ERROR FETCHING USER WEIGHTS - GET ROUTE: ', error);
      res.sendStatus(500);
    });
});

// POST ROUTES
router.post('/', (req, res) => {
  const { user_id, current_weight, date } = req.body;
  const dbQuery = `INSERT INTO weight(user_id, current_weight, date)
  VALUES ($1, $2, $3);`;

  pool
    .query(dbQuery, [user_id, current_weight, date])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR IN SERVER POST ROUTE - ADDING WEIGHT : ', error);
      res.sendStatus(500);
    });
});

module.exports = router;
