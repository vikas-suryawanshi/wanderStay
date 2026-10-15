const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const profileController = require("../controllers/profile.js");
const {isLoggedIn} = require("../middleware.js");
const multer  = require('multer')
const { storage } = require("../cloudnary.js");
const upload = multer({ storage });

router.route("/profile")
.get(isLoggedIn,wrapAsync(profileController.profile))
.put(isLoggedIn,upload.single('image') ,wrapAsync(profileController.updateProfile));

router.route("/profile/edit")
.get(isLoggedIn,wrapAsync(profileController.editProfile));

module.exports = router;