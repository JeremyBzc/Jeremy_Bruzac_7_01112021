const jwt = require('jsonwebtoken');
const models = require('../models');
const dotEnv = require('dotenv');
dotEnv.config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // Check token
        const decodedToken = jwt.verify(token, process.env.DB_TOKEN_SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valide !';
        } else {
            res.locals.userId = userId
            models.User.findOne({
                where : { id : userId}
            })
            .then(user => {
                res.locals.isAdmin = user.isAdmin
                next()
            })
        }
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée !'});
    }
};