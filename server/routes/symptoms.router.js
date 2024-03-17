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

router.get('/:id', (req, res) => {
  const dbQuery = `
  SELECT
	  us.user_id,
    s.symptom_name,
    us.severity,
	  us.date_began
  FROM user_symptoms us
  JOIN symptoms s ON us.symptom_id = s.id
  WHERE us.user_id = $1;`;

  pool
    .query(dbQuery, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET USER ID SYMPTOMS ROUTE: ', error);
      res.send(500);
    });
});

module.exports = router;
