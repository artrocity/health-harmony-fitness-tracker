// Import 3rd Party Libraries
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTES
router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const dbQuery =
    'SELECT * FROM weight WHERE user_id = $1 ORDER BY date ASC LIMIT 5;';

  pool
    .query(dbQuery, [userID])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('ERROR FETCHING USER WEIGHTS - GET ROUTE: ', error);
      res.sendStatus(500);
    });
});

module.exports = router;
