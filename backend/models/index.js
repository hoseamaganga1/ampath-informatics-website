require('dotenv').config();
const {Sequelize ,DataTypes}= require('sequelize');


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, 
    logging: false
  }
);


const Admin = require('./Admin')(sequelize, DataTypes);
const Team = require('./Team')(sequelize, DataTypes);
const TeamContent = require('./TeamContent')(sequelize, DataTypes);
const Resource = require('./Resource')(sequelize,DataTypes);
const ResourceDetail = require('./ResourceDetail')(sequelize,DataTypes);
const SupportedSystem = require('./SupportedSystem')(sequelize,DataTypes);
const SystemDetail = require('./SystemDetail')(sequelize,DataTypes);
const Project = require('./Project')(sequelize,DataTypes);
const ProjectDetail = require('./ProjectDetail')(sequelize,DataTypes);
const ContactInfo = require('./ContactInfo')(sequelize ,DataTypes);
const ContactFormSubmission = require('./ContactFormSubmission')(sequelize,DataTypes);
const Invite=require('./invite')(sequelize,DataTypes)
const NewsUpdate = require('./NewsUpdate')(sequelize, DataTypes);

// Define relationships
Team.hasMany(TeamContent, { foreignKey: 'team_id' });
TeamContent.belongsTo(Team, { foreignKey: 'team_id' });

Resource.hasMany(ResourceDetail, { foreignKey: 'resource_id', as: 'details' });
ResourceDetail.belongsTo(Resource, { foreignKey: 'resource_id', as: 'resource' });



SupportedSystem.hasMany(SystemDetail, { foreignKey: 'system_id' });
SystemDetail.belongsTo(SupportedSystem, { foreignKey: 'system_id' });

Project.hasMany(ProjectDetail, { foreignKey: 'project_id' });
ProjectDetail.belongsTo(Project, { foreignKey: 'project_id' });

// Sync database
const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log('All models synced!');
};

module.exports = {
  sequelize,
  syncDB,
  Admin,
  Team,
  TeamContent,
  Resource,
  ResourceDetail,
  SupportedSystem,
  SystemDetail,
  Project,
  ProjectDetail,
  ContactInfo,
  ContactFormSubmission,
  Invite,
  NewsUpdate
};
