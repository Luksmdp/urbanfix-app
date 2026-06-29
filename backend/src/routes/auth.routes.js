const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

module.exports = router;
