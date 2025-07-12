const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//  /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    
    const payload = {
      userid: user._id,
      role: user.role || 'user' 
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

   
    res.json({ 
      message: 'Login successful', 
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user'
      },
      token
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;