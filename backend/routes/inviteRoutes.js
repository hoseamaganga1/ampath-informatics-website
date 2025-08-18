const inviteController = require('../controllers/inviteController');


module.exports = [
  // Send admin invite (admin only)
  {
    method: 'POST',
    path: '/admin/invite',
    handler: inviteController.sendAdminInvite,
    options: { auth: 'jwt' }
  },

 
];
