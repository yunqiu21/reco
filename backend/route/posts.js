const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

//function that selects what type of file can be uploaded
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'||file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

//initialize multer , storing all file in this Path
const upload = multer({
    storage: storage, 
    limits:{fileSize: 1024*1024*10},
    fileFilter: fileFilter
});

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
router.post('/', upload.single('uploadImage'), async (req, res) => {  //single means only getting one file
    //console.log(req.file);
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        uploadImage: req.file.path
    })
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
                $set: { like: req.body.like }
            });
        res.json(updatedPost);
    } catch {
        res.json({ message: err });
    }
})


// SEARCH BY KEYWORD
router.post("/search", async (req, res) => {
    try {
        const query = req.body.query
        const queryList = query.split(" ")
        allQueries = []
        queryList.forEach(element => {
            allQueries.push({ title: { $regex: String(element) } })
        });
        const allPosts = await Post.find({ $or: allQueries })
        if (!allPosts || allPosts.length === 0) {
            res.status(400).send({ message: "No post was found" })
        }
        res.status(200).send(allPosts)
    } catch {
        res.json({ message: err });
    }
})


module.exports = router;