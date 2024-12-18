const express = require("express");
const router = express.Router();
const userController = require("./../controllers/UserController");
const adressController = require("./../controllers/AdressController");
router
  .route("/createAdress")
  .post(userController.protect, adressController.createAdress);
router
  .route("/editAdress/:id")
  .patch(userController.protect, adressController.editAdress); //AHMED
router
  .route("/DeleteAdress/:id")
  .delete(userController.protect, adressController.deleteAdress); //OMAR
router
  .route("/getAdress/:id")
  .get(userController.protect, adressController.getAdress); //OMAR

module.exports = router;
