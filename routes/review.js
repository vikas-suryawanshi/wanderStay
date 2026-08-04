const express = require("express");
const router = express.Router();
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");


// post reviews route
app.post("/listings/:id/reviews",reviewListing,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReviews= new Review(req.body.review);
    listing.reviews.push(newReviews);

    await listing.save();
    await newReviews.save();

    res.redirect(`/listings/${listing.id}`)
}))

// delete reviews route
app.delete("/listings/:id/reviews/:reviewId",async(req,res)=>{
    let {id, reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`)
})