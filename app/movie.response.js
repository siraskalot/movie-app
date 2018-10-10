"use strict";

var response = new Map();
//set reponses as {HTTPStatus, HTTPStatusCode, JSONTitle, JsonMessage}
response.set("SUC_MOVIES_SAVED", {
  HTTPStatus: "OK",
  HTTPStatusCode: 200,
  ReponseCode: "S00",
  JSONTitle: "Success",
  JsonMessage: "All movies saved "
});
response.set("ERR_IMDB_NO_MOVIE", {
  HTTPStatus: "ERROR",
  HTTPStatusCode: 404,
  ReponseCode: "E00",
  JSONTitle: "Error",
  JsonMessage: "Movie doesnt exist"
});
response.set("ERR_IMDB_LOOKUP_ERROR", {
  HTTPStatus: "ERROR",
  HTTPStatusCode: 503,
  ReponseCode: "E01",
  JSONTitle: "Error",
  JsonMessage: "Failed to retrieve movie details"
});

function getStatus(statusKey) {
  return response.get(statusKey);
}

module.exports = getStatus;