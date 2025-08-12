// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: { type: DataTypes.STRING, unique: true },
    description: DataTypes.TEXT,
    display_order: DataTypes.INTEGER,
    media_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true // optional validation to ensure it's a URL
      }
    },
    media_type: {
      type: DataTypes.ENUM('video', 'image'),
      allowNull: true
    }
  });
  return Team;
};