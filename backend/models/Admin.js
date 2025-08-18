// const { DataTypes } = require('sequelize');

module.exports = (sequelize,DataTypes) =>{
 const Admin = sequelize.define('Admin', {
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password_hash: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'editor' }
  });
  return Admin
};