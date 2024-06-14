const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: 'string', 
        required: true
    },
    password: {
        type: 'string', 
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
    },
    status: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = User;