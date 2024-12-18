const express = require("express");
const usercontroller = require("../controllers/UserController");
const { route } = require("./OrderRoute");
// controller import
const router = express.Router();
router.route("/register").post(usercontroller.register);
router
  .route("/get/:id")
  .get(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.getUser
  );

router.route("/getMe").get(usercontroller.protect, usercontroller.getMe);

router.route("/login").post(usercontroller.isActive, usercontroller.login);

router.route("/resetpassword/:token").patch(usercontroller.resetPassword);

router
  .route("/forgotpassword")
  .patch(usercontroller.isActive, usercontroller.forgotPassword);

router
  .route("/edit")
  .patch(usercontroller.protect, usercontroller.updateUserDetails);
router
  .route("/delete")
  .patch(usercontroller.protect, usercontroller.deleteUser);

router
  .route("/changePassword")
  .patch(usercontroller.protect, usercontroller.changePassword);

router
  .route("/getAllOrders")
  .get(usercontroller.protect, usercontroller.getAllOrders);

router.route("/getCart").get(usercontroller.protect, usercontroller.getCart);
router
  .route("/changeUserToAdmin/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.changeUserToAdmin
  );
router
  .route("/changeAdminToUser/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.changeAdminToUser
  );
router.route("/isAdmin").get(usercontroller.protect, usercontroller.isAdmin);
router
  .route("/getwishList")
  .get(usercontroller.protect, usercontroller.getwishList);
router
  .route("/AddMoneyToWallet/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.AddMoneyToWallet
  );
router
  .route("/getMoneyInWallet")
  .get(usercontroller.protect, usercontroller.getMoneyInWallet);
router
  .route("/getAllAdressForMe")
  .get(usercontroller.protect, usercontroller.getAllAdressForMe);
router
  .route("/getAllAdressForUser/:id")
  .get(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.getAllAdressForUser
  );
router
  .route("/getAllAdress")
  .get(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.getAllAdress
  );
router
  .route("/getAllAdmins")
  .get(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.getAllAdmins
  );

router
  .route("/addtoWishList/:id")
  .post(usercontroller.protect, usercontroller.addToWishList); //need a product
router
  .route("/addTocart/:id")
  .post(usercontroller.protect, usercontroller.addToCart); //need a product

router
  .route("/DeleteFormWishList/:id")
  .post(usercontroller.protect, usercontroller.DeleteFormWishList); //need a product

router
  .route("/deleteFromCart/:id")
  .post(usercontroller.protect, usercontroller.DeleteFromCart); //need a product

router
  .route("/edit/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.updateUserDetailsForUser
  );
router
  .route("/delete/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.deleteUserForUser
  );
router
  .route("/reActive/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    usercontroller.reActiveUserForUser
  );

module.exports = router;
