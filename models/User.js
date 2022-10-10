const mongoose = require('mongoose');
// creating the user model 

const UserSchema = new mongoose.Schema({
    //creating objests and their attributes 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:  true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type:  String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);