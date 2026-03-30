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
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-mR1CIDduGLc",
            set: (v) =>
                v === "" 
                ? "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-mR1CIDduGLc"
                : v,
        }
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