const mongoose=require("mongoose");
const { schema } = require("./listing");

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
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

module.exports=new mongoose.model("Review",reviewSchema);