const postsRouter = require('express').Router(); 
const postController = require('../controllers/posts-controller');
const idValidator = require('../middlewares/idValidator');


postsRouter.route('/')
    .get(postController.getAll) //Voir tous les posts
    .post(postController.create) //Création d'un post

postsRouter.route('/:id')
    .get(idValidator(), postController.getByID) //Info d'un post
    .put(idValidator(), postController.update) //Modification d'un post
    .delete(idValidator(), postController.delete); //Suppresion d'un post


module.exports=postsRouter;