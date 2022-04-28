const models = require("../models");
const dotEnv = require("dotenv");
dotEnv.config();

//Get User/Admin Profile
exports.getUserProfile = (req, res, next) => {
  const userId = res.locals.userId;
  const isAdmin = res.locals.isAdmin;

  models.User.findOne({
    attributes: ["id", "firstName", "lastName", "email", "bio", "createdAt"],
    where: { id: req.params.id },
  })
    .then((userFound) => {
      if (userFound == null) {
        return res.status(404).json({ error: "Utilisateur non trouvé !" });
      }
      if (!isAdmin && userFound.id != userId) {
        return res.status(403).json({ error: "Utilisateur non autorisé !" });
      }
      return res.status(201).json(userFound);
    })
    .catch(() => {
      return res
        .status(500)
        .json({ error: "Échec de l'accès à l'utilisateur" });
    });
};
// Profile Editing
exports.editUserProfile = (req, res, next) => {
  const userId = res.locals.userId;
  const isAdmin = res.locals.isAdmin;
  const bio = req.body.bio;
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;

  models.User.findOne({
    attributes: ["id", "bio"],
    where: { id: req.params.id },
  })
    .then((userFound) => {
      if (!isAdmin && userFound.id != userId) {
        return res.status(403).json({ error: "Utilisateur non autorisé !" });
      }
      userFound
        .update({
          bio: bio ? bio : userFound.bio,
          lastName: lastName ? lastName : userFound.lastName,
          firstName: firstName ? firstName : userFound.firstName,
        })
        .then(() => {
          return res
            .status(202)
            .json({ Message: "Modifications effectuées !" });
        })
        .catch(() => {
          return res.status(500).json({ error: "Échec de l'édit utilisateur" });
        });
    })
    .catch(() => {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    });
};
// Delete USER
exports.deleteUserProfile = (req, res, next) => {
  models.User.destroy({
    where: { id: res.locals.userId },
  })
    .then(() => res.status(200).json({ message: "Utilisateur supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};
