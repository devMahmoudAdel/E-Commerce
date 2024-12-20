const express = require("express");
const router = express.Router();
const AdsFornav = require("../models/AdsFornavModel");
const multer = require("multer");
const UtiilsController = require("./../controllers/UtiilsController");
const userController = require("./../controllers/UserController");
const adsControlller = require("../controllers/AdsController");
const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router
  .route("/createAds")
  .post(
    upload.single("picture"),
    UtiilsController.checkImage,
    userController.protect,
    userController.isAdminforInteriorUse,
    adsControlller.createAd
  ); //OMAR
router
  .route("/editAd/:id")
  .post(
    userController.protect,
    userController.isAdminforInteriorUse,
    adsControlller.editAd
  ); //OMAR
router
  .route("/changeActivation/:id")
  .post(
    userController.protect,
    userController.isAdminforInteriorUse,
    adsControlller.changeActivation
  ); //OMAR

module.exports = router;
