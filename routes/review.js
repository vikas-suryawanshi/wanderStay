const express = require("express");
const router = express.Router({mergeParams:true});
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const {isLoggedIn,reviewListing} = require("../middleware.js");


// post reviews route
router.post("/",isLoggedIn,reviewListing,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview= new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();
    req.flash("success","new Review created!");
    res.redirect(`/listings/${listing.id}`)
}));

// delete reviews route
router.delete("/:reviewId",isLoggedIn,async(req,res)=>{
    let {id, reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted succesfully");
    res.redirect(`/listings/${id}`)
})

module.exports=router;