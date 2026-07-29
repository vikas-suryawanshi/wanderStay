const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const reviewSchema = Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    created_At:{
        type:Date,
        default:Date.now(),
    },
});

module.exports=new mongoose.model("Review",reviewSchema);