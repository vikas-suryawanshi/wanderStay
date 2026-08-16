const express = require("express");
const router = express.Router();
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");
const Review=require("../models/review.js");
const {isLoggedIn ,isOwner,validateListing} = require("../middleware.js");


// index route
router.get("/",wrapAsync());

// new route
router.get("/new",isLoggedIn,);

// create routes
router.post("/",validateListing,wrapAsync());

// show routes

router.get("/:id",wrapAsync())

// edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync());

// update routes
router.put("/:id",validateListing,wrapAsync());

// delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync());

module.exports=router;