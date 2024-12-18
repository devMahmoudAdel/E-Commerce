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
router
  .route("/get/:id")
  .get(usercontroller.protect, productcontroller.getproduct); //OMAR
router.route("/getAll").get(productcontroller.getAllproduct); //AHMED
router
  .route("/getByCategory/:category")
  .get(usercontroller.protect, productcontroller.getByCategory); //NOOR
router
  .route("/editInverntoryStock/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdminforInteriorUse,
    productcontroller.editInverntoryStock
  ); //NOOR
module.exports = router;
