const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session')

// routes
const createUsers = require('./routes/api/users');

const app = express();

// DB config 
const db = require('./config/keys/keys').mongoURI; // replace with your mongoURI

// connect to db
mongoose.connect(db)
    .then(() => console.log('mongo db connected...'))
    .catch(err => console.log(err));

// body parser 
app.use(bodyParser.json());

// creating cookie
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

// all route starting with /auth should refer createUsers
app.use('/auth', createUsers);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server start at post ${PORT}`)
})