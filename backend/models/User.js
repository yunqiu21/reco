const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },
    password:{
        type: String,
        required: true
        // minLength: 8,
        // maxLength: 16
    },
    signature:{
        type: String,
        required: true
        //default : "No signature"
    },
    date: {
        type: Date,
        default : Date.now
    },
    // imageId: {
    //     type: String
    // }
})


module.exports = mongoose.model('Users', UserSchema);
