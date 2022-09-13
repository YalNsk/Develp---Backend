const authRouter = require('express').Router(); 
const authController = require('../controllers/auth-controller');


authRouter.route('/login')
    .post(authController.login)

authRouter.route('/register')
    .post(authController.register)

module.exports = authRouter;