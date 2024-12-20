const express = require("express");
const router = express.Router();
const productcontroller = require("./../controllers/productcontroller");
const usercontroller = require("../controllers/UserController");
const multer = require("multer");
const UtiilsController = require("./../controllers/UtiilsController");
const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
let upload = multer({
  storage,
});
router
  .route("/createProduct")
  .post(
    upload.single("picture"),
    UtiilsController.checkImage,
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    productcontroller.createProduct
  );
router
  .route("/Edit/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    productcontroller.editProduct
  ); //AHMED
router
  .route("/Delete/:id")
  .delete(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    productcontroller.deleteProduct
  ); //AHMED
router.route("/get/:id").get(productcontroller.getproduct); //OMAR
router.route("/getAll").get(productcontroller.getAllproduct); //AHMED

router.route("/getByCategory/:category").get(productcontroller.getByCategory); //NOOR
router
  .route("/editInverntoryStock/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    productcontroller.editInverntoryStock
  ); //NOOR

router
  .route("/setReview/:id")
  .patch(usercontroller.protect, productcontroller.setReview); //

router
  .route("/editReview/:id")
  .patch(usercontroller.protect, productcontroller.editReview); //
module.exports = router;

router
  .route("/deleteReview/:id")
  .patch(usercontroller.protect, productcontroller.deleteReview);

router.route("/getTopRatedProducts").get(productcontroller.getTopRatedProducts);
