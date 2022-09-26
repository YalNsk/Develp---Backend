const postsRouter = require('express').Router(); 
const postController = require('../controllers/posts-controller');
const bodyValidation = require('../middlewares/bodyValidation');
const idValidator = require('../middlewares/idValidator');
const {insertPostValidator, updatePostValidator} = require("../validators/posts-validator");
const multer = require('multer'); 
const uuid = require('uuid');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {cb(null, 'public/uploads/illus')},
    filename : (req, file, cb)  => {
        const name = uuid.v4()
        const extension = file.originalname.split('.').at(-1)
        cb(null, name + '.' + extension)
    }
})
const upload = multer({ storage });


postsRouter.route('/')
    .get(postController.getAll) //Voir tous les posts
    .post(/*bodyValidation(insertPostValidator),*/ upload.single('illu'),  postController.create) //Création d'un post

postsRouter.route('/:id')
    .get(idValidator(), postController.getByID) //Info d'un post
    .put(bodyValidation(updatePostValidator), idValidator(), postController.update) //Modification d'un post
    .delete(idValidator(), postController.delete); //Suppresion d'un post


module.exports=postsRouter;