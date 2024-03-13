// Import Modules
const bcrypt = require('bcryptjs');

// Define how secure the salt should be
const SALT_WORK_FACTOR = 10;

const encryptPassword = (password) => {
  // Generate a random salt
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

  // Hash the user password and the random salt
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (candidatePassword, storedPassword) => {
  // Compare the input password to the stored password
  return bcrypt.compareSync(candidatePassword, storedPassword);
};

// Export both as an object
module.exports = {
  encryptPassword,
  comparePassword,
};
