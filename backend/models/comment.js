'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
     models.Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
     });
     models.Comment.belongsTo(models.User, {
       foreignKey: 'userId',
       as: 'user'
     });
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};