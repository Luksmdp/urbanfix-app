const express = require('express');
const router = express.Router();

// GET /api/users/me — perfil propio
router.get('/me', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// PATCH /api/users/me — actualizar perfil
router.patch('/me', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

module.exports = router;
