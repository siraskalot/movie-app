import express from "express";
import { json, urlencoded } from "body-parser";

//import appwide routes
import mainRoutes from "./app.route";
import movieRoutes from "./movie.route";

// Set up mongoose connection
const mongoose = require("mongoose");

let dev_db_url =
  "mongodb://movieapp:movieapp123@ds245150.mlab.com:45150/movie-app-db";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// mongoose.connection.collections['movies'].drop( function(err) {
//   console.log('collection dropped');
// });

//Web Server
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
//app.use("/", mainRoutes);
app.use("/movie", movieRoutes);

let port = 1234;

app.listen(port, () => {
  console.log("Movie App server is up and running on port numner " + port);
});

//let envresult = require("dotenv").config({path: "../.env", debug: process.env.DEBUG}); //module to load ENV variables

//console.log(envresult.parsed);

console.log(process.env.DB_PASSWORD) // baconpancakes
console.log(process.env.DB_USER) // root