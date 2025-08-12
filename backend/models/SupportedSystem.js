// const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SupportedSystem = sequelize.define('SupportedSystem', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true  // optional: validate logo_url is a valid URL
      }
    },
    logo_type: {
      type: DataTypes.ENUM('video', 'image'),
      allowNull: true
    },
    display_order: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });

  return SupportedSystem;
};