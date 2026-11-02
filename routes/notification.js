const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");
const notificationController = require("../controllers/notification.js");

router.route("/notifications")
.get(isLoggedIn,wrapAsyncrapAsync(notificationController.getNotifications));


module.exports = router;