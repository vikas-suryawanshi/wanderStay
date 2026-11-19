const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Booking = require("../models/booking.js");


module.exports.recommendedForYou = async (req,res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    const bookings = await Booking.findById({user:req.user._id , status:"completed"}).populate("listing");
}