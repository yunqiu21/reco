const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
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

router.delete('/:userID', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userID });
        res.json(removedUser);
    } catch {
        res.json({ message: err });
    }
})

//UPDATE password
router.patch('/:userID', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userID },
            {
                $set: { password: req.body.password },
            });
        res.json(updatedUser);
    } catch {
        res.json({ message: err });
    }
})

router.post('/login', async (req, res) => {
	const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    try {
        const data = await User.findOne({
            username: user.username,
            password: user.password
        })
        if(!data){
            res.status(400).json({message:"Invalid password or username"});
        }else{
            res.status(200).json({message:"Success"});
        }
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
        if (data){
            res.status(400).json({message:"Username exist"});
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