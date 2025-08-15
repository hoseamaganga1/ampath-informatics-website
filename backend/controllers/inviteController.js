const { Invite } = require('../models');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');

// Send invite to register an admin
exports.sendAdminInvite = async (request, h) => {
  try {
    const { role } = request.auth.credentials;
    if (role !== 'admin') {
      return h.response({ error: 'Unauthorized' }).code(403);
    }

    const { email } = request.payload;

    // Generate token and expiration time (24 hrs)
    const token = uuidv4();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Save or update invite in DB using upsert
    await Invite.upsert({
      email,
      token,
      expires_at: expiresAt,
      used: false
    });

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Construct registration link
    const registrationUrl = `${process.env.FRONTEND_URL}/adminregister?token=${token}&email=${encodeURIComponent(email)}`;

    // Send email
    await transporter.sendMail({
      from: `"Ampath Informatics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Admin Invitation',
      html: `
        <p>You have been invited to register as an admin.</p>
        <p>Please click the link below to complete your registration. This link will expire in 24 hours:</p>
        <p><a href="${registrationUrl}">${registrationUrl}</a></p>
      `
    });

    return h.response({ message: 'Invitation sent successfully' }).code(200);
  } catch (err) {
    console.error('Invite Error:', err);
    return h.response({ error: err.message }).code(500);
  }
};
