// server/routes/userStories.js
const express = require('express');
const UserStory = require('../models/UserStory');
const router = express.Router();

// Get all user stories
router.get('/', async (req, res) => {
  try {
    const stories = await UserStory.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific user story
router.get('/:id', async (req, res) => {
  try {
    const story = await UserStory.findById(req.params.id);
    if (story == null) {
      return res.status(404).json({ message: 'Cannot find story' });
    }
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a user story
router.post('/', async (req, res) => {
  const story = new UserStory({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const newStory = await story.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a user story
router.patch('/:id', async (req, res) => {
  try {
    const story = await UserStory.findById(req.params.id);
    if (story == null) {
      return res.status(404).json({ message: 'Cannot find story' });
    }

    if (req.body.title != null) {
      story.title = req.body.title;
    }
    if (req.body.content != null) {
      story.content = req.body.content;
    }
    if (req.body.author != null) {
      story.author = req.body.author;
    }

    const updatedStory = await story.save();
    res.json(updatedStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user story
router.delete('/:id', async (req, res) => {
  try {
    const story = await UserStory.findById(req.params.id);
    if (story == null) {
      return res.status(404).json({ message: 'Cannot find story' });
    }

    await story.remove();
    res.json({ message: 'Deleted story' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
