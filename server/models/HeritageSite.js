// server/models/HeritageSite.js
const mongoose = require('mongoose');

const HeritageSiteSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  location: String,
  timeline: Date,
});

module.exports = mongoose.model('HeritageSite', HeritageSiteSchema);
