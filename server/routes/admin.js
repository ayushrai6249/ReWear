const express = require('express');
const router = express.Router();
const Item = require('../models/items');
// const { verifyJWT } = require('../middleware/auth.middleware'); // Assuming you have this

//  Get all items for admin moderation
router.get('/', async (req, res) => {
  try {
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ error: 'Access denied' });
    // }

    const items = await Item.find()
      .populate('user', 'name email') 
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Approve or reject an item
router.patch('/:id/approve', async (req, res) => {
  try {
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ error: 'Access denied' });
    // }

    const { approved } = req.body;
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { approved },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update item status' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ error: 'Access denied' });
    // }

    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = router;