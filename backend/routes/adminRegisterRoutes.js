// routes/adminRegisterRoutes.js
const adminRegisterController = require('../controllers/adminRegisterController');

module.exports = [
  // {
  //   method: 'POST',
  //   path: '/admin/register/{token}',
  //   options: { auth: false },
  //   handler: adminRegisterController.validateInvite
  // },
  {
    method: 'POST',
    path: '/admin/register',
    options: { auth: false },
    
    handler: adminRegisterController.registerAdmin
  }
];
