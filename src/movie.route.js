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
router.get("/", movieController.movie_dedetailsAll);


router.post("/create", movieController.movie_create);
router.post("/createbulk", movieController.movie_createbulk);

router.delete("/:id/delete", movieController.movie_delete);

module.exports = router;
