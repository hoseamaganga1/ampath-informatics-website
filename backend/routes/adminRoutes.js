const contentController = require('../controllers/contentController');
const adminAuthController = require('../controllers/adminAuthController');


module.exports = [
 
  {
    method: 'POST',
    path: '/content',
    handler: contentController.addContent,
    options: { auth: 'jwt' }
  },
  {
    method: 'DELETE',
    path: '/content/{id}',
    handler: contentController.deleteContent,
    options: { auth: 'jwt' }
  },
  {
  method: 'PUT',
  path: '/content/{id}',
  handler: contentController.updateContent,
  options: { auth: 'jwt' }
  },

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
