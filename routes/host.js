const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const hostController = require("../controllers/host.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/host/dashboard")
.get(isLoggedIn,wrapAsync(hostController.renderHostDashboard));
router.route("/host/properties")
.get(isLoggedIn,wrapAsync(hostController.renderMyPropertiesPage));

module.exports = router;