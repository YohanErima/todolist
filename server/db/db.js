const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/Todo";

mongoose.connect(url).then(() =>{
    console.log('Connexion à Mongo ok!');
}).catch((error) => {
    console.error('Erreur de connexion à la base de données :', error);
  });