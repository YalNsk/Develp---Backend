const yup = require('yup');

const technoRegex = /^(Python)|(JavaScript)|(Java)|(C)|(C#)|(Ruby)|(PHP)|(Objective-C)|(Other)$/i;

const userValidator = yup.object({
    firstname : yup.string().trim().required().min(3).max(150),
    lastname : yup.string().trim().required().min(3).max(150),
    pseudo : yup.string().trim().required().min(3).max(150),
    password : yup.string().min(8).max(50).required(),
    techno : yup.string().matches(technoRegex)
});

module.exports = userValidator;