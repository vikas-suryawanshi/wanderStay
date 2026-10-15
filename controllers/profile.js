const User = require("../models/user");

module.exports.profile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/profile.ejs",{user});
}

module.exports.editProfile = async(req,res)=>{
    const user = req.user;
    res.render("profiles/edit.ejs",{user});
}

module.exports.updateProfile = async (req, res) => {
    const {
        fullName,
        email,
        location,
        phone,
        bio,
        dateOfBirth,
        gender
    } = req.body;


    const normalizedPhone = phone?.trim();
    const normalizedLocation = location?.trim();
    const normalizedBio = bio?.trim();

    let newData = {
        fullName,
        email,
        location: normalizedLocation,
        phone: normalizedPhone,
        bio: normalizedBio,
        dateOfBirth: dateOfBirth || undefined,
        gender: gender || undefined
    };

    let unsetData = {};

    if (!normalizedPhone) unsetData.phone = 1;
    if (!normalizedLocation) unsetData.location = 1;
    if (!normalizedBio) unsetData.bio = 1;
    if (!dateOfBirth) unsetData.dateOfBirth = 1;
    if (!gender) unsetData.gender = 1;

    let updateProfile = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: newData,
            $unset: unsetData
        },
        { runValidators: true, new: true }
    );

    if (!updateProfile) {
        req.flash("error", "User not found!");
        return res.redirect("/listings");
    }
    if (req.file) {
        updateProfile.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await updateProfile.save();
    }
    req.flash("success", "Profile updated successfully!");
    res.redirect("/profile");
};