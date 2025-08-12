
const adminAuthController = require('../controllers/adminAuthController');


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


];
