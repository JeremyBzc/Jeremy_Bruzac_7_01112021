const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

app.use(express.json());

const sequelize = new Sequelize('GroupomaniaDB', 'root', 'ClimbUpToNeverGoDown!', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('La connection a été établie avec succès !');
} catch (error) {
  console.error('Impossible de se connecter à la base de donnée', error);
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// EXEMPLE COURS À MODIF POUR LE PROJET 
/* app.post('/api/post', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Publication créé'
    });

});
app.get('/api/post', (req, res, next) => {
    const post = [
      {
        id: 'oeihfzeoi',
        title: 'Mon premier objet',
        content: 'Les infos de mon premier objet',
        user: Jerem,
      },
      {
        id: 'oeihfzeoi',
        title: 'Mon deuxième objet',
        content: 'Les infos de mon premier objet',
        user: Jerem,
      },
    ];
    res.status(200).json(post);
  });
*/
// FIN DE L'EXEMPLE

module.exports = app;