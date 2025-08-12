// const { DataTypes } = require('sequelize');
// const ProjectRoutes = require('../routes/ProjectRoutes');

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue:"ongoing "},
    description: DataTypes.TEXT,
    media_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
    media_type: {
      type: DataTypes.ENUM('video', 'image'),
      allowNull: true,
    },
    display_order: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
  return Project;
};
