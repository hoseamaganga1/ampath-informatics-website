const contactController = require('../controllers/ContactController');

module.exports = [
  // Contact Info
  { method: 'GET', path: '/contact-info', handler: contactController.getAllContactInfo, options: { auth: false } },
  { method: 'POST', path: '/contact-info', handler: contactController.createContactInfo, options: { auth: 'jwt' } },
  { method: 'PUT', path: '/contact-info/{id}', handler: contactController.updateContactInfo, options: { auth: 'jwt' } },
  { method: 'DELETE', path: '/contact-info/{id}', handler: contactController.deleteContactInfo, options: { auth: 'jwt' } },

  // Contact Form
  { method: 'GET', path: '/contact-form', handler: contactController.getAllContactFormSubmissions, options: { auth: false } },
  { method: 'POST', path: '/contact-form', handler: contactController.createContactFormSubmission },
  { method: 'DELETE', path: '/contact-form/{id}', handler: contactController.deleteContactFormSubmission, options: { auth: 'jwt' } }
];
