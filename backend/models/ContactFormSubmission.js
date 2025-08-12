// const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ContactFormSubmission = sequelize.define('ContactFormSubmission', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    subject: DataTypes.STRING,
    message: { type: DataTypes.TEXT, allowNull: false },
    submission_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    media_url: { type: DataTypes.STRING, allowNull: true },  // optional media URL
    media_type: { type: DataTypes.STRING, allowNull: true }  // optional media type (e.g., 'image', 'video')
  });
  return ContactFormSubmission;
};
