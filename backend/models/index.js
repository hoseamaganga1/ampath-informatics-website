require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// Import models
const Section = require('./Section')(sequelize, DataTypes);
const SectionContent = require('./SectionContent')(sequelize, DataTypes);
const Invite=require('./Invite')(sequelize,DataTypes)
const Admin = require('./Admin')(sequelize, DataTypes);

// Relationships
Section.hasMany(SectionContent, { foreignKey: 'section_id', onDelete: 'CASCADE' });
SectionContent.belongsTo(Section, { foreignKey: 'section_id' });

// Sync DB function
const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // ⚠️ use { force: true } in dev if you want to drop & recreate tables
    console.log('✅ Database synced successfully!');
  } catch (err) {
    console.error('❌ Database sync failed:', err);
  }
};

module.exports = {
  sequelize,
  syncDB,
  Section,
  SectionContent,
  Admin,
  Invite
};
