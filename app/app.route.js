"use strict";

var express = require("express");
var router = express.Router();
var path = require("path");

//Import Controllers
var movieController = require("./movie.controller");

// test
//router.get("/index.html", movieController.test);

router.get("/", function (req, res) {
  console.log("in index");
  res.sendFile(path.join(__dirname + '/../public/app.html'));
  //   res.sendFile("public/app.html",__dirname);
  // res.set("Content-Type", "text/html");

  // res.render("/../public/app.html");
  // console.log(res.path); 
  //res.render("/../public/app.html");

  //res.sendFile(path.join(__dirname+'/../public/app.html'));
});
module.exports = router;