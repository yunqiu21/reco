const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const Post = require('../models/Post');
// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

//GET BACK ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        //const posts = await Post.find().limit   // this will return how many you want the DB
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/specific', async (req, res) => {
    res.send('Hello, specific post!');
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log(post);
    try {
        const savedPost = await post.save()  //save to data base
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});


//SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch {
        res.json({ message: err });
    }
})

//DELETE A SPECIFIC POST
router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postID });
        res.json(removedPost);
    } catch {
        res.json({ message: err });
    }
})

//UPDATE A POST
//DELETE A SPECIFIC POST
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postID },
            {
                $set: { title: req.body.title }
            });
        res.json(updatedPost);
    } catch {
        res.json({ message: err });
    }
})

module.exports = router;