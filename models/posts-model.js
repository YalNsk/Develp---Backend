const { Schema, model, Types  } = require('mongoose');
const User = require('./user-model');

const postsSchema = new Schema({

    senderiD : {
        type : Types.ObjectId,
        required : true,
        ref : User
    },

    message : {
        type : String,    
        required : true,
        trim : false
    },

    techno : {
        type : String,
        enum : ['Python', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'Ruby', 'PHP', 'Objective-C', 'Other']
    },

    budget : {
        type : String,
        required : true,
        trim : true
    }, 

    illustration : 

    {
        type : String,
        required : false
    }

});

const Posts = model('posts', postsSchema);

module.exports = Posts;