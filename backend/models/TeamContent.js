// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const TeamContent = sequelize.define('TeamContent', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    type: DataTypes.STRING,
    display_order: DataTypes.INTEGER,
    media_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true  // optional: ensure the media_url is a valid URL if provided
      }
    },
    media_type: {
      type: DataTypes.ENUM('video', 'image'),
      allowNull: true
    }
  });
  return TeamContent;
};