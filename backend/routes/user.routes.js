const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('username').isLength({ min : 3 }).not().isEmpty().withMessage('Username is required'),
    body('fullName').not().isEmpty().withMessage('Full name is required'),
], userController.registerUser); 

router.post('/login', userController.loginUser);


module.exports = router;