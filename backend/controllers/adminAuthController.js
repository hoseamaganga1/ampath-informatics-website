const bcrypt = require('bcrypt');
const db = require('../models'); // Make sure this points to your Sequelize models
const jwt = require('@hapi/jwt');
const { user } = require('../models');
require('dotenv').config(); // Ensure your .env is loaded

exports.adminLogin = async (request, h) => {
  const { email, password } = request.payload;

  try {
    // Check if user exists
    const user = await db.user.findOne({ where: { email } });
    if (!user) {
      return h.response({ message: 'Invalid credentials' }).code(401);
    }

    // Ensure the user is an admin
    if (user.role !== 'admin') {
      return h.response({ message: 'Access denied' }).code(403);
    }

    // Password match check
    const isMatch = await bcrypt.compare(password, user.password_hash);
    //  const isMatch = await (password, user.password_hash);
    if (!isMatch) {
      return h.response({ message: 'Invalid credentials' }).code(401);
    }

    // Check if secret exists
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET not set in .env');
      return h.response({ message: 'Server misconfiguration' }).code(500);
    }

    // Generate token
    const token = jwt.token.generate(
      {
        aud: 'urn:admin',
        iss: 'your-app',
        id: user.id,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4, // 4 hour expiry
      },
      {
        key: jwtSecret,
        algorithm: 'HS256',
      }
    );

    return h.response({ token }).code(200);
  } catch (error) {
    console.error('Login error:', error.message || error);
    return h.response({ message: 'Server error' }).code(500);
  }
};

exports.updateUser = async (request, h) => {
  try {
    const { role } = request.auth.credentials;

    // Only admins can update user data
    if (role !== 'admin') {
      return h.response({ error: 'Access denied. Admins only.' }).code(403);
    }

    const userId = request.params.id;
    const { name, email, password, role: newRole } = request.payload;

    const existingUser = await user.findByPk(userId);
    if (!existingUser) {
      return h.response({ error: 'User not found' }).code(404);
    }

    // Prepare the updated fields
    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    // if (newRole) updatedData.role = newRole;

    if (password && password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password_hash = hashedPassword;
    }

    await existingUser.update(updatedData);

    return h.response({
      message: 'User updated successfully',
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role
      }
    }).code(200);

  } catch (err) {
    console.error('Update user error:', err);
    return h.response({ error: 'An error occurred while updating the user.' }).code(500);
  }
};
exports.deleteUser = async (request, h) => {
  try {
    const { role } = request.auth.credentials;

    if (role !== 'admin') {
      return h.response({ error: 'Access denied. Admins only.' }).code(403);
    }

    const userId = request.params.id;
    const existingUser = await user.findByPk(userId);

    if (!existingUser) {
      return h.response({ error: 'User not found' }).code(404);
    }

    await existingUser.destroy();
    return h.response({ message: 'User deleted successfully' }).code(200);
  } catch (err) {
    console.error('Delete user error:', err);
    return h.response({ error: 'An error occurred while deleting the user.' }).code(500);
  }
};