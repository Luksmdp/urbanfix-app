const express = require('express');
const router = express.Router();

// GET /api/solicitudes — disponibles (técnico)
router.get('/', (req, res) => {
  res.json({ message: 'Listar solicitudes disponibles — implementar en S5' });
});

// POST /api/solicitudes — crear (cliente)
router.post('/', (req, res) => {
  res.json({ message: 'Crear solicitud — implementar en S5' });
});

// GET /api/solicitudes/mias — mis solicitudes (cliente)
router.get('/mias', (req, res) => {
  res.json({ message: 'Mis solicitudes — implementar en S5' });
});

// PATCH /api/solicitudes/:id/aceptar (técnico)
router.patch('/:id/aceptar', (req, res) => {
  res.json({ message: 'Aceptar solicitud — implementar en S6' });
});

// PATCH /api/solicitudes/:id/rechazar (técnico)
router.patch('/:id/rechazar', (req, res) => {
  res.json({ message: 'Rechazar solicitud — implementar en S6' });
});

module.exports = router;
