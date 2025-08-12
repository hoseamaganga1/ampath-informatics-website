
// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ContactInfo = sequelize.define('ContactInfo', {
    type: { type: DataTypes.STRING, unique: true },
    value: { type: DataTypes.STRING, allowNull: false },
    media_url: { type: DataTypes.STRING, allowNull: true },  // optional media URL
    media_type: { type: DataTypes.STRING, allowNull: true }  // optional media type, e.g. 'image', 'video'
  });
  return ContactInfo;
};
