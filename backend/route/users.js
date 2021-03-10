const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const User = require('../models/User');
const jwt= require('jsonwebtoken')
const session = require('express-session')


router.get('/', async (req, res) => {
  //test to see if the session is working
  //  req.session.username = "Eric"
  //  var user = req.session.username;
    //res.json( user)

    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/login', async (req, res) => {
    res.send('login');
});

router.get('/register', async (req, res) => {
    res.send('register');
});

router.get('/getCurrentUser', async (req, res) => {
    try {
        const getUser = req.session.username;
        res.json(getUser);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:userID', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userID });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

//UPDATE password
router.patch('/changePassword/:userID', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userID },
            {
                $set: { password: req.body.password },
            });
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

//UPDATE the user logged in
router.patch('/setCurrentUser', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: "604826183083612450744926" },
            {
                $set: { username: req.body.username },
            });
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

//UPDATE signature
router.patch('/editSignature/:userID', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userID },
            {
                $set: { signature: req.body.signature },
            });
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/login', async (req, res) => {
    //var sess = req.session;
    try {
        const data = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (!data) {
          return res.status(400).json({ message: "Invalid password or username" });
        }
      //  req.session.username = req.body.username;
        res.status(200).json({ message: "Success" });
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        signature: req.body.signature
    })
    try {
        const data = await User.findOne({
            username: user.username
        });
        if (data) {
            res.status(400).json({ message: "Username exists" });
        } else {
            const savedUser = await user.save();
            res.json(savedUser);
            //res.status(200).json({message:"Success"});
        }
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
