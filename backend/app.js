const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const { sequelize } = require('./models/index');

// Imports Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const profileRoutes = require('./routes/profiles');

// Import variables environnements
const dotEnv = require('dotenv');
dotEnv.config();

// Check connection DB
try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL !');
} catch (error) {
    console.log('Impossible de se connecter, erreur suivante :', error);
}; 


// Instantiate server with express
const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

});

// Config Body parser + forcer le parse dans des objets inclus dans d'autres objets
app.use(bodyParser.urlencoded({ extended: true }));
// On parse du Json
app.use(bodyParser.json());

//Gestion de l'enregistrement des images dans le dossier image
app.use('/images', express.static(path.join(__dirname, 'images')));

// Utilsation des Routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/postId/comments', postRoutes);
app.use('/api/profiles', profileRoutes);

app.use(helmet());

module.exports = app;