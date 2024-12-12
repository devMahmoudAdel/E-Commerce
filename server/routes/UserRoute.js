const express = require("express");
// controller import
const router = express.Router();
router.route("/register").post(() => {}); //noor
router.route("/get/:id").get(); //OMAR
router.route("/login").post(); //noor
router.route("/resetpassword").patch(); //noor
router.route("/update").patch(); //AHEMD
router.route("/delete/:id").patch(); // مش هنمسح احنا هنعمل active false بس   //AHMED
router.route("/changePassword").patch; //NOOR
router.route("/addTocart").post; //noor
router.route("/getCart").get; //OMAR
router.route("/addtoWishList").post; //AHMED
router.route("/getwishList").get; //OMAR
router.route("/getAllOrders").get; //noor
router.route("/AddMoneyToWallet").patch; //OMAR
router.route("/getAllAdress").get; //AHMED
module.exports = router;
