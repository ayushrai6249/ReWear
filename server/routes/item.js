const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const User = require('../models/users'); //  Import User model
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
// GET /api/items/approved
router.get('/approved', async (req, res) => {
  try {
    const items = await Item.find({ approved: true })
      .populate('user', 'name') // so we can show postedBy
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch approved items' });
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

router.patch('/:id/swap', async (req, res) => {
  try {
    const { swapItemId } = req.body; 
    const targetItem = await Item.findById(req.params.id);

    if (!targetItem) {
      return res.status(404).json({ error: 'Target item not found' });
    }

    // Prevent duplicate swap entry
    if (targetItem.swapItem.includes(swapItemId)) {
      return res.status(400).json({ error: 'Item already requested for swap' });
    }

    targetItem.swapItem.push(swapItemId);
    await targetItem.save();

    res.json({ message: 'Swap request sent successfully', item: targetItem });
  } catch (err) {
    res.status(500).json({ error: 'Swap operation failed' });
  }
});
module.exports = router;
