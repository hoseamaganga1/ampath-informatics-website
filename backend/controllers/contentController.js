const { sequelize } = require('../models');
const { content } = require('../models');

exports.addContent = async (request, h) => {
  try {
    const { role, id: userId } = request.auth.credentials;

    if (role !== 'admin') {
      return h.response({ error: 'Access denied. Admins only.' }).code(403);
    }

    const payload = {
      ...request.payload,
      author_id: userId,
    };

   
    const Content = sequelize.models.content;

    const content = await Content.create(payload);

    return h.response({ message: 'Content added successfully', content }).code(201);
  } catch (err) {
    console.error('Add content error:', err);
    return h.response({ error: err.message }).code(500);
  }
};



exports.updateContent = async (request, h) => {
  try {
    const { role } = request.auth.credentials;

    if (role !== 'admin') {
      return h.response({ error: 'Access denied. Admins only.' }).code(403);
    }

    const contentId = request.params.id;
    const payload = request.payload;

    const existingContent = await content.findByPk(contentId);

    if (!existingContent) {
      return h.response({ error: 'Content not found' }).code(404);
    }

    await existingContent.update(payload);

    return h.response({
      message: 'Content updated successfully',
      content: existingContent,
    }).code(200);
  } catch (err) {
    console.error('Update content error:', err);
    return h.response({ error: err.message }).code(500);
  }
};


exports.deleteContent = async (request, h) => {
  try {
    const { role } = request.auth.credentials;

    if (role !== 'admin') {
      return h.response({ error: 'Access denied. Admins only.' }).code(403);
    }

    const contentId = request.params.id;
    const foundContent = await content.findByPk(contentId);

    if (!foundContent) {
      return h.response({ error: 'Content not found' }).code(404);
    }

    await foundContent.destroy();
    return h.response({ message: 'Content deleted successfully' }).code(200);
  } catch (err) {
    console.error('Delete content error:', err);
    return h.response({ error: err.message }).code(500);
  }
};
