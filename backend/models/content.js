const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const content = sequelize.define('content', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  type: DataTypes.STRING,
  file_path: DataTypes.STRING,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = content;
