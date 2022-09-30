
const bodyValidation = (yupValidator) => {
    return async (req, res, next) => {

        try {
            console.log('body', req.data);
            const validData = await yupValidator.noUnknown().validate(req.body, { abortEarly : false});

            req.body = validData;

            next();
        }

        catch(e) {
            console.log(e);
            return res.sendStatus(400); 
        }
    }

}

module.exports = bodyValidation;