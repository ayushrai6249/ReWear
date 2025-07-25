const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const User = require('../models/users');

// Add a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// GET /api/users/:id/items
router.get('/:id/items', async (req, res) => {
  try {
    const items = await Item.find({ user: req.params.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch items' });
  }
});



module.exports = router;