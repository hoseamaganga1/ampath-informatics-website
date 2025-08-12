const newsUpdateController = require('../controllers/newsUpdateController');

module.exports = [
  {
    method: 'GET',
    path: '/news-updates',
    options: {
      auth: false // public route
    },
    handler: newsUpdateController.getAllNewsUpdates
  },
  {
    method: 'POST',
    path: '/news-updates',
    options: {
      auth: 'jwt' // admin only
    },
    handler: newsUpdateController.createNewsUpdate
  },
  {
    method: 'PUT',
    path: '/news-updates/{id}',
    options: {
      auth: 'jwt' // admin only
    },
    handler: newsUpdateController.updateNewsUpdate
  },
  {
    method: 'DELETE',
    path: '/news-updates/{id}',
    options: {
      auth: 'jwt' // admin only
    },
    handler: newsUpdateController.deleteNewsUpdate
  }
];
