//require("dotenv").config({path: "../.env", debug: process.env.DEBUG}); //ENV variables loaded from package.json
import express from "express";
import { json, urlencoded } from "body-parser";

//import appwide routes
import mainRoutes from "./app.route";
import movieRoutes from "./movie.route";

// Set up mongoose connection
const mongoose = require("mongoose");

//Specfic URI in Environment variables takes precedence
const mongoDB =
  process.env.DB_URI ||
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
    process.env.DB_HOST
  }/${process.env.DB_NAME}`;

  console.log(mongoDB);
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
app.use("/", mainRoutes);
app.use("/movie", movieRoutes);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Movie App server is up and running on port numner " + port);
});
