const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const Booking = require("../models/booking.js");
const User = require("../models/user.js");


module.exports.index = async (req,res)=>{
    let {search} =req.query;
    if(search){
        search = search.trim();
    }
    let allListings=await Listing.find({});
    if(search){
        allListings=await Listing.find({
            $or:[
                {
                    location:{
                        $regex:search,
                        $options:"i",
                    }
                },
                {
                    title:{
                        $regex:search,
                        $options:"i",
                    }
                },
                {
                    category:{
                        $regex:search,
                        $options:"i",
                    }
                },
                {
                    location:{
                        $regex:search,
                        $options:"i",
                    }
                }
            ]
        });
    }
    let recommendedListings = [];
    if(req.user){
        const user = await User.findById(req.user._id).populate("wishlist");
        const bookings = await Booking.find({user:req.user._id, status:"completed"}).populate("listing");
        const categoryScores = {};
        for(const listing of user.wishlist){
            if(!listing){
                continue;
            }
            const category = listing.category;
            categoryScores[category] = (categoryScores[category] || 0)+5;
        }
        for(const booking of bookings){
            if(!booking.listing){
                continue;
            }
            const category = booking.listing.category;
            categoryScores[category] = (categoryScores[category] || 0)+3;
        }
        const preferedCategories = Object.entries(categoryScores).sort((a,b)=> b[1]-a[1]).map(item => item[0]);
    }
    let wishlist = req.user? req.user.wishlist:[];
    res.render("listings/index.ejs",{allListings,search,wishlist});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs",{source: req.query.source});
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
    if(req.query.source == "myProperties"){
        req.flash("success", "Congratulations! Your property is now live on WanderStay.");
        return res.redirect("/host/properties");
    }else if(req.query.source == "hostDashboard"){
        req.flash("success", "Congratulations! Your property is now live on WanderStay.");
        return res.redirect("/host/dashboard");
    }
    req.flash("success", "Congratulations! Your property is now live on WanderStay.");
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
    let similarProperties = await Listing.find({_id:{$ne: listings._id},location: listings.location, price:{$gte: listings.price-1000, $lte: listings.price+1000},category:listings.category});
    similarProperties = similarProperties.slice(0,4);
    res.render("listings/show.ejs",{listings,similarProperties});
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
    res.render("listings/edit.ejs",{listing,originalImageUrl,source:req.query.source});
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
    if(req.query.source == "myProperties"){
        req.flash("success","listing update successfully!");
        return res.redirect("/host/properties");
    }
    req.flash("success","listing update successfully!");
    res.redirect(`/listings/${id}`)

};


module.exports.destroyListing = async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    if(req.query.source == "myProperties"){
        req.flash("success","delete listing succesfully!");
        return res.redirect("/host/properties");
    }
    req.flash("success","delete listing succesfully!");
    res.redirect("/listings");
};