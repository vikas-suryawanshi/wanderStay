const User = require("../models/user");

module.exports.profile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/profile.ejs",{user});
}