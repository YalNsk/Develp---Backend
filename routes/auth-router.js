const authController = require('../controllers/auth-controller');
const bodyValidation = require('../middlewares/bodyValidation');
const { registerValidator, loginValidator } = require('../validators/auth-validator');

const authRouter = require('express').Router();

authRouter.route('/login')
    .post(bodyValidation(loginValidator), authController.login)

authRouter.route('/register')
    .post(bodyValidation(registerValidator), authController.register)

module.exports = authRouter;