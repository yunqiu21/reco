const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');

//import routes
const postsRoutes = require('./route/posts');

app.use(cors());
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(methodOverride('_method'));


//const usersRoutes = require('./route/users');
const usersRoutes = require('./route/users');

app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);
app.use('/search', express.static('search'));

app.use('/uploads', express.static('uploads'));
//routes
app.get('/', (req, res) => {
  //res.send('Hello, world!');
  if (!req.session.user) {
    req.session.user = "default";
  }
  let usr = req.session.user;
  res.send('the current user is ' + usr);
});

//Connect to DB
mongoose.connect(
  "mongodb+srv://jason1027:jason1027@reco.tbhpq.mongodb.net/Reco?retryWrites=true",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    writeConcern: {
      w: "majority"
    }
  },
  () => {
    console.log('Connected to DB');
  });


app.listen(5000, () => {
  console.log('Server running at port 5000');
});
