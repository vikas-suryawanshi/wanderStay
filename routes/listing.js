const express = require("express");
const router = express.Router();
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");
const Review=require("../models/review.js");
const {isLoggedIn ,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");


// index route
router.get("/",wrapAsync(listingController.index));

// new route
router.get("/new",isLoggedIn,listingController.createNewListing);

// create routes
router.post("/",validateListing,wrapAsync(listingController.newListing));

// show routes

router.get("/:id",wrapAsync(listingController.showListing))

// edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));

// update routes
router.put("/:id",validateListing,wrapAsync(listingController.updateListing));

// delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

module.exports=router;