const express = require("express");
const router = express.Router();
const ContactCall = require("../models/ConatctCallModel");
const ContactWrite = require("../models/ConatctWriteModel");
const userController = require("../controllers/UserController");
const ContactController = require("../controllers/ContactController");
router
  .route("call/create")
  .post(userController.protect, ContactController.callcreate); //OMAR
router
  .route("write/create")
  .post(userController.protect, ContactController.writecreate); //OMAR
router
  .route("call/edit/:id")
  .patch(userController.protect, ContactController.calledit); //OMAR
router
  .route("write/edit/:id")
  .patch(userController.protect, ContactController.writeedit); //OMAR
router
  .route("call/delete/:id")
  .delete(userController.protect, ContactController.calldelete); //OMAR
router
  .route("write/delete/:id")
  .delete(userController.protect, ContactController.writedelete); //OMAR
module.exports = router;
