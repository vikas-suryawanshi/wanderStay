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


// index route or create route
router.route("/")
.get(wrapAsync(listingController.index))
.post(validateListing,
    wrapAsync(listingController.newListing));

// new route
router.get("/new",isLoggedIn,listingController.createNewListing);

// show routes,update,delete
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(validateListing,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,
    wrapAsync(listingController.destroyListing));


// edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));


module.exports=router;