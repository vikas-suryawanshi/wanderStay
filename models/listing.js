const mongoose=require("mongoose");
const Review = require("./review");

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
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review",
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;