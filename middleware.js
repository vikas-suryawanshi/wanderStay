module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error",
            "You must be logged in to perform this action.Please log in and try again.");
            return res.redirect("/login");
    }
    next();
}