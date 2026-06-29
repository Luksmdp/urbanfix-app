const express = require('express');
const router = express.Router();

// GET /api/solicitudes — disponibles (técnico)
router.get('/', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// POST /api/solicitudes — crear (cliente)
router.post('/', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// GET /api/solicitudes/mias — mis solicitudes (cliente)
router.get('/mias', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// PATCH /api/solicitudes/:id/aceptar (técnico)
router.patch('/:id/aceptar', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

// PATCH /api/solicitudes/:id/rechazar (técnico)
router.patch('/:id/rechazar', (req, res) => {
  res.status(501).json({ error: 'Endpoint no implementado' });
});

module.exports = router;
