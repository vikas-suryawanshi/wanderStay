const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Booking = require("../models/booking.js");
const { object } = require("joi");


module.exports.recommendedForYou = async (req,res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    const bookings = await Booking.findById({user:req.user._id , status:"completed"}).populate("listing");
    
    const categoryScores = {};
    for(const listing of user.wishlist){
        if(!listing) continue;
        const category = listing.category;
        categoryScores[category] = (categoryScores[category] || 0)+5;
    }
    for(const booking of bookings){
        if(!booking.listing) continue;
        const category = booking.listing.category;
        categoryScores[category] = (categoryScores[category] || 0)+3;
    }
    const prefferedCategories = object.entries(categoryScores);
}