const Listing = require("../models/listing");
const Booking = require("../models/booking");

module.exports.getBookingForm = async(req,res)=>{
    let listings = await Listing.findById(req.params.id);
    res.render("listings/booking.ejs",{listings});
};

module.exports.createBooking = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    if(!listing){
        req.flash("error","This listing is no longer available.");
        return res.redirect("/listings");
    }
    let user = req.user._id;
    let {checkIn,checkOut,guests} = req.body;
    if(!checkIn || !checkOut || !guests){
        req.flash("error","Please fill in all booking details correctly.");
        return res.redirect(`/listings/${req.params.id}`);
    }
    checkIn = new Date(checkIn);
    checkOut = new Date(checkOut);

    if(checkIn>=checkOut){
        req.flash("error","Please select valid check-in and check-out dates.");
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
            req.flash("error","These dates are not available. Please select different dates.");
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
    req.flash("success","Your booking was created successfully!");
    return res.redirect(`/listings/${req.params.id}`);
}

module.exports.myBookings = async(req,res)=>{
    let user = req.user._id;
    let myBookings = await Booking.find({user:user}).populate("listing");
    res.render("bookings/index.ejs", { myBookings });
}