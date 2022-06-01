// Import models
const models = require("../models");

//Create comment
exports.createComment = (req, res, next) => {
  const userId = res.locals.userId;
  models.Post.findOne({
    where: { id: req.params.postId },
    include: [
      {
        model: models.User,
        attributes: ["firstName", "lastName"],
      },
    ],
  });
  models.Comment.create({
    UserId: userId,
    PostId: req.params.postId,
    content: req.body.content,
  })
    .then(() => res.status(201).json({ message: "Commentaire créé" }))
    .catch((error) => res.status(400).json({ error }));
};

// Get all comments
exports.getAllComment = (req, res, next) => {
  models.Comment.findAll({
    where: { postId: req.params.postId },
    order: [["createdAt"]],
    include: [
      {
        model: models.User,
        attributes: ["firstName", "lastName"],
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Delete comment
exports.deleteComment = (req, res, next) => {
  models.Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(200).json({ message: "Commentaire supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};
