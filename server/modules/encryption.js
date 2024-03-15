// Import Modules
const bcrypt = require('bcryptjs');

// Define how secure the salt should be
const SALT_WORK_FACTOR = 10;

// Function to encrypt the password
const encryptPassword = (password) => {
  // Generate a random salt
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

  // Hash the user password and the random salt
  return bcrypt.hashSync(password, salt);
};

// Function to compare the input password to the stored password
const comparePassword = (candidatePassword, storedPassword) => {
  return bcrypt.compareSync(candidatePassword, storedPassword);
};

// Export both as an object
module.exports = {
  encryptPassword,
  comparePassword,
};
