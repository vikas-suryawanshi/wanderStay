const Listing = require("../models/listing");

module.exports.addWishlist = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing not found");
    }
};