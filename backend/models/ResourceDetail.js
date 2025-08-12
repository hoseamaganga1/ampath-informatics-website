// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ResourceDetail = sequelize.define('ResourceDetail', {
    content_key: { type: DataTypes.STRING, allowNull: false },
    content_value: { type: DataTypes.TEXT, allowNull: false },
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
    display_order: DataTypes.INTEGER
  });
  return ResourceDetail;
};

