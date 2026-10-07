const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const wishlistController = require("../controllers/wishlist.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/listings/:id/wishlist")
.post(isLoggedIn,wrapAsync(wishlistController.addWishlist));

router.route("/listings/:id/wishlist/remove")
.post(isLoggedIn,wrapAsync(wishlistController.removeWishlist));

router.route("/wishlist")
.get(isLoggedIn,wrapAsync(wishlistController.getWishlist));

module.exports = router;