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
            )
        }
    });
}