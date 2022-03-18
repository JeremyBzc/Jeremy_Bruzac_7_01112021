// Import security 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import models
const models = require('../models');

// Import variables Dotenv
const dotEnv = require('dotenv');
dotEnv.config();


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = models.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                isAdmin: false,
            });
            user.save()
              .then(() => res.status(201).json({ message: 'Utilisateur crée !'}))
              .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  models.User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !'});
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: "Mot de passe incorrect !"})
            }
            res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                  { userId: user.id },
                  process.env.DB_TOKEN,
                  { expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};