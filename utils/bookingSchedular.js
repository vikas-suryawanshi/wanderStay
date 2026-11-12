const Booking = require("../models/booking");

const startBookingSchedular = ()=>{
    cron.schedule ("5 0 * * *",async ()=>{
        try {
            const today = new Date();
        }
    })
}