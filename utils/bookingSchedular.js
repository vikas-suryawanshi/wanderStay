const cron = require("node-cron");
const Booking = require("../models/booking");

const startBookingSchedular = ()=>{
    cron.schedule ("5 0 * * *", async ()=>{
        try {
            const today = new Date();
            today.setHours(0,0,0,0);
            const bookings = await Booking.find({
                status:"confirmed", checkOut:{ $lt: today}.populate("user").populate({path:"listing", populate: {path: "owner"}
                })
            });
            let completedCount = 0;
            for(const booking of bookings){
                const result = await Booking.updateOne(
                    {
                        _id: booking._id,
                        checkOut: {$lt:today}
                    },
                    {
                        $set: {status: "completed"}
                    }
                );
                if(result.modifiedCount === 1){
                    
                }
            }
        } catch(err) {
            console.log("Booking scheduler error:",err);
        }
    });
};

module.exports = startBookingSchedular;