const express = require("express");
const mysql = require('mysql')
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const path = require("path");


// Routes
const userRoutes = require("./routes/user");



// Gestion erreur CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Analyser corps des requêtes
app.use(bodyParser.json());
// Chemin sauvegarde images
app.use("/images", express.static(path.join(__dirname, "images")));


  

// chemin de base utiliser par le front 
app.use("/api/", userRoutes);


module.exports = app;

