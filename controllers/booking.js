const Listing = require("../models/listing");
const Booking = require("../models/booking");
const { newListing } = require("./listing");

module.exports.createBooking = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    if(!listing){
        req.flash("error","this listing is not avalble");
        return res.redirect("/listings");
    }
    let user = req.user._id;
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
    for(const booking of existingBookings){
        if(!(booking.checkOut<=checkIn || checkOut<=booking.checkIn)){
            req.flash("error","These dates are already booked.");
            return res.redirect(`/listings/${req.params.id}`);
        }
    }
    let numberOfNights = (checkOut-checkIn)/(24*60*60*1000);
    let totalPrice = listing.price * numberOfNights;

    let booking = new Booking({
        user:user,
        listing:listing,
        checkIn:checkIn,
        checkOut:checkOut,
        guests: guests,
        totalPrice: totalPrice

    })
    await booking.save();
    req.flash("success","you are succesfully resever this listing");
    return res.redirect(`/listings/${req.params.id}`);
}