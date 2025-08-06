const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const comment = sequelize.define('comment', {
  text: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = comment;
