const express = require('express');
const router = express.Router();

// GET /api/admin/usuarios
router.get('/usuarios', (req, res) => {
  res.json({ message: 'Listar usuarios — implementar en S6' });
});

// GET /api/admin/solicitudes
router.get('/solicitudes', (req, res) => {
  res.json({ message: 'Listar solicitudes — implementar en S6' });
});

module.exports = router;
