const User = require("../models/user");

module.exports.profile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/profile.ejs",{user});
}

module.exports.editProfile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/edit.ejs",{user});
}

module.exports.updateProfile = async(req,res)=>{
    let user = req.user;
    let newData = req.body;
    let updateProfile = await User.findOneAndUpdate({user:newData});
    await updateProfile.save();
    res.redirect("/profile");
}