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
//require("dotenv").config({path: "../.env", debug: process.env.DEBUG}); //ENV variables loaded from package.json
var mongoose = require("mongoose");

//Specfic URI in Environment variables takes precedence
var mongoDB = process.env.DB_URI || "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + "/" + process.env.DB_NAME;

console.log(mongoDB);
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

var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Movie App server is up and running on port numner " + port);
});