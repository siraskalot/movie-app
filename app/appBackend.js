"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _app = require("./app.route");

var _app2 = _interopRequireDefault(_app);

var _movie = require("./movie.route");

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up mongoose connection


//import appwide routes
var mongoose = require("mongoose");

var dev_db_url = "mongodb://movieapp:movieapp123@ds245150.mlab.com:45150/movie-app-db";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// mongoose.connection.collections['movies'].drop( function(err) {
//   console.log('collection dropped');
// });

//Web Server
var app = (0, _express2.default)();
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));
//app.use("/", mainRoutes);
app.use("/movie", _movie2.default);

var port = 1234;

app.listen(port, function () {
  console.log("Movie App server is up and running on port numner " + port);
});

//let envresult = require("dotenv").config({path: "../.env", debug: process.env.DEBUG}); //module to load ENV variables

//console.log(envresult.parsed);

console.log(process.env.DB_PASSWORD); // baconpancakes
console.log(process.env.DB_USER); // root