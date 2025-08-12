const projectController = require('../controllers/ProjectController');

module.exports = [
  // Project
  { method: 'GET', path: '/projects', handler: projectController.getAllProjects ,options: { auth: false } },
  { method: 'POST', path: '/projects', handler: projectController.createProject, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/projects/{id}', handler: projectController.updateProject, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/projects/{id}', handler: projectController.deleteProject, options: { auth: 'jwt' } },

  // Project Detail
  { method: 'GET', path: '/project-details', handler: projectController.getAllProjectDetails,options: { auth: false } },
  { method: 'POST', path: '/project-details', handler: projectController.createProjectDetail, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/project-details/{id}', handler: projectController.updateProjectDetail, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/project-details/{id}', handler: projectController.deleteProjectDetail, options: { auth: 'jwt' } }
];
