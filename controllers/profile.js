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
    const {
        fullName,
        email,
        location,
        phone,
        bio,
        dateOfBirth,
        gender
    } = req.body;
    const normalizedPhone = phone?.trim() || undefined;
    const normalizedLocation = location?.trim() || undefined;
    const normalizedBio = bio?.trim() || undefined;
    const normalizedDateOfBirth = dateOfBirth || undefined;
    const normalizedGender = gender || undefined;
    let newData = {
        fullName:fullName,
        email:email,
        location:normalizedLocation,
        phone:normalizedPhone,
        bio:normalizedBio,
        dateOfBirth:normalizedDateOfBirth,
        gender:normalizedGender,
    };
    let updateProfile = await User.findByIdAndUpdate(req.user._id,newData,{runValidators:true, new:true});
    if(!updateProfile){
        req.flash("error","User not found ! ");
        return res.redirect("/listings");
    }
    if(req.file){
        let url = req.file.path;
        let filename = req.file.filename;
        updateProfile.image = {url,filename};
        await updateProfile.save();
    }

    req.flash("success","updated data succesfully");
    res.redirect("/profile");
}