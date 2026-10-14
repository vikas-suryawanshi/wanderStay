const User = require("../models/user");

module.exports.profile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/profile.ejs",{user});
}

module.exports.editProfile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/edit.ejs",{user});
}