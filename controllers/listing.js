const Listing = require("../models/listing");

module.exports.index = async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

module.exports.createNewListing = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.newListing = async (req,res)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing=new Listing(req.body.listing);
    newListing.image={url ,filename};
    newListing.owner=req.user._id;
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

module.exports.editListing = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","if you requested listings are does not exist!")
        return res.redirect(`/listings`)
    }
    res.render("listings/edit.ejs",{listing});
};

module.exports.updateListing = async(req,res)=>{
    let {id}=req.params;
    let url = req.file.path;
    let filename = req.file.filename;
    let upadetListing = await Listing.findByIdAndUpdate(id,(req.body.listing));
    upadetListing.image={url ,filename};
    req.flash("success","listing update successfully!");
    res.redirect(`/listings/${id}`)

};


module.exports.destroyListing = async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    req.flash("success","delete listing succesfully!");
    res.redirect("/listings");
};