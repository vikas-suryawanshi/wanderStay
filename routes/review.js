const express = require("express");
const router = express.Router();
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");
const Review = require("../models/review.js");

// validate review fn
const reviewListing=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}


// post reviews route
router.post("/",reviewListing,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReviews= new Review(req.body.review);
    listing.reviews.push(newReviews);

    await listing.save();
    await newReviews.save();

    res.redirect(`/listings/${listing.id}`)
}))

// delete reviews route
router.delete("/:reviewId",async(req,res)=>{
    let {id, reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`)
})

module.exports=router;