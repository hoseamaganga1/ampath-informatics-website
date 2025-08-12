// const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    title: { type: DataTypes.STRING, allowNull: false },
    resource_type: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    media_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    media_type: {
      type: DataTypes.ENUM('video', 'image'),
      allowNull: true,
    },
    display_order: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  });
  return Resource;
};
