const postsRouter = require('express').Router(); 
const postController = require('../controllers/posts-controller');


postsRouter.route('/')
    .get(postController.getAll) //Voir tous les posts
    .post(postController.create) //Création d'un post

postsRouter.route('/:id')
    .get(postController.getByID) //Info d'un post
    .put(postController.update) //Modification d'un post
    .delete(postController.delete); //Suppresion d'un post


module.exports=postsRouter;