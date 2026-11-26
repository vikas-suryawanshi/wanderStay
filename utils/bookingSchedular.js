const cron = require("node-cron");
const Booking = require("../models/booking");
const Notification = require("../models/notification.js");

const completeExpireBookings = async ()=>{
        try {
            const today = new Date();
            today.setHours(0,0,0,0);
            const bookings = await Booking.find({
                status:"confirmed", checkOut:{ $lt: today}
            }).populate("user").populate({path:"listing", populate: {path: "owner"}
            });
            let completedCount = 0;
            for(const booking of bookings){
                const result = await Booking.updateOne(
                    {
                        _id: booking._id,
                        status: "confirmed",
                        checkOut: {$lt:today}
                    },
                    {
                        $set: {status: "completed"}
                    }
                );
                if(result.modifiedCount === 1){
                    await Notification.create ([
                        {
                            recipient: booking.user._id,
                            type:"booking_update",
                            message:"Your reservation has been successfully completed. Thank you for choosing WanderStay. we hope you had a wonderful stay!",
                            link: `/bookings/${booking._id}`,
                        },
                        {
                            recipient:booking.listing.owner._id,
                            type:"booking_update",
                            message:"The reservation for your property has been successfully completed. Thank you for hosting with WanderStay!",
                            link:`/host/bookings/${booking._id}`,
                        }
                    ]);
                    completedCount++;
                }
            }
            console.log(`${completedCount} bookings automatically completed.`)
        } catch(err) {
            console.log("Booking scheduler error:",err);
        }
};

const startBookingSchedular = () =>{
    completeExpireBookings();
    cron.schedule("5 0 * * *",completeExpireBookings);
}

module.exports = startBookingSchedular;