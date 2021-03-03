const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required : true
    },
<<<<<<< HEAD
=======
    author:{
        type: String,
        required: true
    },
>>>>>>> backend_Pan
    description:{
        type: String,
        required : true
    },
    date: {
        type: Date,
        default : Date.now
    },
<<<<<<< HEAD

})


module.exports = mongoose.model('Posts', PostSchema);
=======
    like: {
        type: Number,
        default: 0
    },
})


module.exports = mongoose.model('Posts', PostSchema);
>>>>>>> backend_Pan
