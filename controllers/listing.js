const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.newListing = async (req,res)=>{
    let responce = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
  .send()
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing=new Listing(req.body.listing);
    newListing.image={url ,filename};
    newListing.owner=req.user._id;
    newListing.geometry=responce.body.features[0].geometry;
    await newListing.save();
    req.flash("success","new listing created!");
    res.redirect("/listings");
};

module.exports.showListing = async(req,res)=>{
    let {id}=req.params;
    const listings=await Listing.findById(id)
    .populate({path:"reviews",populate:{path:"author"}})
    .populate("owner");
    if(!listings){
        req.flash("error","if you requested listings are does not exist!")
        return res.redirect(`/listings`)
    }
    res.render("listings/show.ejs",{listings});
};

module.exports.renderEditForm = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300/w_250");
    if(!listing){
        req.flash("error","if you requested listings are does not exist!")
        return res.redirect(`/listings`)
    }
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
    let {id}=req.params;
    let updateListing = await Listing.findByIdAndUpdate(id,(req.body.listing));
    if(req.file){
        let url = req.file.path;
        let filename = req.file.filename;
        updateListing.image={url ,filename};
        await updateListing.save();
    };
    req.flash("success","listing update successfully!");
    res.redirect(`/listings/${id}`)

};


module.exports.destroyListing = async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    req.flash("success","delete listing succesfully!");
    res.redirect("/listings");
};