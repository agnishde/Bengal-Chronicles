// server/models/UserStory.js
const mongoose = require('mongoose');

const UserStorySchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserStory', UserStorySchema);
