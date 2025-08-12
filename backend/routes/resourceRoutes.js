const resourceController = require('../controllers/ResourceController');

module.exports = [
  // Resource
  { method: 'GET', path: '/resources', handler: resourceController.getAllResources ,options: { auth: false }},
  { method: 'POST', path: '/resources', handler: resourceController.createResource, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/resources/{id}', handler: resourceController.updateResource, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/resources/{id}', handler: resourceController.deleteResource, options: { auth: 'jwt' } },

  // Resource Detail
  { method: 'GET', path: '/resource-details', handler: resourceController.getAllResourceDetails ,options: { auth: false }},
  { method: 'POST', path: '/resource-details', handler: resourceController.createResourceDetail, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/resource-details/{id}', handler: resourceController.updateResourceDetail, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/resource-details/{id}', handler: resourceController.deleteResourceDetail, options: { auth: 'jwt' } }
];
