const express = require("express");
const router = express.router();
const wrapAsync = require("../utils/wrapAsync.js");
const hostController = require("../controllers/host.js");
const {isLoggedIn} = require("../middleware.js");