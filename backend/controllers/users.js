// Import security
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import models
const models = require("../models");

// Import variables Dotenv
const dotEnv = require("dotenv");
dotEnv.config();

// Import regex email
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

exports.signup = (req, res, next) => {
  //Check if values == empty
  if (
    req.body.email == null ||
    req.body.firstName == null ||
    req.body.lastName == null ||
    req.body.password == null
  ) {
    return res.status(400).json({ error: "Champs manquants !" });
  }
  //Check email'convention
  if (!EMAIL_REGEX.test(req.body.email)) {
    return res.status(400).json({ error: "L'email n'est pas valide" });
  }
  //Check password'convention
  if (!PASSWORD_REGEX.test(req.body.password)) {
    return res
      .status(400)
      .json({
        error:
          "Mot de passe invalide ! Doit être entre 4 et 8 caractères incluant 1 Majuscule, 1 Minuscule et 1 chiffre.",
      });
  }

  // Check if unique email in Database
  models.User.findOne({
    attributes: ["email"],
    where: { email: req.body.email },
  })
    .then((userFound) => {
      // Create user if he doesn't exist
      if (!userFound) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          const user = models.User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            isAdmin: false,
          })
            .then((user) => {
              res.status(201).json({
                userId: user.id,
                token: jwt.sign(
                  { userId: user.id, isAdmin: user.isAdmin },
                  process.env.DB_TOKEN_SECRET,
                  { expiresIn: "24h" }
                ),
                Message: "Utilisateur créé",
              });
            })
            .catch((err) => res.status(500).json({ error }));
        });
      } else {
        return res.status(409).json({ error: "Cet mail est déjà utilisé !" });
      }
    })
    .catch(() =>
      res.status(500).json({ error: "Incapable de vérifier l'utilisateur" })
    );
};

exports.login = (req, res, next) => {
  //Check if values == empty
  if (req.body.email == null || req.body.password == null) {
    return res.status(400).json({ error: "Champs manquants !" });
  }
  models.User.findOne({ where: { email: req.body.email } })

    .then((userFound) => {
      if (userFound) {
        bcrypt.compare(
          req.body.password,
          userFound.password,
          function (err, resBcrypt) {
            if (resBcrypt) {
              return res.status(200).json({
                userId: userFound.id,
                token: jwt.sign(
                  { userId: userFound.id, isAdmin: userFound.isAdmin },
                  process.env.DB_TOKEN_SECRET,
                  { expiresIn: "24h" }
                ),
                firstName: userFound.firstName,
                lastName: userFound.lastName,
                email: userFound.email,
                bio: userFound.bio,

                Message:
                  "Vous êtes bien connecté " +
                  userFound.firstName +
                  " " +
                  userFound.lastName,
              });
            } else {
              return res
                .status(403)
                .json({ error: "Mot de passe incorrect !" });
            }
          }
        );
      } else {
        return res.status(404).json({ error: "Utilisateur non trouvé !" });
      }
    })
    .catch(() =>
      res.status(500).json({ error: "Incapable de vérifier l'utilisateur" })
    );
};
