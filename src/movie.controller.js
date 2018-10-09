const Movie = require("./movie.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  console.log("in Test");
  res.send("Test Controller for the movie endpoint");
};

//Lookp movie with id
exports.movie_details = function(req, res) {
  console.log("in /movie");
  Movie.findById(req.params.id, function(err, movie) {
    if (err) return next(err);
    res.send(movie);
  });
};

//Delete movie with id
exports.movie_delete = function(req, res) {
  Movie.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

//Update movie with id
exports.movie_update = function(req, res) {
  Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    movie
  ) {
    if (err) return next(err);
    res.send("Product udpated.");
  });
};

//Create new movie
exports.movie_create = function(req, res) {
  console.log("in product route");
  let movie = new Movie({
    name: req.headers.name,
    price: req.headers.price
    //name: "orang",
    // price: "20"
  });
  console.log("product " + movie);

  movie.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};
