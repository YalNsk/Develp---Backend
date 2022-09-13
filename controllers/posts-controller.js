const Posts = require('../models/posts-model');

const postController = {
    getAll : async (req, res) => {
        const posts = await Posts.find();
        res.status(200).json(posts);
    },



    getByID : async (req, res) => {
        const id = req.params.id;
        const post = await Posts.findById(id);
        if(!post){
            return res.sendStatus(404)
        }
        res.status(200).json(post);
    },



    create: async (req, res) => {
        console.log("Nouveau message posté !");
        const postToAdd = Posts(req.body);
        console.log(postToAdd);
        await postToAdd.save();
        res.status(200).json(postToAdd);
    },


    
    update : async (req, res) => {
        const id = req.params.id;

        const {email, firstname, lastname, adress } = req.body

        const postUpdated = await Posts.findByIdAndUpdate(id, {
            email,
            firstname,
            lastname,
            adress
        }, { returnDocument: 'after' });

        if(!postUpdated)
        {
            return res.sendStatus(404);
        }

        else {
            res.status(200) 
        }
    },
    delete : async (req, res) => {
        const id = req.params.id;

        const postToDelete = await Posts.findByIdAndDelete(id);
        
        if(!postToDelete){
            return res.sendStatus(404); //NotFound -> id
        }
        else 
        {res.sendStatus(204);
            console.log("Utilisateur supprimé")
        }
    }
}

module.exports = postController;