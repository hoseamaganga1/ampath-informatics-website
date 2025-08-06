const sequelize = require('../config/db');

const user = require('./user');
const content = require('./content');
const tag = require('./Tag');
const contentTag = require('./contentTag');
const comment = require('./comment');
const invite = require('./invite');


// Associations
content.belongsTo(user, { as: 'author', foreignKey: 'author_id' });
user.hasMany(content, { foreignKey: 'author_id' });

content.belongsToMany(tag, { through: contentTag });
tag.belongsToMany(content, { through: contentTag });

comment.belongsTo(content, { foreignKey: 'content_id' });
content.hasMany(comment, { foreignKey: 'content_id' });

comment.belongsTo(user, { foreignKey: 'user_id' });
user.hasMany(comment, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  user,
  content,
  tag,
  contentTag,
  comment,
  invite
};
