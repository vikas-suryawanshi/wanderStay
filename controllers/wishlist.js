const Listing = require("../models/listing");

module.exports.addWishlist = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing not found");
        return res.redirect("/listings");
    }

    let user = req.user;
    if(!user.wishlist.some(item => item.equals(listing._id))){
        req.flash("success","Listing added to your wishlist.");
        user.wishlist.push(listing._id);
        await user.save();
    }
    res.redirect("/listings");
};