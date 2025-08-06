// models/Invite.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const invite = sequelize.define('invite', {
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  token: { type: DataTypes.STRING, allowNull: false },
  used: { type: DataTypes.BOOLEAN, defaultValue: false },
  expires_at: { type: DataTypes.DATE, allowNull: false },
});

module.exports = invite;
