const bcrypt = require("bcrypt");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

// Mysql BDD connection
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kelycia14",
  database: "GroupomaniaDB2020",
});

mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connécté à la base de donnée");
});

// Création d'un utilisateurs

exports.createUser = (req, res, next) => {
  let pseudo = req.body.userPseudo;
  // Verifier si l'utilisateur existe

  // Cryptage mdp
  bcrypt
    .hash(req.body.userPassword, 10)
    .then((hash) => {
      let password = hash;

      console.log(pseudo);
      console.log(password);

      let sql =
        'INSERT INTO user (pseudo, password) VALUES("' +
        pseudo +
        '", "' +
        password +
        '")';

      mysqlConnection.query(sql, function(err, result) {
        if (err) {
          throw err;
        }
        console.log("1 record inserted");
        res.status(200).json(result.insertId);
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.loginUser = (req, res, next) => {
  let pseudo = req.body.userPseudo;
  let password = req.body.userPassword;

  // Récuperer mpd et id correspondant au pseudo
  mysqlConnection.query(
    "select * from user where pseudo = '" + pseudo + "'",
    function(err, result) {
      if (err) {
        res.status(400).json((error) => {
          console.log("Utilisateur inconnu");
        });
      } else {
        
        console.log(result)

        let passwordCrypted = result[0].password
        let idUser = result[0].id;
        let pseudo = result[0].pseudo

        // Comparaison mdp
        bcrypt
          .compare(password, passwordCrypted)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({ error: "mauvais mot de passe" });
              console.log("mauvais ");
            } else {
              res.status(200).json({
                pseudo: pseudo,
                userId: idUser,
                token: jwt.sign({ userId: idUser }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "24h",
                }),
              });
            }
          })
          .catch((error) =>
            res.status(500).json({ error: "mauvaise requete" })
          );
      }
    }
  );

  /*let idUser = ""
    mysqlConnection.query("select id from user where pseudo = '"+pseudo+"'",function (err, result) {  
      if (err) throw err; 
      console.log(result[0].id); 
      idUser = result[0].id
      console.log(idUser)
      }); */
  // Comparaison
};
