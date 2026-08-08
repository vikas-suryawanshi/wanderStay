const express = require("express");
const router = express.Router();
// require utils folder
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("../schemas/listingSchemas.js");
const Listing = require("../models/listing");



// validate listing fn
const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}



// index route

router.get("/",wrapAsync(async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

// new route
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
});

// create routes
router.post("/",validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","new listing created!");
    res.redirect("/listings");
}));

// show routes

router.get("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listings=await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listings});
}))

// edit route
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// update routes
router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,(req.body.listing));
    res.redirect(`/listings`);

}));

// delete route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    console.log(deleteLsiting);
    res.redirect("/listings");
}));

module.exports=router;