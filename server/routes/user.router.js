const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
router.post('/register', (req, res, next) => {
  const {
    name,
    username,
    plain_password,
    height,
    weight,
    goalWeight,
    fitnessLevel,
  } = req.body;

  const password = encryptLib.encryptPassword(plain_password);

  const queryValues = [
    name,
    username,
    password,
    height,
    weight,
    goalWeight,
    fitnessLevel,
  ];
  const queryText = `INSERT INTO users (name, username, password, height, weight, goal_weight, fitness_level)
  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool
    .query(queryText, queryValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.put('/update', rejectUnauthenticated, (req, res) => {
  console.log('PUT ROUTE - BODY: ', req.body);
  const { name, height, weight, goalWeight } = req.body;
  const id = req.body.id;

  const dbQuery = `UPDATE users
  SET name = $1, height = $2, weight = $3, goal_weight = $4
  WHERE id = $5;`;

  const queryValues = [name, height, weight, goalWeight, id];

  pool
    .query(dbQuery, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error updating users: ', error);
      res.sendStatus(500);
    });
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
