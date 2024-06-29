require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Check the environment variable

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connectDB function

const heritageSitesRoutes = require('./routes/heritageSites');
const culturalPracticesRoutes = require('./routes/culturalPractices');
const userStoriesRoutes = require('./routes/userStories');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/heritageSites', heritageSitesRoutes);
app.use('/api/culturalPractices', culturalPracticesRoutes);
app.use('/api/userStories', userStoriesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
