"use strict";

// app.js

var express = require("express");
var bodyParser = require("body-parser");

//import appwide routes
var mainRoutes = require("./app.route");
var movieRoutes = require("./movie.route");
var app = express();

// Set up mongoose connection
var mongoose = require("mongoose");
var dev_db_url = "mongodb://dbuser:dbuser12345@ds125453.mlab.com:25453/product-db";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoutes);
app.use("/movie", movieRoutes);

var port = 1234;

app.listen(port, function () {
  console.log("Server is up and running on port numner " + port);
});