// server/routes/culturalPractices.js
const express = require('express');
const CulturalPractice = require('../models/CulturalPractice');
const router = express.Router();

// Get all cultural practices
router.get('/', async (req, res) => {
  try {
    const practices = await CulturalPractice.find();
    res.json(practices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific cultural practice
router.get('/:id', async (req, res) => {
  try {
    const practice = await CulturalPractice.findById(req.params.id).populate('relatedSites');
    if (practice == null) {
      return res.status(404).json({ message: 'Cannot find practice' });
    }
    res.json(practice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a cultural practice
router.post('/', async (req, res) => {
  const practice = new CulturalPractice({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    relatedSites: req.body.relatedSites,
  });

  try {
    const newPractice = await practice.save();
    res.status(201).json(newPractice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a cultural practice
router.patch('/:id', async (req, res) => {
  try {
    const practice = await CulturalPractice.findById(req.params.id);
    if (practice == null) {
      return res.status(404).json({ message: 'Cannot find practice' });
    }

    if (req.body.name != null) {
      practice.name = req.body.name;
    }
    if (req.body.description != null) {
      practice.description = req.body.description;
    }
    if (req.body.images != null) {
      practice.images = req.body.images;
    }
    if (req.body.relatedSites != null) {
      practice.relatedSites = req.body.relatedSites;
    }

    const updatedPractice = await practice.save();
    res.json(updatedPractice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a cultural practice
router.delete('/:id', async (req, res) => {
  try {
    const practice = await CulturalPractice.findById(req.params.id);
    if (practice == null) {
      return res.status(404).json({ message: 'Cannot find practice' });
    }

    await practice.remove();
    res.json({ message: 'Deleted practice' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
