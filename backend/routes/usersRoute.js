const express = require('express');
const usersRoute = express.Router();
const { User } = require('../models');
const generateToken = require('../config/generateToken');
const authorize = require("../middleware/authorize");

usersRoute.use(express.json());


// All users
usersRoute.get(
    '/',
    async (req, res) => {
      const users = await User.findAll();
  
      if (users === null) {
        res.sendStatus(500);
        console.log('There are no user');        
      } else {
        res.sendStatus(200);
      }
    });

// Sign up
usersRoute.post('/register', async (req, res) => {
    let { name, email, password } = req.body;
    email = email.toLowerCase();
    const isUser = await User.findOne({ where: {email: email} });

    if(isUser === null){
        const userCreated = User.create({
            name,
            email,
            password
        });
    
        if (userCreated != null) {
            res.status(200).end();
        } else {
            res.sendStatus(500);
            console.log('User creating failed');
        }
        
    } else {
        res.sendStatus(500);
        console.log('Email already existed!');
    }
    });

// Log in
usersRoute.post('/login', async (req, res) => {
    let { email, password } = req.body;
    email = email.toLowerCase();
    const user = await User.findOne({ where: {email: email} });
    if(user != null && password === user.password){
        res.status(200);
        res.json({
            id: user.id,
            name: user.name,            
            email: user.email,
            token: generateToken(user.id),
          });
    } else {
        res.sendStatus(401);
        console.log('Invalid credentials');
    }
});

usersRoute.post("/authverify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = usersRoute;
