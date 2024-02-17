// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const validate = require('../middleware/validationMiddleware');

router.post('/login', login);
router.post('/register', validate, register);

module.exports = router;
