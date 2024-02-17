// controllers/authorController.js
const Author = require('../models/Author');

const login = (req, res) => {
    // Your login logic here
    res.send('Login endpoint');
};

const register = (req, res) => {
    // Your registration logic here
    res.send('Register endpoint');
};

module.exports = { login, register };
