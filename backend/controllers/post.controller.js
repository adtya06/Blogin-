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

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate('author', 'username').sort({ createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
}

module.exports.getPostById = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id).populate('author', 'username');
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
}

module.exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await postModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this post' });
        }
        post.title = title;
        post.content = content;
        await post.save();
        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
}

module.exports.deletePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to delete this post' });
        }

        await postModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
}