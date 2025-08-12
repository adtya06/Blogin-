const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware, [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required')
], postController.createPost);

module.exports = router;