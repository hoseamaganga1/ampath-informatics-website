const sectionContentController = require('../controllers/sectionContentController');

module.exports = [
  {
    method: 'POST',
    path: '/sections/content',
    handler: sectionContentController.createSectionContent,
    options: { auth: 'jwt' },
  },
  // {
  //   method: 'GET',
  //   path: '/sections/content',
  //   handler: sectionContentController.getContentBySection,
  // },
  {
    method: 'GET',
    path: '/section/contents/{id}',
    handler: sectionContentController.getContentById,
  },
  {
    method: 'PUT',
    path: '/section/contents/{id}',
    handler: sectionContentController.updateContent,
    options: { auth: 'jwt' },
  },
  {
    method: 'DELETE',
    path: '/section/contents/{id}',
    handler: sectionContentController.deleteContent,
    options: { auth: 'jwt' },
  },
];
