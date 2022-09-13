const jwt = require('jsonwebtoken');
const {JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET} = process.env;



const jwtUtils = {
    
// Création du token

    generate : ({id, pseudo}) => {
        return new Promise((resolve, reject) => {
            const payload = {id, pseudo};

            const options = {
                algorithm : 'HS512',
                expiresIn : '20j',
                audience: JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }

            jwt.sign(payload, JWT_SECRET, options, (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            })
        });
    },
    
    // Décodage du token
    decode : (token) => {
            if (!token) {
                return Promise.reject(new Error('No token'));
            }
            
            return new Promise((resolve, reject) => {
            
            const options = {
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }

            jwt.verify(token, JWT_SECRET , options, (error, payload) => {

                if(error){
                    return reject(error);
                }
                resolve(payload);
            })

        });
    }
}


module.exports = jwtUtils;