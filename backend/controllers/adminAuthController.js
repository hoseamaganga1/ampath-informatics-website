const bcrypt = require('bcryptjs'); // bcryptjs is simpler for Node
const jwt = require('@hapi/jwt');
const { Admin ,DataTypes} = require('../models'); // Import Admin model
require('dotenv').config();


exports.adminLogin = async (request, h) => {
  const { email, password } = request.payload;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ where: { email } });
   if (!admin) {
  console.log('Admin login error: admin not found');
  return h.response({ message: 'Invalid credentials' }).code(401);
}

    // Ensure the user is an admin
    if (admin.role !== 'admin') {
      return h.response({ message: 'Access denied' }).code(403);
    }

    // Password match check
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      return h.response({ message: 'Invalid credentials' }).code(401);
    }

    // Check JWT secret
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
        id: admin.id,
        email: admin.email,
        role: admin.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4, // 4 hour expiry
      },
      {
        key: jwtSecret,
        algorithm: 'HS256',
      }
    );

    return h.response({ token }).code(200);
  } catch (error) {
    console.error('Login error:', error);
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

    const adminId = request.params.id;
    const { name, email, password, role: newRole } = request.payload;

    const existingUser = await Admin.findByPk(adminId);
    if (!existingUser) {
      return h.response({ error: 'User not found' }).code(404);
    }

    // Prepare the updated fields
    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (newRole) updatedData.role = newRole;

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
    const existingUser = await Admin.findByPk(userId);

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
