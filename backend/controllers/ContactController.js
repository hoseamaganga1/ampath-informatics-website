const { ContactInfo, ContactFormSubmission } = require('../models');

// --- ContactInfo CRUD ---
exports.getAllContactInfo = async (request, h) => {
  try {
    const info = await ContactInfo.findAll(
      {
        include: [{ model: ContactFormSubmission, as: 'contact' }]
  }
    );
    return h.response(info);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve contact info' }).code(500);
  }
};

exports.createContactInfo = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const info = await ContactInfo.create(request.payload);
    return h.response(info).code(201);
  } catch (err) {
  console.error('Error creating project:', err); // log full error
  return h.response({ error: err.message }).code(500); // show message instead of generic text
}
};

exports.updateContactInfo = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await ContactInfo.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Contact info updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update contact info' }).code(500);
  }
};

exports.deleteContactInfo = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await ContactInfo.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Contact info deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete contact info' }).code(500);
  }
};

// --- ContactFormSubmission CRUD ---
exports.getAllContactFormSubmissions = async (request, h) => {
  try {
    const submissions = await ContactFormSubmission.findAll();
    return h.response(submissions);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve submissions' }).code(500);
  }
};

exports.createContactFormSubmission = async (request, h) => {
  try {
    const submission = await ContactFormSubmission.create(request.payload);
    return h.response(submission).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to submit form' }).code(500);
  }
};

exports.deleteContactFormSubmission = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await ContactFormSubmission.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Submission deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete submission' }).code(500);
  }
};
