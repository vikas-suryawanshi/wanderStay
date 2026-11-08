const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");
const notificationController = require("../controllers/notification.js");

router.route("/notifications")
.get(isLoggedIn,wrapAsync(notificationController.getNotifications));

router.route("/notifications/:id/read")
.post(isLoggedIn,wrapAsync(notificationController.markAsRead));

router.route("/notifications/:id/markAllRead")
module.exports = router;