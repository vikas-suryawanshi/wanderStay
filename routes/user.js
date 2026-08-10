const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
})

module.exports=router;