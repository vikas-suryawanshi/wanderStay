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
// require routes folder
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
// express sesion
const session = require("express-session");
const flash = require("connect-flash");

// connect database
main()
.then(()=>{
    console.log("connected succesfully");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WanderStay');
}
const sessionOption = {
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}
app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    next();
})

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);


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