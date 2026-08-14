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
router.get("/",wrapAsync(async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

// new route
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new.ejs");
});

// create routes
router.post("/",validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash("success","new listing created!");
    res.redirect("/listings");
}));

// show routes

router.get("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listings=await Listing.findById(id)
    .populate({path:"reviews",populate:{path:"author"}})
    .populate("owner");
    if(!listings){
        req.flash("error","if you requested listings are does not exist!")
        return res.redirect(`/listings`)
    }
    res.render("listings/show.ejs",{listings});
}))

// edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","if you requested listings are does not exist!")
        return res.redirect(`/listings`)
    }
    res.render("listings/edit.ejs",{listing});
}));

// update routes
router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,(req.body.listing));
    req.flash("success","listing update successfully!");
    res.redirect(`/listings/${id}`)

}));

// delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    req.flash("success","delete listing succesfully!");
    res.redirect("/listings");
}));

module.exports=router;