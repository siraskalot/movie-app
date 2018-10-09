// app.js

const express = require("express");
const bodyParser = require("body-parser");


//import appwide routes
const mainRoutes = require("./app.route");
const movieRoutes = require("./movie.route");



// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb://movieapp:movieapp123@ds245150.mlab.com:45150/movie-app-db";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


//Web Server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/", mainRoutes);
app.use("/movie", movieRoutes);

let port = 1234;

app.listen(port, () => {
  console.log("Movie App server is up and running on port numner " + port);
});
