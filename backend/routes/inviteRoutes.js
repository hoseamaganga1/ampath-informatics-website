const inviteController = require('../controllers/inviteController');
const adminRegisterController = require('../controllers/adminRegisterController');

module.exports = [
  // Send admin invite (admin only)
  {
    method: 'POST',
    path: '/invite',
    handler: inviteController.sendInvite,
    options: { auth: 'jwt' }
  },

  // Register as invited admin
  // {
  //   method: 'POST',
  //   path: '/admin/register/{token}',
  //   handler: adminRegisterController.registerAdmin,
  //   options: { auth: false }
  // }
];
