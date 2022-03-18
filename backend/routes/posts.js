const express = require('express');
const router = express.Routeur();

// Future Middleware d'authentification

// Future Logique métier messages controllers

// Les routes
router.get("/"); // Get Posts
router.get("/users/:userId"); // Get Posts 
router.get("/:postId"); // Get one Post
router.post("/"); // Send Post
router.put("/:postId"); // Update Post
router.delete("/:postId"); // Delete Post

// On Export
module.exports = router;