//@Theepan Thevathasan
//08 Oct 2018
//Retrives movies from IMDB

var imdb = require("imdb-api");

//API Access Key from omdbapi.com
const omdbAPIKey = "5bea3702";

function retrieveMovie(movieName, apiKey) {
  //treat apiKey as an optional paramter
  if (typeof apiKey === "undefined") {
    apiKey = omdbAPIKey;
  }
  return new Promise((resolve, reject) => {
    const client = new imdb.Client({ apiKey: apiKey });
    let movie;
    client
      .get({ name: movieName })
      .then(_movie => {
        resolve(_movie);
      })
      .catch(err => {
        reject(`Error retrieving movie from IMDB :   ${err.message}`);
      });
  });
}

module.exports = retrieveMovie;
