const mongoose = require('mongoose');
const brycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength : [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select : false, // Exclude password from queries by default
    }
},
{ timestamps: true }) 

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await brycrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    const salt = await brycrypt.genSalt(10);
    return await brycrypt.hash(password, salt);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;