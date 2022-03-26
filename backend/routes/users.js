const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

// Les routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
/* routeur.delete('/:id', auth, userCtrl.deleteUser)... */

// On Export
module.exports = router;