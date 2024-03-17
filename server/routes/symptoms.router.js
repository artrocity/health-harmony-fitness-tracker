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
  const userID = req.params.id;
  console.log('USER ID: ', userID);
  const dbQuery = `
  SELECT
	  us.user_id,
    s.symptom_name,
    us.severity,
	  us.date_began
  FROM user_symptoms us
  JOIN symptoms s ON us.symptom_id = s.id
  WHERE us.user_id = $1
  LIMIT 5;`;

  pool
    .query(dbQuery, [userID])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error on GET USER ID SYMPTOMS ROUTE: ', error);
      res.send(500);
    });
});

// POST ROUTES
router.post('/', (req, res) => {
  const { user_id, symptom_id, severity, date_began } = req.body;
  console.log('REQUEST BODY: ', req.body);

  const dbQuery = `INSERT INTO user_symptoms (user_id, symptom_id, severity, date_began)
  VALUES($1, $2, $3, $4)`;

  console.log('SQL QUERY: ', dbQuery);

  pool
    .query(dbQuery, [user_id, symptom_id, severity, date_began])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log('ERROR ADDING SYMPTOM: ', error);
    });
});

module.exports = router;
