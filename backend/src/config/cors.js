// src/config/corsConfig.js

const corsOptions = {
    origin: ['http://localhost:3000', 'https://your-production-url.com'],  // Allowlist frontend domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Custom headers allowed
    credentials: true,  // If you need to allow credentials like cookies
    optionsSuccessStatus: 204  // For legacy browsers
  };
  
  module.exports = corsOptions;
  