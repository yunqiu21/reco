const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number,
        default: 0
    },
    imageId: {
        type: String
    }
})


module.exports = mongoose.model('Posts', PostSchema);
