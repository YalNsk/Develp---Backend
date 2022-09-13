const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;
const technoRegex = /^(Python)|(JavaScript)|(Java)|(C)|(C#)|(Ruby)|(PHP)|(Objective-C)|(Other)$/i;


const insertPostValidator = yup.object({
    message : yup.string().trim().max(1500),
    senderid : yup.string().required().matches(idRegex),
    techno : yup.string().matches(technoRegex),
    budget : yup.string().required()
});

const updatePostValidator = yup.object({
    message : yup.string().trim().max(1500),
    techno : yup.string().matches(technoRegex),
    budget : yup.string().required()
});

module.exports = { insertPostValidator, updatePostValidator };