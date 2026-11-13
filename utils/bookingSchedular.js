const cron = require("node-cron");
const Booking = require("../models/booking");

const startBookingSchedular = ()=>{
    cron.schedule ("5 0 * * *", async ()=>{
        try {
            const today = new Date();
            today.setHours(0,0,0,0);

            const result = await Booking.updateMany(
                {
                    status:"confirmed",
                    checkOut: {$lt:today}
                },
                {
                    $set: {status: "completed"}
                }
            );
            console.log(`${result.modifiedCount} bookings automatically completed.`);
        } catch(err) {
            console.log("Booking scheduler error:",err);
        }
    });
};

module.exports = startBookingSchedular;