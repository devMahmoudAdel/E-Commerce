const express = require("express");
// controller import
const router = express.Router();
router.route("/register").post(() => {});
router.route("/get/:id").get();
router.route("/login").post();
router.route("/resetpassword").get();
router.route("/update").post();
router.route("/delete/:id").get();
router.route("/changePassword").post;
router.route("/addTocart").get;
router.route("/getAllOrders").get;
router.route("/getCart").get;
router.route("/getwishList").get;
router.route("/addtoWishList").post;
router.route("/AddMoneyToWallet").get;
router.route("/AddMoneyToWallet").get;

module.exports = router;
