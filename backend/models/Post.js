'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};