const { SupportedSystem, SystemDetail } = require('../models');

// --- SupportedSystem CRUD ---
exports.getAllSystems = async (request, h) => {
  try {
    const systems = await SupportedSystem.findAll({
        include: [{ model: SystemDetailDetail, as: 'system' }]
  });
    return h.response(systems);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve systems' }).code(500);
  }
};

exports.createSystem = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const system = await SupportedSystem.create(request.payload);
    return h.response(system).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create system' }).code(500);
  }
};

exports.updateSystem = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await SupportedSystem.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'System updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update system' }).code(500);
  }
};

exports.deleteSystem = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await SupportedSystem.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'System deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete system' }).code(500);
  }
};

// --- SystemDetail CRUD ---
exports.getAllSystemDetails = async (request, h) => {
  try {
    const details = await SystemDetail.findAll();
    return h.response(details);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve system details' }).code(500);
  }
};

exports.createSystemDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const detail = await SystemDetail.create(request.payload);
    return h.response(detail).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create system detail' }).code(500);
  }
};

exports.updateSystemDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await SystemDetail.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'System detail updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update system detail' }).code(500);
  }
};

exports.deleteSystemDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await SystemDetail.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'System detail deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete system detail' }).code(500);
  }
};
