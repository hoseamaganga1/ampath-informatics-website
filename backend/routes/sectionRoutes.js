const sectionController = require('../controllers/sectionController');

module.exports = [
  {
    method: 'POST',
    path: '/sections',
    handler: sectionController.createSection,
    options: { auth: 'jwt' }, // protect with admin token
  },
  {
    method: 'GET',
    path: '/sections',
    handler: sectionController.getAllSections,
  },
  {
    method: 'GET',
    path: '/sections/{id}',
    handler: sectionController.getSectionById,
  },
  {
    method: 'PUT',
    path: '/sections/{id}',
    handler: sectionController.updateSection,
    options: { auth: 'jwt' },
  },
  {
    method: 'DELETE',
    path: '/sections/{id}',
    handler: sectionController.deleteSection,
    options: { auth: 'jwt' },
  },
];
