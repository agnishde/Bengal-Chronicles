// server/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const heritageSitesRouter = require('./routes/heritageSites');
const culturalPracticesRouter = require('./routes/culturalPractices');
const userStoriesRouter = require('./routes/userStories');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/heritage-sites', heritageSitesRouter);
app.use('/api/cultural-practices', culturalPracticesRouter);
app.use('/api/user-stories', userStoriesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
