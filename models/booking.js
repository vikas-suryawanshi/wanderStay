const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    listing:{
        type:Schema.Types.ObjectId,
        ref:"Listing",
        required:true,
    },

    checkIn:{
        type:Date,
        required:true,
    },

    checkOut:{
        type:Date,
        required:true,
    },

    guests:{
        type:Number,
        required:true,
        min:1,
    },

    totalPrice:{
        type:Number,
        required:true,
        min:0,
    },

    status:{
        type:String,
        enum:["pending","confirmed","cancelled","completed"],
        default:"pending",
    },

},{timestamps:true});

const Booking = new mongoose.model("Booking",bookingSchema);

module.exports = Booking;