const Listing = require("./models/listing");
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error",
            "You must be logged in to perform this action.Please log in and try again.");
            return res.redirect("/login");
    }
    next();
}

// save redirect url
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

// is owner middleware
module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you don`t have a permitted to modify this listing");
        res.redirect(`/listings/${id}`);
    }
    next();
}