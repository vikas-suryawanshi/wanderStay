const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const hostController = require("../controllers/host.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/host/dashboard")
.get(isLoggedIn,wrapAsync(hostController.renderHostDashboard));

module.exports = router;