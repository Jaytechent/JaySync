// src/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user by ID
router.get('/:id', getUser);

module.exports = router;
