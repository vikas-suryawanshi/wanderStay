const Listing = require("../models/listing");
const Booking = require("../models/booking");

module.exports.renderHostDashboard = async(req,res)=>{
    // find listing for log in host
    const listings = await Listing.find({owner:req.user._id});
    const listingIds = listings.map(listing => listing._id);

    // find booking for host property
    const bookings = await Booking.find({listing: {$in:listingIds},status: {$ne:"cancelled"}}).populate("listing").populate("user").sort({createdAt: -1});

    // calculate the dashboard statitics
    const totalProperties = listings.length;
    const totalBookings = bookings.length;
    const completedBookings = bookings.filter(booking => booking.status === "completed").length;
    const totalEarnings = bookings.filter(booking => ["confirmed","completed"].includes(booking.status)).reduce((total,booking)=> total+booking.totalPrice , 0);

    // get the latest five bookings
    const recentBookings = bookings.slice(0,5);

    res.render("host/hostDashboard.ejs", {totalProperties,totalBookings,totalEarnings,recentBookings,completedBookings});
}

module.exports.renderMyPropertiesPage = async(req,res)=>{
    const listings = await Listing.find({owner:req.user._id}).sort( { createdAt:-1 });
    res.render("host/myProperties.ejs",{listings});
}