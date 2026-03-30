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

app.get("/listings",async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})

// new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});
// show routes

app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listings=await Listing.findById(id);
    res.render("listings/show.ejs",{listings});
})


// create routes
app.post("/listings",async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

// edit route
app.get("/listings/:id/new",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

// update routes
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,(req.body.listing));
    res.redirect(`/listings`);

})

// delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const deleteLsiting=await Listing.findByIdAndDelete(id);
    console.log(deleteLsiting);
    res.redirect("/listings");
})


// basic route to test working app
app.get("/",(req,res)=>{
    res.send("app is working");
})
// for listning app
app.listen(port,()=>{
    console.log("port is listeing on port is 8080");
})