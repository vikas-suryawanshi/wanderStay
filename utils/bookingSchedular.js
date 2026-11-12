const Booking = require("../models/booking");

const startBookingSchedular = ()=>{
    cron.schedule ("5 0 * * *", async ()=>{
        try {
            const today = new Date();
            today.setHours(0,0,0,0);

            const result = await Booking.updateMany(
                {
                    status:"confirmed",
                    checkOut: {$it: today}
                },
                {
                    $set: {status: "completed"}
                }
            );
            console.log(`${result.modifieldCount} bookings automatically completed.`);
        } catch(err) {
            console.log("Booking scheduler error:",err);
        }
    });
};