const express = require('express');
const { reset } = require('nodemon');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');


const GridFsStorage = require('multer-gridfs-storage');
let Grid = require("gridfs-stream")
let conn= mongoose.connection;
Grid.mongo = mongoose.mongo
let gfs; 

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);  
    gfs.collection('uploads');
});


const storage = new GridFsStorage({
    url: "mongodb+srv://jason1027:jason1027@reco.tbhpq.mongodb.net/Reco?retryWrites=true&w=majority",
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }
  });



//GET ALL IMAGES
router.get('/upload', (req, res) => {
    console.log("in here")
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        res.json("errr");
      } else {
        files.map(file => {
          if (
            file.contentType === 'image/jpeg' ||
            file.contentType === 'image/png'
          ) {
            file.isImage = true;
          } 
          else {
            file.isImage = false;
          }
        });
        res.json({ files: files });
      }
    });
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


//SUBMIT A POST
router.post('/', async (req, res) => {  //single means only getting one file
    //console.log(req.file);
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
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
    } catch(err){
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

/*------------IMAGE---------------- */

//  UPLOADING A SINGLE IMAGE TO DATA BASE AS GRIDFS
router.post('/upload', upload.single('file'), (req, res) => {
    res.json('upload to data base')
  });


//GET SPECIFIC IMAGEE (by file name)
router.get('/upload/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
      // File exists
      return res.json(file);
    });
  });

  
//DELETE SPECIFIC IMAGEE (by id)
router.delete('/upload/:id', (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, GridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
      res.json("removed a post")
    });
  });





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