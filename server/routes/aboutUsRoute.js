const express = require("express");
const router = express.Router();
const aboutUs = require("./../controllers/aboutUsController");
const UserController = require("./../controllers/UserController");
router
  .route("/CreateAbout")
  .post(
    UserController.protect,
    UserController.isAdminforInteriorUse,
    aboutUs.create
  ); //AHMED
router
  .route("/EditAbout/:id")
  .post(
    UserController.protect,
    UserController.isAdminforInteriorUse,
    aboutUs.editAbout
  ); //OMAR

module.exports = router;
