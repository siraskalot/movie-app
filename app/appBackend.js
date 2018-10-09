"use strict";

// app.js

var express = require("express");
var bodyParser = require("body-parser");

//import appwide routes
var mainRoutes = require("./app.route");
var movieRoutes = require("./movie.route");

// Set up mongoose connection
var mongoose = require("mongoose");

var dev_db_url = "mongodb://movieapp:movieapp123@ds245150.mlab.com:45150/movie-app-db";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// mongoose.connection.collections['movies'].drop( function(err) {
//   console.log('collection dropped');
// });

//Web Server
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/", mainRoutes);
app.use("/movie", movieRoutes);

var port = 1234;

app.listen(port, function () {
  console.log("Movie App server is up and running on port numner " + port);
});