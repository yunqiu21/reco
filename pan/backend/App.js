const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv/config');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

 
//import routes
const postsRoutes = require('./route/posts');
const usersRoutes = require('./route/users');

app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

//routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
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
