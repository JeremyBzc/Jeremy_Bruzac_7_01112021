const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profiles')

// Auth middleware
const auth = require('../middleware/auth');

// Les routes
router.get("/:id", auth, profileCtrl.getUserProfile);
router.put("/:id", auth, profileCtrl.editUserProfile);
router.delete("/:id", auth, profileCtrl.deleteUserProfile);

module.exports = router;
