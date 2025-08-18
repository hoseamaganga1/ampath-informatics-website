// models/section_content.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SectionContent = sequelize.define('SectionContent', {
    content_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    media_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    media_type: {
      type: DataTypes.ENUM('video', 'image'),
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return SectionContent;
};