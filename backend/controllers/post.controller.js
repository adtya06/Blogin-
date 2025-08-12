const postModel = require('../models/post.model');
const { validationResult } = require('express-validator');

module.exports.createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation errors', errors: errors.array() });
    }

    try {
        const { title, content } = req.body;

        const authorId = req.user._id;

        post = new postModel({
            title,
            content,
            author: authorId
        })

        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error });
    }
}
