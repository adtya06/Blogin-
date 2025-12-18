const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { fullName, username, email, password } = req.body;

        let user = await userModel.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(409).json({ message: 'User with this email or username already exists' }); 
        }

        user = new userModel({
            fullName,
            username,
            email,
            password,
        });

        await user.save();

        const token = user.generateAuthToken();

        res.status(201).json({ 
            message: 'User registered successfully!',
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
            }
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = user.generateAuthToken();

        res.status(200).json({
            message: 'Login successful',
            token, 
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
            }
        })
    }

    catch (error) {
        console.error("LOGIN_ERROR:", error);
        res.status(500).json({ message: 'Server error' });
    }
};