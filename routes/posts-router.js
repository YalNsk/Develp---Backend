const postsRouter = require('express').Router(); 
const postController = require('../controllers/posts-controller');
const bodyValidation = require('../middlewares/bodyValidation');
const idValidator = require('../middlewares/idValidator');
const {insertPostValidator, updatePostValidator} = require("../validators/posts-validator");


postsRouter.route('/')
    .get(postController.getAll) //Voir tous les posts
    .post(bodyValidation(insertPostValidator), postController.create) //Création d'un post

postsRouter.route('/:id')
    .get(idValidator(), postController.getByID) //Info d'un post
    .put(bodyValidation(updatePostValidator), idValidator(), postController.update) //Modification d'un post
    .delete(idValidator(), postController.delete); //Suppresion d'un post


module.exports=postsRouter;