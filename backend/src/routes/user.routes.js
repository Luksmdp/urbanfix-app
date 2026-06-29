const express = require('express');
const router = express.Router();

// GET /api/users/me — perfil propio
router.get('/me', (req, res) => {
  res.json({ message: 'Perfil de usuario — implementar en S4' });
});

// PATCH /api/users/me — actualizar perfil
router.patch('/me', (req, res) => {
  res.json({ message: 'Actualizar perfil — implementar en S4' });
});

module.exports = router;
