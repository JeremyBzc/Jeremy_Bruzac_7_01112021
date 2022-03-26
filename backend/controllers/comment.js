// Import models
const models = require('../models/comment');

//Create comment
exports.createComment = (req, res, next) => {
    const comment = models.Comment.create({
        userId: res.locals.userId,
        postId: req.params.postId,
        content: req.body.content,
    });
    comment
    .save()
    .then(() => res.status(201).json({ message: "Commentaire créé", comment}))
    .catch((error) => res.status(400).json({ error }));
}

// Get all comments
exports.getAllComment = (req, res, next) => {
    models.Comment.findAll({
        order: [["createdAt"]],
        include : [
          {
            model: models.User,
            attributes: ["firstName", "LastName"],
          },
        ],  
    })
     .then(result => {
         res.status(200).json(result);
     })
     .catch((error) => res.status(400).json({ error }));
}

// Delete comment
exports.deleteComment = (req, res, next) => {
    models.Comment.destroy({
        where: {
            id: req.params.id
        }
    })
     .then(() => res.status(200).json({ message: "Commentaire supprimé"}))
     .catch((error) => res.status(400).json({ error }));
}