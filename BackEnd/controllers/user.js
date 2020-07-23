const bcrypt = require("bcrypt");
const mysql = require('mysql')
const jwt = require('../middleware/auth');


// Mysql BDD connection
var mysqlConnection = mysql.createConnection({
  host : "localhost",
  user: "root",
  password: "kelycia14",
  database: "GroupomaniaDB2020"
  
});

mysqlConnection.connect(function(err){
if(err) throw err;
console.log("Connécté à la base de donnée")
})



// Création d'un utilisateurs

exports.createUser = (req, res, next) => {

  // Params
let pseudo = req.body.pseudo;
let password = req.body.password

  
  /*if(pseudo == null || password == null){
    return res.status(400).json({'error': 'parametre manquant'})
  }*/

  let sql = 'INSERT INTO user (pseudo, password) VALUES("'+pseudo+'", "'+password+'")'
  
  mysqlConnection.query(sql,function (err, result) {  
    if (err) throw err; 
    res.status(200)
    console.log("1 record inserted");        
    }); 
  
  // TODO verifier taille pseudo, password etc

  // Vérification si user exit déja 
};

exports.loginUser = (req, res, next) => {

};


