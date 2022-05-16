// Import models
const models = require("../models/");
const fs = require("fs");

// Get All Post
exports.getAllPost = (req, res, next) => {
  const fields = req.query.fields;
  // const limit = parseInt(req.query.limit);
  // const offset = parseInt(req.query.offset);
  const order = req.query.order;

  models.Post.findAll({
    order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
    attributes: fields !== "*" && fields != null ? fields.split(",") : null,
    include: [
      {
        model: models.User,
        attributes: ["firstName", "lastName"],
      },
    ],
  })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

// Get One post
exports.getOnePost = (req, res, next) => {
  models.Post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: models.User,
        attributes: ["firstName", "lastName"],
      },
    ],
  })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json({ error }));
};

// Create Post
exports.createPost = (req, res, next) => {
  const userId = res.locals.userId;
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide !",
    });
  }

  models.User.findOne({
    where: { id: userId },
  })
    .then(() => {
      models.Post.create({
        UserId: userId,
        title: req.body.title,
        content: req.body.content,
        likes: 0,
        attachment: req.file
          ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
          : null,
      })
        .then(() => res.status(201).json({ message: "Publication créée !" }))
        .catch((error) =>
          res.status(500).json({ error: "Echec de la publication" })
        );
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
};

// Edit Post
exports.editPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        attachment: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  models.Post.update(
    { id: req.params.id },
    { ...postObject, id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Post modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Delete Post
exports.deletePost = (req, res, next) => {
  models.Post.findOne({ id: req.params.id })
    .then((post) => {
      const filename = post.attachment.split("/images/")[1];
      fs.unlink(`image/${filename}`, () => {
        models.Post.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then(() => res.status(200).json({ message: "Post supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error: "Erreur supp" }));
};
