const express = require('express');
const router = express.Router();

// GET /api/admin/usuarios
router.get('/usuarios', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// GET /api/admin/solicitudes
router.get('/solicitudes', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

module.exports = router;
