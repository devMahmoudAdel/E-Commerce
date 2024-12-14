const express = require("express");
const router = express.Router();
const productcontroller = require("./../controllers/productcontroller");
const usercontroller = require("../controllers/UserController");

router.route("/createProduct").post; //OMAR
router.route("/Edit/:id").patch; //AHMED
router.route("/Delete/:id").delete; //AHMED
router.route("/get/:id").get; //OMAR
router.route("getAll").get; //AHMED
router.route("getByCategory/:category").get(productcontroller.getByCategory); //NOOR
router
  .route("editInverntoryStock/:id")
  .patch(
    usercontroller.protect,
    usercontroller.isAdmin,
    productcontroller.editInverntoryStock
  ); //NOOR
module.exports = router;
