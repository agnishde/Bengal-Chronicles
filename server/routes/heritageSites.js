// server/routes/heritageSites.js
const express = require('express');
const HeritageSite = require('../models/HeritageSite');
const router = express.Router();

// Get all heritage sites
router.get('/', async (req, res) => {
  try {
    const sites = await HeritageSite.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific heritage site
router.get('/:id', async (req, res) => {
  try {
    const site = await HeritageSite.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: 'Cannot find site' });
    }
    res.json(site);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a heritage site
router.post('/', async (req, res) => {
  const site = new HeritageSite({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    location: req.body.location,
    timeline: req.body.timeline,
  });

  try {
    const newSite = await site.save();
    res.status(201).json(newSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a heritage site
router.patch('/:id', async (req, res) => {
  try {
    const site = await HeritageSite.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: 'Cannot find site' });
    }

    if (req.body.name != null) {
      site.name = req.body.name;
    }
    if (req.body.description != null) {
      site.description = req.body.description;
    }
    if (req.body.images != null) {
      site.images = req.body.images;
    }
    if (req.body.location != null) {
      site.location = req.body.location;
    }
    if (req.body.timeline != null) {
      site.timeline = req.body.timeline;
    }

    const updatedSite = await site.save();
    res.json(updatedSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a heritage site
router.delete('/:id', async (req, res) => {
  try {
    const site = await HeritageSite.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: 'Cannot find site' });
    }

    await site.remove();
    res.json({ message: 'Deleted site' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
