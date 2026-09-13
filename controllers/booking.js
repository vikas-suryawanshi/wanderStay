const Listing = require("../models/listing");
const Booking = require("../models/booking");

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
    checkIn = new Date(checkIn);
    checkOut = new Date(checkOut);

    if(checkIn>=checkOut){
        req.flash("error","please select valid date");
        return res.redirect(`/listings/${req.params.id}`);
    }

    let existingBookings = await Booking.find({
        listing: req.params.id,
        status:{
            $ne: "cancelled",
        }
    })

    let user = req.user._id;
}