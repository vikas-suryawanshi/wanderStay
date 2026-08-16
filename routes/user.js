const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");



router.get("/signup",userController.getSignupForm);


router.post("/signup",wrapAsync(userController.signUp));


router.get("/login",userController.getLoginForm);

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login"
    ,failureFlash:true}),
    userController.login
);


router.get("/logout",userController.logOut);

module.exports=router;