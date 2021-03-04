const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/login', function (req, res) {
	const post = new Post({
        username: req.body.username,
        password: req.body.password
    })
    try {
        User.findOne({
            username: post.username,
            password: post.password
        }, (err, user)=>{
            if(err){
                console.log(error);
                return;
            }
            if(!user){
                res.status(400).json({message:"Invalid password or username."});
            }else{
                res.status(200).json({message:"Success"});
            }
        })
    } catch (err) {
        res.json({ message: err });
    }
});