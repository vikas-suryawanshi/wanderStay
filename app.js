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

// require listing
const Listing = require("./models/listing");

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


// index route

app.get("/listings",wrapAsync(async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

// new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

// create routes
app.post("/listings",wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

// show routes

app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listings=await Listing.findById(id);
    res.render("listings/show.ejs",{listings});
}))

// edit route
app.get("/listings/:id/new",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// update routes
app.put("/listings/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,(req.body.listing));
    res.redirect(`/listings`);

}));

// delete route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    console.log(deleteLsiting);
    res.redirect("/listings");
}));


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
    res.status(status).render("Error.ejs" ,{message});
})

// for listning app
app.listen(port,()=>{
    console.log("port is listeing on port is 8080");
})