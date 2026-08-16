const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");



router.get("/signup",)


router.post("/signup",wrapAsync())


router.get("/login",)

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login"
    ,failureFlash:true}),
    
);


router.get("/logout",);

module.exports=router;