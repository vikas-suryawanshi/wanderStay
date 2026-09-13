const Listing = require("../models/listing");
const Listing = require("../models/listing");

module.exports.createBooking = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    if(!listing){
        req.flash("error","this listing is not avalble");
        return res.redirect("/listings");
    }

    let {checkIn,checkOut,guests} = req.body;
    if(!checkIn || !checkOut || !guests){
        req.flash("error","please all field fill correctly & try again.");
        return res.redirect(`/listings/${req.params.id}`);
    }
    let user = req.user._id;
}