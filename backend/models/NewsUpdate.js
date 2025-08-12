module.exports = (sequelize, DataTypes) => {
  const NewsUpdate = sequelize.define('NewsUpdate', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'e.g. deployment, bug fix, announcement, training, release'
    },
    publish_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    media_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    media_type: {
      type: DataTypes.STRING, // e.g. 'image', 'video'
      allowNull: true
    }
  });

  return NewsUpdate;
};
