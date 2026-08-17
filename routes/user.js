const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

// router route use for signup route
router.route("/signup")
.get(userController.getSignupForm)
.post(wrapAsync(userController.signUp));


// router route use for login route
router.route("/login")
.get(userController.getLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login"
    ,failureFlash:true}),
    userController.login
);


router.get("/logout",userController.logOut);

module.exports=router;