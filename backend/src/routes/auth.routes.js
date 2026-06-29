const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint — implementar en S3' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint — implementar en S3' });
});

module.exports = router;
