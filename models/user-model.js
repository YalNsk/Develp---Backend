const { Schema, model  } = require('mongoose');
const {isEmail} = require ('validator')

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        validate : (value) => {
            if(!isEmail(value)) {
                throw new Error ('Mail invalide')
            }
        },
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    pseudo : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    role : {
        type : String,
        enum : ['User', 'Admin'],
        required : true,
        default : 'User'
    },
    techno : {
        type : String,
        enum : ['Python', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'Ruby', 'PHP', 'Objective-C', 'Other']
    }
},
{
    collection :'user',
    timestamps : false
});

const User = model('user', userSchema);

module.exports = User;