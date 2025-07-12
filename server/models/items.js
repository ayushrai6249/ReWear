const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: false
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  approved: {
    type: Boolean,
    default: false
  },
  category:{
    type: String,
    required: true
  },
  swapItem: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

module.exports = mongoose.model('Item',itemSchema);
