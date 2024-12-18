const express = require("express");
const router = express.Router();
const AdsFornav = require("../models/AdsFornavModel");
const userController = require("../controllers/UserController");
const AdsController = require("../controllers/AdsController");
router.route("/editAd/:id").post(userController.protect , AdsController.editAd) //OMAR
router.route("/changeActivation/:id").post(userController.protect , AdsController.changeActivation); //OMAR
module.exports = router;
