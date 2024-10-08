// src/models/postModel.js

const mongoose = require('mongoose');

// Define the Post Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    platform: {
        type: [String], // Array of platforms (e.g., ['Twitter', 'Facebook'])
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
