const { Team, TeamContent } = require('../models');

// --- Team CRUD ---
exports.getAllTeams = async (request, h) => {
  try {
    const teams = await Team.findAll(
      {
        include: [{ model: TeamContent, as: 'team' }]
  }
    );
    return h.response(teams);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve teams' }).code(500);
  }
};

exports.createTeam = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can create teams' }).code(403);
    }
    const team = await Team.create(request.payload);
    return h.response(team).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create team' }).code(500);
  }
};

exports.updateTeam = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can update teams' }).code(403);
    }
    const [updated] = await Team.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Team not found' }).code(404);
    return h.response({ message: 'Team updated successfully' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update team' }).code(500);
  }
};

exports.deleteTeam = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can delete teams' }).code(403);
    }
    const deleted = await Team.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Team not found' }).code(404);
    return h.response({ message: 'Team deleted successfully' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete team' }).code(500);
  }
};

// --- Team Content CRUD ---
exports.getAllTeamContent = async (request, h) => {
  try {
    const content = await TeamContent.findAll();
    return h.response(content);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to retrieve team content' }).code(500);
  }
};

exports.createTeamContent = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can create team content' }).code(403);
    }
    const content = await TeamContent.create(request.payload);
    return h.response(content).code(201);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to create team content' }).code(500);
  }
};

exports.updateTeamContent = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can update team content' }).code(403);
    }
    const [updated] = await TeamContent.update(request.payload, { where: { id: request.params.id } });
    if (!updated) return h.response({ error: 'Team content not found' }).code(404);
    return h.response({ message: 'Team content updated successfully' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to update team content' }).code(500);
  }
};

exports.deleteTeamContent = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Only admins can delete team content' }).code(403);
    }
    const deleted = await TeamContent.destroy({ where: { id: request.params.id } });
    if (!deleted) return h.response({ error: 'Team content not found' }).code(404);
    return h.response({ message: 'Team content deleted successfully' });
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to delete team content' }).code(500);
  }
};

