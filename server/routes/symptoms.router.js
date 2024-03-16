// Import 3rd Party Libraries
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTES
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM symptoms;';

  pool
    .query(dbQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('ERROR FETCHING SYMPTOMS: ', error);
      res.send(500);
    });
});

module.exports = router;
