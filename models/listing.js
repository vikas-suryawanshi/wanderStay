const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        set: (v) =>
            v === ""
            ? "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            : v,
    },          
    location:{
        type:String,
    },
    country:{
        type:String,
    },
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;