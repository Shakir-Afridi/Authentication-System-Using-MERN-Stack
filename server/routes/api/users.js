const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const passport = require('passport');

// User Model
const User = require('../../models/userModel');

// @route POST to /auth/createUser
// @desc  create a user by signing up from this app
router.post('/createUser', (req, res) => {

    User.find({ username: req.body.username })
    .then(usr => {
        if (!_.isEmpty(usr)){
            res.json({code: 208, message: "User already exist with this email", email: req.body.username})
        } else {
            const saltRounds = 10;
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                var newUser = new User({
                    username: req.body.username,
                    password: hash
                });
            
                newUser.save()
                    .then(user => {
                        res.json({code: 201, message: "user created!", username: req.body.username})
                        console.log('user created!')
                    })
                    .catch(err => res.json(err))
            });
        }
    })
    .catch(err => res.json(err));
})

// @route POST to auth/login
// @desc user exits or not
router.post('/login', (req, res) => {

    User.find({ username: req.body.username })
        .then(usr => {
            if (!_.isEmpty(usr)){
                bcrypt.compare(req.body.password, usr[0].password, function(err, ress) {
                    if (ress === true){
                        if (req.body.username = usr[0].username){
                            res.json({code: 200, message: "welcome"})
                        }
                    } else {
                        res.json({code: 501, message: "wrong password"})
                    }
                });
            }else{
                res.json({code: 401, message: "User doesn't exist with this username"})
            }
        })
        .catch(err => res.json(err));
});

// @rouet GET to auth/social_signin (Google and Facebook)
// @route authenticate using google and facebook
router.post('/social_sigin', (req, res) => {
    var newUser = new User({
        username: req.body.username,
        profile_picture: req.body.profile_picture,
        name: req.body.name,
        social_signin: req.body.social_signin
    });

    User.find({ "social_signin.id": req.body.social_signin.id })
        .then(user => {
            let data;
            if (_.isEmpty(user)){
                newUser.save()
                    .then(user => {
                        data = {
                            username: user[0].username,
                            social_signin: user[0].social_signin,
                            name: user[0].name
                        }
                        res.json({code: 201, message: "user created using " + req.body.social_signin.name + " account", data: data})
                        console.log("user created using " + req.body.social_signin.name + " account")
                    })
                    .catch(err => res.json(err))
            } else {
                data = {
                    username: user[0].username,
                    social_signin: user[0].social_signin,
                    name: user[0].name
                }
                res.json({code: 208, message: "user already exists while signing in with "  + req.body.social_signin.name + " account", data: data})
                console.log("user already exists while signing in with " + req.body.social_signin.name + " account")
            }
        })
        .catch(err => res.json(err))
})

// @route GET auth/profile
// @desc get profile data of logged in user
router.post('/profile', (req, res) => {
    if (req.body.social_signin){
        console.log('social ', req.body.social_signin)
        User.find({ "social_signin.id": req.body.social_signin })
            .then(user => {
                let data = {
                    name: user[0].name,
                    image: user[0].profile_picture,
                    username: user[0].username
                }
                res.json({code: 200, message: "data fetch successfully", profile_data: data})
            })
            .catch(err => res.json(err))
    } else {
        console.log('username ', req.body.username)
        User.find({ "username": req.body.username })
        .then(user => {
            let data = {
                name: user[0].name,
                image: user[0].profile_picture,
                username: user[0].username
            }
            res.json({code: 200, message: "data fetch successfully", profile_data: data})
        })
        .catch(err => res.json(err))
    }
})


module.exports = router;