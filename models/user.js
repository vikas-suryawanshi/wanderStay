const { required } = require("joi");
const mongoose=require("mongoose");
const { default: passportLocalMongoose } = require("passport-local-mongoose");

const Schema=mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        url:String,
        filename:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        min:10,
        max:10,
        required:true,
    },
    bio:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    wishlist: [{
        type:  Schema.Types.ObjectId,
        ref:"Listing"
    }],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

module.exports=User;