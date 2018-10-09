const express = require("express");
const router = express.Router();

//Import Controllers
const movieController = require("./movie.controller");

// test
router.get("/test", movieController.test);
router.get("/movie/test", movieController.test);

//Routes for CRUD functions of movie endpoint
router.put("/:id/update", movieController.movie_update);

router.get("/:id", movieController.movie_details);

router.post("/create", movieController.movie_create);

router.delete("/:id/delete", movieController.movie_delete);

module.exports = router;
