const { Resource, ResourceDetail } = require('../models');

// --- Resource CRUD ---
exports.getAllResources = async (request, h) => {
  try {
    const resources = await Resource.findAll({
      include: [{ model: ResourceDetail, as: 'details' }]
    });
    return h.response(resources);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve resources' }).code(500);
  }
};

exports.createResource = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const resource = await Resource.create(request.payload);
    return h.response(resource).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create resource' }).code(500);
  }
};

exports.updateResource = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await Resource.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Resource updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update resource' }).code(500);
  }
};

exports.deleteResource = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await Resource.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Resource deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete resource' }).code(500);
  }
};

// --- ResourceDetail CRUD ---
exports.getAllResourceDetails = async (request, h) => {
  try {
    const details = await ResourceDetail.findAll( );
    return h.response(details);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve resource details' }).code(500);
  }
};

exports.createResourceDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const detail = await ResourceDetail.create(request.payload);
    return h.response(detail).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create resource detail' }).code(500);
  }
};

exports.updateResourceDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await ResourceDetail.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Resource detail updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update resource detail' }).code(500);
  }
};

exports.deleteResourceDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await ResourceDetail.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Resource detail deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete resource detail' }).code(500);
  }
};
