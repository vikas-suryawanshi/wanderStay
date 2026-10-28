const mongoose = require("mongoose");
const schema = mongoose.Schema;

const notificationSchema = new schema(
    {
        recipient: {
            type:Schema.Types.objectId,
            ref:"User",
            reuired: true,
        },
        type: {
            type:String,
            enum:[
                "booking","cancellation","booking_update","system",
            ],
            reuired:true,
        },
    }
)