const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const User = require('../models/users'); // ✅ Import User model
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

    // Push new item ID to the user's "items" array
    await User.findByIdAndUpdate(user, {
      $push: { items: newItem._id }
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add item' });
  }
});

module.exports = router;
