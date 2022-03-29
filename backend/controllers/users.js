// Import security 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import models
const models = require('../models');

// Import variables Dotenv
const dotEnv = require('dotenv');
dotEnv.config();


exports.signup = (req, res, next) => {

    if (req.body.email == null || req.body.firstName == null || req.body.lastName == null || req.body.password == null) {
      return res.status(400).json({ error: 'Champs manquants !'})
    }
    // Check if unique email in Database
    models.User.findOne({
      attributes: ['email'],
      where: { email: req.body.email}
    })
      .then((userFound) => {
      // Create user if he doesn't exist
        if(!userFound) {
          bcrypt.hash(req.body.password, 10, function(err, hash) {
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
                    { userId: user.id },
                    process.env.DB_TOKEN_SECRET,
                    { expiresIn: '24h'},
                  ),
                  Message: 'Utilisateur créé'
                });
              })
              .catch(err => res.status(500).json({ error }));
          }) 
        } else {
          return res.status(409).json({ error: 'Cet mail est déjà utilisé !' });
        } 
      })
      .catch(() => res.status(500).json({ error: "Incapable de vérifier l'utilisateur" })); 
};

exports.login = (req, res, next) => {
  //Check if values == empty
  if (req.body.email == null || req.body.password == null) {
    return res.status(400).json({ 'error': 'Champs manquants !'})
  }
  models.User.findOne({ where: { email: req.body.email } })

    .then(userFound => {
      if (userFound) {
        bcrypt.compare(req.body.password, userFound.password, function( err, resBcrypt) {
          if(resBcrypt) {
            return res.status(200).json({
              userId: userFound.id,
              token: jwt.sign(
                { userId: userFound.id },
                process.env.DB_TOKEN_SECRET,
                { expiresIn: '24h'},
              ),
              Message: 'Vous êtes bien connecté ' + userFound.firstName + ' ' + userFound.lastName
            });
          } else {
            return res.status(403).json({ error: "Mot de passe incorrect !" });
          }
        })  
      } else {
        return res.status(404).json({ error: 'Utilisateur non trouvé !'});
      }  
    })
    .catch(() => res.status(500).json({ error: "Incapable de vérifier l'utilisateur" }))
};