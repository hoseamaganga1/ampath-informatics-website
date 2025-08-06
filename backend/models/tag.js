const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const tag = sequelize.define('tag', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = tag;
