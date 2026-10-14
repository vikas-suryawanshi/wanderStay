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
    },
    location:{
        type:String,
    },
    phone:{
        type:String,
        match: /^[0-9]{10}$/,
    },
    bio:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
        enum:["male","female","other","prefer-to-not-say"],
    },
    wishlist: [{
        type:  Schema.Types.ObjectId,
        ref:"Listing"
    }],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

module.exports=User;