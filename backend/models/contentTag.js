const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const contentTag = sequelize.define('contentTag', {
  // No extra fields needed unless metadata is required
});

module.exports = contentTag;
