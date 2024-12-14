const express = require("express");
const usercontroller = require("../controllers/UserController");
// controller import
const router = express.Router();
router.route("/register").post(usercontroller.register); //noor
router.route("/get/:id").get(); //OMAR
router.route("/login").post(usercontroller.login); //noor

router.route("/resetpassword/:token").patch(usercontroller.resetPassword); //noor
router.route("/forgotpassword").patch(usercontroller.forgotPassword); //noor

router.route("/edit/:id").patch(); //AHEMD
router.route("/delete/:id").patch(); // مش هنمسح احنا هنعمل active false بس   //AHMED
router
  .route("/changePassword")
  .patch(usercontroller.protect, usercontroller.changePassword); //NOOR
router
  .route("/addTocart")
  .post(usercontroller.protect, usercontroller.addToCart); //noor
router
  .route("/getAllOrders")
  .get(usercontroller.protect, usercontroller.getAllOrders); //noor
router.route("/getCart").get; //OMAR
router.route("/addtoWishList").post; //AHMED
router.route("/getwishList").get; //OMAR
router.route("/AddMoneyToWallet").patch; //OMAR
router.route("/getAllAdress").get; //AHMED

router.route("/changeUserToAdmin/id").patch(usercontroller.changeUserToAdmin); //NOOR
router.route("/getAllAdmins").get(); //AHMED

module.exports = router;
