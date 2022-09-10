const { Schema, model  } = require('mongoose');

const userSchema = new Schema({

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
        type : Image,
        required : false
    }

});