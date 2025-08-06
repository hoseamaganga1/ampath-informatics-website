const { User, Invite } = require('../models');
const bcrypt = require('bcryptjs');

exports.registerInvitedAdmin = async (request, h) => {
  const { email, token, password } = request.payload;

  try {
    const invite = await Invite.findOne({ where: { email, token, used: false } });

    if (!invite || new Date() > invite.expires_at) {
      return h.response({ error: 'Invalid or expired invite token' }).code(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password_hash: hashedPassword, role: 'admin' });

    invite.used = true;
    await invite.save();

    return h.response({ message: 'Admin registered successfully' }).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};
