// Import models
const models = require('../models/post');
const fs = require('fs');


// Create Post
exports.createPost = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide !"
    })
  }
    const post = models.Post.create({
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        likes : 0,
        attachment: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
    });
    post
    .save()
    .then(() => res.status(201).json({ message: "Publication créée !"}))
    .catch(error => res.status(400).json({ error: "Echec de la publication" }));
};

// Get All Post
exports.getAllPost = (req, res, next) => {
    models.Post.findAll({
      order: [["createdAt"]],
      include : [
        {
          model: models.User,
          attributes: ["firstName", "LastName"],
        },
      ],  
    })
      .then(posts => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));     
}

// Delete Post
exports.deletePost = (req, res, next) => {
  // Is admin
    models.Post.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(() => res.status(200).json({ message: "Post supprimé !"}))
      .catch((error) => res.status(400).json({ error }));

}

// Get One post

exports.getOnePost = (req, res, next) => {
    models.Post.findOne({
        where: { id: req.params.id},
    })
     .then( post => res.status(200).json(post))
     .catch(error => res.status(400).json({ error }));
}
