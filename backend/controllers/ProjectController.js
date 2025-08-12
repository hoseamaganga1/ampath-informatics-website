const { Project, ProjectDetail } = require('../models');

// --- Project CRUD ---
exports.getAllProjects = async (request, h) => {
  try {
    const projects = await Project.findAll(
      {
        include: [{ model: ProjectDetail, as: 'project' }]
  }
    );
    return h.response(projects);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve projects' }).code(500);
  }
};

exports.createProject = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const project = await Project.create(request.payload);
    return h.response(project).code(201);
  } catch (err) {
  console.error('Error creating project:', err); // log full error
  return h.response({ error: err.message }).code(500); // show message instead of generic text
}
};

exports.updateProject = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await Project.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Project updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update project' }).code(500);
  }
};

exports.deleteProject = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await Project.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Project deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete project' }).code(500);
  }
};

// --- ProjectDetail CRUD ---
exports.getAllProjectDetails = async (request, h) => {
  try {
    const details = await ProjectDetail.findAll();
    return h.response(details);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve project details' }).code(500);
  }
};

exports.createProjectDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const detail = await ProjectDetail.create(request.payload);
    return h.response(detail).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create project detail' }).code(500);
  }
};

exports.updateProjectDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const [updated] = await ProjectDetail.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Project detail updated' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update project detail' }).code(500);
  }
};

exports.deleteProjectDetail = async (request, h) => {
  const { role } = request.auth.credentials;
  if (role !== 'admin') return h.response({ error: 'Admins only' }).code(403);

  try {
    const deleted = await ProjectDetail.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Not found' }).code(404);
    return h.response({ message: 'Project detail deleted' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete project detail' }).code(500);
  }
};
