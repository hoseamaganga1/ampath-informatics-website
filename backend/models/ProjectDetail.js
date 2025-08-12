// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ProjectDetail = sequelize.define('ProjectDetail', {
    content_key: { type: DataTypes.STRING, allowNull: false },
    content_value: { type: DataTypes.TEXT, allowNull: false },
    author_name: DataTypes.STRING,
    media_url: DataTypes.STRING,       
    media_type: DataTypes.STRING,      
    display_order: DataTypes.INTEGER
  });
  return ProjectDetail;
};

