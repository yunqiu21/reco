const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');
var session = require('express-session')
//import routes
const postsRoutes = require('./route/posts');

app.use(cors());
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'session_pwd&^#',
  cookie: {

  },
}));
//import routes

const usersRoutes = require('./route/users');

app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);
app.use('/search', express.static('search'));

app.use('/uploads', express.static('uploads'));
//routes
app.get('/', (req, res) => {
  //res.send('Hello, world!');
  if(! req.session.user){
    req.session.user = "Unknown";
  }
  let usr = req.session.user;
  res.send('the current user is ' + usr);
});

//Connect to DB
mongoose.connect(
  "mongodb+srv://jason1027:jason1027@reco.tbhpq.mongodb.net/Reco?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => {
    console.log('Connected to DB');
  });


app.listen(5000, () => {
  console.log('Server running at port 5000');
});
