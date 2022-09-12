# Créer un serveur Express

1. Installer Express 👍
2. Importer Express
3. Créer une constante app = express() → va prendre toutes les fonctionnalités de Express
4. Régler les erreurs CORS 
    - npm i cors
5. Créer les variables d’environnement * (developpement, production, …) 
    - *définir NODE_ENV dans le package → savoir où l’on va travailler
6. Extraire les variables dont on a besoin
7. Mettre le serveur sur écoute
8. Gestion des erreurs async / await
    - npm i express-async-errors
9. Lecture des objets json
10. Relier à la DB : 
    1. installation de Mongoose 
        - npm i mongoose
    2. connexion à la DB via la variable
11. Tester la connexion
12. Créer les différentes routes :
    1. un index qui reprend les routes
    2. un fichier par route
13. Créer les différents modèles (pour un schéma) :
    1. importer mongoose
    2. créer le schéma
    3. exporter le schéma
14. Créer les différents controllers : 
    1. importer le model
    2. mettre en place le CRUD
15. Placer le controller sur la bonne route
16. Faire les éventuels populate pour avoir des infos + claires / précises 
17. Mettre en place des middlewares
