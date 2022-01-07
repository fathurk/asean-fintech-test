const bcrypt = require("bcryptjs");

let hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

let comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
module.exports = { hashPassword, comparePassword };
