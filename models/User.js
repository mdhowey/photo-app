const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    profilePhoto: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        required: true, 
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;