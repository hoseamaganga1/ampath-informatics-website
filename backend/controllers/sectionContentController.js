const { SectionContent, Section } = require('../models');

// Create content under a section
exports.createSectionContent = async (req, h) => {
  try {
    const { section_id } = req.payload;

    // Ensure section exists
    const section = await Section.findByPk(section_id);
    if (!section) {
      return h.response({ error: 'Section not found' }).code(404);
    }

    const content = await SectionContent.create(req.payload);
    return h.response(content).code(201);
  } catch (err) {
    console.error('Create Content Error:', err);
    return h.response({ error: 'Failed to create content' }).code(500);
  }
};

// Get all content for a section
exports.getContentBySection = async (req, h) => {
  try {
    const contents = await SectionContent.findAll({
      where: { section_id: req.params.sectionId },
      order: [['display_order', 'ASC']]
    });
    return h.response(contents).code(200);
  } catch (err) {
    console.error('Fetch Content Error:', err);
    return h.response({ error: 'Failed to fetch content' }).code(500);
  }
};

// Get single content item
exports.getContentById = async (req, h) => {
  try {
    const content = await SectionContent.findByPk(req.params.id);
    if (!content) {
      return h.response({ error: 'Content not found' }).code(404);
    }
    return h.response(content).code(200);
  } catch (err) {
    console.error('Fetch Content Error:', err);
    return h.response({ error: 'Failed to fetch content' }).code(500);
  }
};

// Update content
exports.updateContent = async (req, h) => {
  try {
    const content = await SectionContent.findByPk(req.params.id);
    if (!content) {
      return h.response({ error: 'Content not found' }).code(404);
    }
    await content.update(req.payload);
    return h.response(content).code(200);
  } catch (err) {
    console.error('Update Content Error:', err);
    return h.response({ error: 'Failed to update content' }).code(500);
  }
};

// Delete content
exports.deleteContent = async (req, h) => {
  try {
    const content = await SectionContent.findByPk(req.params.id);
    if (!content) {
      return h.response({ error: 'Content not found' }).code(404);
    }
    await content.destroy();
    return h.response({ message: 'Content deleted successfully' }).code(200);
  } catch (err) {
    console.error('Delete Content Error:', err);
    return h.response({ error: 'Failed to delete content' }).code(500);
  }
};
