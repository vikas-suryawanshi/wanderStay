const express = require("express");
const router = express.Router({mergeParams:true});
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../Schema/Schema.js");
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const {isLoggedIn,validatereview,isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");


// post reviews route
router.post("/",isLoggedIn,validatereview,
    wrapAsync(reviewController.createReview));

// delete reviews route
router.delete("/:reviewId",isLoggedIn,isAuthor,
    reviewController.destroyReview
)

module.exports=router;