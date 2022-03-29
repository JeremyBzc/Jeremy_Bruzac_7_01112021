// Import security 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import models
const models = require('../models');

// Import variables Dotenv
const dotEnv = require('dotenv');
dotEnv.config();


exports.signup = (req, res, next) => {
   console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = models.User.build({
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hash,
                isAdmin: false,
                
            });
            if (user.email == null || user.firstName == null || user.lastName == null || user.password == null) {
              return res.status(400).json({ 'error': 'Champs manquants !'})
            } else {
              user.save()
              .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
              .catch(error => res.status(400).json({ error }));
            }  
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  models.User.findOne({ where: { email: req.body.email } })
    .then(user => {
      console.log(user);
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !'});
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: "Mot de passe incorrect !"})
            }
            res.status(200).json({
                user: user,
                token: jwt.sign(
                  { userId: user.id },
                  process.env.DB_TOKEN_SECRET,
                  { expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};