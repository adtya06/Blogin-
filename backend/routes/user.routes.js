const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('username').isLength({ min : 3 }).not().isEmpty().withMessage('Username is required'),
    body('name').not().isEmpty().withMessage('Name is required'),
], userController.registerUser); 


module.exports = router;