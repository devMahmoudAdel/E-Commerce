const express = require("express");
const router = express.Router();

const Owner = require("../models/OwnersModel");
const userController = require("../controllers/UserController");
const OwnerController = require("../controllers/OwnerController");
router.route("/createOwner").post; //OMAR
router.route("/Edit/:id").patch(userController.protect, OwnerController.Edit); //OMAR
router
  .route("/Delete/:id")
  .post(userController.protect, OwnerController.Delete);
module.exports = router;
