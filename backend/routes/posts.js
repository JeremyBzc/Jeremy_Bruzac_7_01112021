const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts');
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// Les routes posts
router.post('/', auth, multer, postCtrl.createPost);
router.delete('/:id', auth, postCtrl.deletePost); 
router.put('/:id', auth, multer, postCtrl.editPost)
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/', auth, postCtrl.getAllPost); 

// Les routes comments liés au posts
router.post('/:postId/comment', auth, commentCtrl.createComment); 
router.delete('/:postId/comments/:id', auth, commentCtrl.deleteComment); 
router.get('/:postId/comments', auth, commentCtrl.getAllComment);



// On Export
module.exports = router;