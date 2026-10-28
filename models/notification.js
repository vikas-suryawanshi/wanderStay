const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
    {
        recipient: {
            type:Schema.Types.ObjectId,
            ref:"User",
            required: true,
        },
        type: {
            type:String,
            enum:[
                "booking","cancellation","booking_update","system",
            ],
            required:true,
        },
        message:{
            type:String,
            required:true,
            trim:true,
        },
        link:{
            type:String,
            default:"",
        },
        isRead:{
            type:Boolean,
            default:false,
        },
    },
    {timestamps:true},
)

const Notification = mongoose.model("Notification",notificationSchema);
module.exports = Notification;