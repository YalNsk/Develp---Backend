const userRouter = require('express').Router(); 
const userController = require('../controllers/user-controller');

userRouter.route('/')
    .get(userController.getAll) //Voir tous les users

userRouter.route('/:id')
    .get(userController.getByID) //Info d'un user
    .put(userController.update) //Modification d'un user
    .delete(userController.delete); //Suppresion d'un user



module.exports=userRouter;