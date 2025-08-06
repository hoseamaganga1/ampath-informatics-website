const inviteController = require('../controllers/inviteController');
const authController = require('../controllers/authController');

module.exports = [
  // Send admin invite (admin only)
  {
    method: 'POST',
    path: '/admin/invite',
    handler: inviteController.sendAdminInvite,
    options: { auth: 'jwt' }
  },

  // Register as invited admin
  {
    method: 'POST',
    path: '/admin/register',
    handler: authController.registerInvitedAdmin,
    options: { auth: false }
  }
];
