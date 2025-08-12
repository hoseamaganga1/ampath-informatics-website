const teamController = require('../controllers/TeamController');

module.exports = [
  // Team routes
  { method: 'GET', path: '/teams', handler: teamController.getAllTeams, options: { auth: false } },
  { method: 'POST', path: '/teams', handler: teamController.createTeam, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/teams/{id}', handler: teamController.updateTeam, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/teams/{id}', handler: teamController.deleteTeam, options: { auth: 'jwt' } },

  // TeamContent routes
  { method: 'GET', path: '/team-content', handler: teamController.getAllTeamContent ,options: { auth: false }},
  { method: 'POST', path: '/team-content', handler: teamController.createTeamContent, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/team-content/{id}', handler: teamController.updateTeamContent, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/team-content/{id}', handler: teamController.deleteTeamContent, options: { auth: 'jwt' } }
];
