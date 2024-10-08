// src/server.js

const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI, { 
   
})
    .then(() => {
        console.log('MongoDB connected');
        
      
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);  
    });
