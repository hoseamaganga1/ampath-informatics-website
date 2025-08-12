const systemController = require('../controllers/SystemController');

module.exports = [
  // SupportedSystem
  { method: 'GET', path: '/systems', handler: systemController.getAllSystems ,options: { auth: false } },
  { method: 'POST', path: '/systems', handler: systemController.createSystem, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/systems/{id}', handler: systemController.updateSystem, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/systems/{id}', handler: systemController.deleteSystem, options: { auth: 'jwt' } },

  // SystemDetail
  { method: 'GET', path: '/system-details', handler: systemController.getAllSystemDetails , options: { auth: false }},
  { method: 'POST', path: '/system-details', handler: systemController.createSystemDetail, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/system-details/{id}', handler: systemController.updateSystemDetail, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/system-details/{id}', handler: systemController.deleteSystemDetail, options: { auth: 'jwt' } }
];
