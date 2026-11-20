const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middleware.js");
const recommendationRouter = require("../controllers/recommendation.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/recommendations")
.get(isLoggedIn,wrapAsync(recommendationRouter.recommendedForYou));