const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/listings/:id/book")
.get(isLoggedIn,wrapAsync(bookingController.getBookingForm))
.post(isLoggedIn,wrapAsync(bookingController.createBooking));

router.route("/bookings")
.get(isLoggedIn,wrapAsync(bookingController.myBookings));

router.route("/bookings/:id")
.get(isLoggedIn,wrapAsync(bookingController.showBooking));
module.exports=router;