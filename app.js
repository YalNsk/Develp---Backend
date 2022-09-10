// ↓ Pour pouvoir aller chercher les variables d'environnement ↓
require('dotenv-flow').config();  


// Création du serveur
const express =  require("express");
const cors = require("cors");

app = express(); 
app.use(cors());

// Extraction des variables dont on a besoin
const {MESSAGE, NODE_ENV, PORT, DB_CONNECTION} = process.env;   

console.log(DB_CONNECTION);
console.log('Lancé en', NODE_ENV, ' : ', MESSAGE);

require('express-async-errors'); //Gestion des erreurs async/await
app.use(express.json());  //Lecture des objets json

// On importe les différentes routes
const router = require('./routes')


// Connexion à la base de données
const mongoose = require('mongoose'); 

app.use(async(req, res, next) => {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connexion réussie ! 👌");
    next();
});


// On dit à notre serveur d'utiliser notre routeur 
app.use('/api', router);

//On met le serveur sur écoute 
app.listen(PORT,() => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
});