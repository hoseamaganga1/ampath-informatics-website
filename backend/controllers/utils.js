exports.handleError = (h, error) => {
  console.error(error);
  return h.response({ error: 'Something went wrong' }).code(500);
};

exports.isAdmin = (request, h) => {
  const { role } = request.auth.credentials || {};
  if (role !== 'admin') {
    return h.response({ error: 'Admins only' }).code(403).takeover();
  }
  return h.continue;
};

exports.createCrud = (Model, modelName) => ({
  create: async (request, h) => {
    try {
      await exports.isAdmin(request, h);
      const item = await Model.create(request.payload);
      return h.response(item).code(201);
    } catch (error) {
      return exports.handleError(h, error);
    }
  },
  update: async (request, h) => {
    try {
      await exports.isAdmin(request, h);
      const { id } = request.params;
      const item = await Model.findByPk(id);
      if (!item) return h.response({ error: `${modelName} not found` }).code(404);
      await item.update(request.payload);
      return h.response(item);
    } catch (error) {
      return exports.handleError(h, error);
    }
  },
  delete: async (request, h) => {
    try {
      await exports.isAdmin(request, h);
      const { id } = request.params;
      const item = await Model.findByPk(id);
      if (!item) return h.response({ error: `${modelName} not found` }).code(404);
      await item.destroy();
      return h.response({ message: `${modelName} deleted` });
    } catch (error) {
      return exports.handleError(h, error);
    }
  },
  getAll: async (request, h) => {
    try {
      const items = await Model.findAll();
      return h.response(items);
    } catch (error) {
      return exports.handleError(h, error);
    }
  }
});