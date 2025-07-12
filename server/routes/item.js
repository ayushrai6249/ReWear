const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const upload = require('../middleware/upload');

// POST /api/items
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { user, name, description, price } = req.body;

    const newItem = new Item({
      user,
      name,
      description,
      photo: req.file.path, 
      price,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add item' });
  }
});

module.exports = router;
