require('dotenv').config();
const bcrypt = require('bcryptjs');
const { sequelize, Admin } = require('./models');

(async () => {
  try {
    // Connect to DB
    await sequelize.authenticate();

    // Hash the password
    const hashedPassword = await bcrypt.hash('tito123', 10);

    // Create admin
    const admin = await Admin.create({
      email: 'tituskiprotich97@gmail.com',
      password_hash: hashedPassword,
      role: 'admin'
    });

    console.log('✅ Admin user created:', admin.email);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding admin:', err);
    process.exit(1);
  }
})();
