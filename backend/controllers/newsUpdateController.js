const { NewsUpdate } = require('../models');

// Get all news updates
exports.getAllNewsUpdates = async (request, h) => {
  try {
    const newsUpdates = await NewsUpdate.findAll({ order: [['created_at', 'DESC']] ,});
    return h.response(newsUpdates);
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to retrieve news updates' }).code(500);
  }
};

// Create a news update (Admin only)
exports.createNewsUpdate = async (request, h) => {
  try {
    const newsUpdate = await NewsUpdate.create(request.payload);
    return h.response(newsUpdate).code(201);
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to create news update',error }).code(500);
  }
};

// Update a news update by id (Admin only)
exports.updateNewsUpdate = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await NewsUpdate.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'News update not found' }).code(404);
    return h.response({ message: 'News update updated successfully' });
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to update news update' }).code(500);
  }
};

// Delete a news update by id (Admin only)
exports.deleteNewsUpdate = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await NewsUpdate.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'News update not found' }).code(404);
    return h.response({ message: 'News update deleted successfully' });
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Failed to delete news update' }).code(500);
  }
};
