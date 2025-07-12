const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// PUT /api/items - Create a new item
router.put('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});