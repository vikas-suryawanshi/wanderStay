const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middleware.js");
const recommendationController = require("../controllers/recommendation.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/recommendations")
.get(isLoggedIn,wrapAsync(recommendationController.recommendedForYou));

router.route("/simi")
.get

module.exports = router;