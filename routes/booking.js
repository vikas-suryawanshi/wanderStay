const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");

router.route("/listings/:id/book")
.get(wrapAsync(bookingController.getBookingForm))
.post(wrapAsync(bookingController.createBooking));

router.route("/bookings")
.get(wrapAsync(bookingController.myBookings));

module.exports=router;