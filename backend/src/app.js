const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userRoutes = require('./routes/userRoute');  // User routes
const postRoutes = require('./routes/postRoute');  // Posts routes
const corsOptions = require('./config/cors');

const app = express();

// Middleware
app.use(express.json());          
app.use(cors(corsOptions));       

// Token Authentication Middleware (for routes that require JWT)
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Routes
app.use('/api/users', userRoutes); // User routes (register, login, etc.)
app.use('/api/posts', authenticateToken, postRoutes); // Protect post routes with JWT


module.exports = app;
