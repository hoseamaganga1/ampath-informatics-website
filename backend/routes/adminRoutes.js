const adminAuthController = require('../controllers/adminAuthController');
const adminRegisterController = require('../controllers/adminRegisterController');

module.exports = [
  

    {
    method: 'POST',
    path: '/admin/login',
    options: {
      auth: false, 
      handler: adminAuthController.adminLogin,
    },
  },
    {
  method: 'PUT',
  path: '/admin/user/{id}',
  handler: adminAuthController.updateUser,
  options: { auth: 'jwt' }
},
 {
    method: 'POST',
    path: '/admin/register',
    options: { auth: false },
    
    handler: adminRegisterController.registerAdmin
  }


];
