const Listing = require("./models/listing");
const Booking = require("./models/booking.js");
const Review = require("./models/review.js");
const {listingSchema,reviewSchema}=require("./Schema/Schema.js");
const ExpressError=require("./utils/ExpressError.js");
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error",
            "You must be logged in to perform this action.Please log in and try again.");
            return res.redirect("/login");
    }
    next();
}

// save redirect url
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

// is owner middleware
module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you don`t have a permitted to modify this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review =await Review.findById(reviewId);
        if(!review.author._id.equals(res.locals.currUser._id)){
            req.flash("error",
                "you don`t have permission to delete this review while you are not author to this review!");
            return res.redirect(`/listings/${id}`);
        }
        next();
}

// validate listing middleware
module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

// validate review middleware
module.exports.validatereview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.isBookingOwner = async(req,res,next)=>{
    let {id} = req.params;
    const booking = await Booking.findById(id).populate("listing");
    if(!booking){
        req.flash("error","Booking not found. Please try again.");
        return res.redirect(`/bookings/${req.params.id}`);
    }
    if(!booking.listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not authorized to change this booking status.");
        return res.redirect(`/bookings/${req.params.id}`);
    }
    next();
}