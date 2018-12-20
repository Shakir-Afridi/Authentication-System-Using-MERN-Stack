const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema 
const Users = new Schema({
    username: {
        type: String
    },
    social_signin: {
        name: {
            type: String
        },
        id: {
            type: String
        }
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    profile_picture: {
        type: String
    },
    create_on: {
        type: Date,
        default: Date.now
    }
});

module.exports = user = mongoose.model('user', Users);