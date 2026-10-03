const Listing = require("../models/listing");

module.exports.addWishlist = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing not found");
        return res.redirect("/listings");
    }

    let user = req.user;
    if(!user.equals(user.wishlist.listing.id)){
        req.flash("success","this listing is add in wishlist");
        user.wishlist.push(listing);
        user.save();
    }
    res.redirect("/listings");
};