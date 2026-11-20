const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Booking = require("../models/booking.js");
const { object } = require("joi");


module.exports.recommendedForYou = async (req,res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    const bookings = await Booking.find({user:req.user._id , status:"completed"}).populate("listing");
    
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
    const preferredCategories = Object.entries(categoryScores).sort((a,b) => b[1]-a[1]).map(item => item[0]);

    let recommendedListings = [];
    if(preferredCategories.length > 0){
        recommendedListings = await Listing.find({
            category:{$in:preferredCategories},
            _id:{$nin: user.wishlist.map(listing => listing._id)},
            owner:{$ne: req.user._id}
        });
    }
    recommendedListings.sort((a,b)=> {
        return preferredCategories.indexOf(a.category)-preferredCategories.indexOf(b.category);
    })
    recommendedListings = recommendedListings.slice(0,4);
}