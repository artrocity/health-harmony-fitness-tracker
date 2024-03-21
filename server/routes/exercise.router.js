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

// Export Router
module.exports = router;
