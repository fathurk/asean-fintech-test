const jwt = require("jsonwebtoken");

const secretKey = "sasasasaadadsada";

let generateToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

let compareToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, compareToken };
