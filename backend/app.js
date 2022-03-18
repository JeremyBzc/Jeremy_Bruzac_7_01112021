const express = require('express');
const bodyParser = require('body-parser');
// const { Sequelize } = require('sequelize');

// Imports Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');


// Instantiate server
const app = express();

app.use(express.json());

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

// Les Routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/')

module.exports = app;