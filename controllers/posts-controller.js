const Posts = require('../models/posts-model');

const postController = {
    getAll : async (req, res) => {
        const offset = req.query.offset?req.query.offset:0;
        const limit = req.query.limit?req.query.limit:0;
        const posts = await Posts.find().sort({updatedAt : -1}).limit(limit).skip(offset);
        const count = await Posts.countDocuments();
        res.status(200).json({posts, count});
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
        const {titre, senderiD, message, techno, budget} = req.body;

        console.log('fichier après insertion backend', req.file);

        const postToAdd = Posts({
            titre, 
            senderiD,
            message,
            techno,
            budget,
            illu : `http://localhost:8080/uploads/illus/${req.file.filename}`
        });

        await postToAdd.save();
        res.status(200).json(postToAdd);

        console.log("Nouveau message posté !");
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