const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const User = require('../models/users'); // ✅ Import User model
const upload = require('../middleware/upload');

// POST /api/items
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { user, name, description, price, category } = req.body;

    const newItem = new Item({
      user,
      name,
      description,
      category,
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
router.get('/user/:userId', async (req, res) => {
  try {
    const userItems = await Item.find({ user: req.params.userId }).sort({ createdAt: -1 });
    res.json(userItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user items' });
  }
});
module.exports = router;
