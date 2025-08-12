module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define('Invite', {
    email: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
    used: { type: DataTypes.BOOLEAN, defaultValue: false },
    media_url: { type: DataTypes.STRING, allowNull: true },  // optional media URL
    media_type: { type: DataTypes.STRING, allowNull: true }  // optional media type (e.g., 'image', 'video')
  });
  return Invite;
};
