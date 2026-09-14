const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");

router.route("/listings/:id/book")
.post(wrapAsync(bookingController.createBooking));

module.exports=router;