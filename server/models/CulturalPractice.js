// server/models/CulturalPractice.js
const mongoose = require('mongoose');

const CulturalPracticeSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  relatedSites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HeritageSite' }],
});

module.exports = mongoose.model('CulturalPractice', CulturalPracticeSchema);
