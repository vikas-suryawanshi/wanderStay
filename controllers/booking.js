const Listing = require("../models/listing");
const Listing = require("../models/listing");

module.exports.createBooking = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    if(!listing){
        req.flash("error","this listing is not avalble");
        return res.redirect("/listings");
    }
}