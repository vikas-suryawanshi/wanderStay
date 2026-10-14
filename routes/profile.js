const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const profileController = require("../controllers/profile.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/profile")
.get(isLoggedIn,wrapAsync(profileController.profile));

router.route("/profile/edit")
.get(isLoggedIn,wrapAsync(profileController.editProfile));

module.exports = router;