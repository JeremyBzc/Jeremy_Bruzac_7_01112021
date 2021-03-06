"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Post.hasMany(models.Comment);
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
