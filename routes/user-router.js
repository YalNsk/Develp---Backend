const userRouter = require('express').Router(); 
const userController = require('../controllers/user-controller');
const idValidator = require('../middlewares/idValidator');

userRouter.route('/')
    .get(userController.getAll) //Voir tous les users

userRouter.route('/:id')
    .get(idValidator(), userController.getByID) //Info d'un user
    .put(idValidator(), userController.update) //Modification d'un user
    .delete(idValidator(), userController.delete); //Suppresion d'un user



module.exports=userRouter;