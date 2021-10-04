const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: false,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;