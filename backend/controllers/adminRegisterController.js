const bcrypt = require('bcryptjs');
const { Admin } = require('../models');

exports.registerAdmin = async (request, h) => {
  try {
    const { email, password } = request.payload;

    // Check if admin exists
    const existing = await Admin.findOne({ where: { email } });
    if (existing) {
      return h.response({ error: 'Admin already exists' }).code(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password_hash: hashedPassword,
      role: 'admin',
    });

    return h.response({ message: 'Admin registered successfully', admin }).code(201);
  } catch (error) {
    console.error('Error registering admin:', error);
    return h.response({ error: 'Server error' }).code(500);
  }
};