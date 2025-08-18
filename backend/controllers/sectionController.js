const { Section } = require('../models');

// Create a section
exports.createSection = async (req, h) => {
  try {
    const section = await Section.create(req.payload);
    return h.response(section).code(201);
  } catch (err) {
    console.error('Create Section Error:', err);
    return h.response({ error: 'Failed to create section' }).code(500);
  }
};

// Get all sections
exports.getAllSections = async (req, h) => {
  try {
    const sections = await Section.findAll({ order: [['display_order', 'ASC']] });
    return h.response(sections).code(200);
  } catch (err) {
    console.error('Fetch Sections Error:', err);
    return h.response({ error: 'Failed to fetch sections' }).code(500);
  }
};

// Get section by ID
exports.getSectionById = async (req, h) => {
  try {
    const section = await Section.findByPk(req.params.id);
    if (!section) {
      return h.response({ error: 'Section not found' }).code(404);
    }
    return h.response(section).code(200);
  } catch (err) {
    console.error('Fetch Section Error:', err);
    return h.response({ error: 'Failed to fetch section' }).code(500);
  }
};

// Update a section
exports.updateSection = async (req, h) => {
  try {
    const section = await Section.findByPk(req.params.id);
    if (!section) {
      return h.response({ error: 'Section not found' }).code(404);
    }
    await section.update(req.payload);
    return h.response(section).code(200);
  } catch (err) {
    console.error('Update Section Error:', err);
    return h.response({ error: 'Failed to update section' }).code(500);
  }
};

// Delete a section
exports.deleteSection = async (req, h) => {
  try {
    const section = await Section.findByPk(req.params.id);
    if (!section) {
      return h.response({ error: 'Section not found' }).code(404);
    }
    await section.destroy();
    return h.response({ message: 'Section deleted successfully' }).code(200);
  } catch (err) {
    console.error('Delete Section Error:', err);
    return h.response({ error: 'Failed to delete section' }).code(500);
  }
};
