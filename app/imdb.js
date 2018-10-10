"use strict";

//@Theepan Thevathasan
//08 Oct 2018
//Retrives movies from IMDB

var imdb = require("imdb-api");

//API Access Key from omdbapi.com
var omdbAPIKey = "5bea3702";

function retrieveMovie(movieName, apiKey) {
  //treat apiKey as an optional paramter
  if (typeof apiKey === "undefined") {
    apiKey = omdbAPIKey;
  }
  return new Promise(function (resolve, reject) {
    var client = new imdb.Client({ apiKey: apiKey });
    var movie = void 0;
    client.get({ name: movieName }).then(function (_movie) {
      resolve(_movie);
    }).catch(function (err) {
      reject("Error retrieving movie from IMDB :   " + err.message);
    });
  });
}

module.exports = retrieveMovie;