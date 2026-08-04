const express=require("express");
const app=express();
const port=8080;

const mongoose=require("mongoose");
// viewsand public file require
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
// method override require
const methodOveride=require("method-override");
app.use(methodOveride("_method"));
// require ejs mate
const ejsMate=require("ejs-mate");
app.engine("ejs",ejsMate);
// require utils folder
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
// require schema validation
const {listingSchema,reviewSchema}=require("./schemas/listingSchemas.js");

// require listing
const Listing = require("./models/listing");
const Review = require("./models/review.js");

main()
.then(()=>{
    console.log("connected succesfully");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WanderStay');
}


// testing data to enter in db
app.get("/testlisting",async(req,res)=>{
    let sampleListing= new Listing({
        title:"my home",
        description:"better for you",
        price:5000,
        location:"nanded,maharastra",
        country:"india"
    });
    await sampleListing.save();
    console.log(sampleListing);
    res.send("added succesfully");
})

// validate review fn
const reviewListing=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}
// post reviews route
app.post("/listings/:id/reviews",reviewListing,wrapAsync(async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReviews= new Review(req.body.review);
    listing.reviews.push(newReviews);

    await listing.save();
    await newReviews.save();

    res.redirect(`/listings/${listing.id}`)
}))

// delete reviews route
app.delete("/listings/:id/reviews/:reviewId",async(req,res)=>{
    let {id, reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`)
})


// basic route to test working app
app.get("/",(req,res)=>{
    res.send("app is working");
})

// page not found middleware
app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
})

// global middlewares
app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"}=err;
    res.status(status).render("error.ejs" ,{message});
})

// for listning app
app.listen(port,()=>{
    console.log("port is listeing on port is 8080");
})