const { Schema, model  } = require('mongoose');

const postsSchema = new Schema({

    pseudo : {
        type : String,
        required : true,
        trim : true
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