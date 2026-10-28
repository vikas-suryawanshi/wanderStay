const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");
const notificationController = require("../controllers/notification.js");

router.route("/notifications")
.get(isLoggedIn,WrapAsync(notificationController.getNotifications));

module.exports = router;