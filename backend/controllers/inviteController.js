const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// Setup Nodemailer transporter with env vars
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.sendInvite = async (request, h) => {
  const { email } = request.payload;

  if (!email) {
    return h.response({ error: 'Email is required' }).code(400);
  }

  try {
    const token = uuidv4();
    const inviteUrl = `${process.env.APP_BASE_URL}/register?inviteToken=${token}`;

    const mailOptions = {
      from: `"Admin invite" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'You are invited to register as admin',
      text: `Click the link to register: ${inviteUrl}`,
      html: `<p>Click the link to register: <a href="${inviteUrl}">${inviteUrl}</a></p>`,
    };

    await transporter.sendMail(mailOptions);

    return h.response({ message: 'Invite email sent successfully' }).code(200);
  } catch (error) {
    console.error('Error sending invite:', error);
    return h.response({ error: 'Server error' }).code(500);
  }
};
