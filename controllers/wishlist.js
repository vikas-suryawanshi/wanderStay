const Listing = require("../models/listing");

module.exports.addWishlist = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        return res.status(404).json({
            success:false,
            message:"Listing not found"
        });
    }

    let user = req.user;
    if(!user.wishlist.some(item => item.equals(listing._id))){
        user.wishlist.push(listing._id);
        await user.save();
    }
    res.json({
        success:true,
        action:"added"
    });
};

module.exports.removeWishlist = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        return res.status(404).json({
            success:false,
            message:"Listing not found"
        });
    }
    const user = req.user;
    user.wishlist = user.wishlist.filter(item => !item.equals(listing._id))
    await user.save();
    res.json({
        success:true,
        action:"removed"
    });
}

module.exports.getWishlist = async(req,res)=>{
    let user = req.user;
    let listings = await Listing.find({_id: {$in:user.wishlist}});
    res.render("wishlist/index.ejs",{listings});
}