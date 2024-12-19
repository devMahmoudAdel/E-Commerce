const express = require("express");
const router = express.Router();

const Message = require("../models/MessagesModel");
const nodemailer = require("nodemailer");
const messagecontroller = require("../controllers/MessageController");
const userController = require("../controllers/UserController");
router
  .route("/createMessage")
  .post(userController.protect, messagecontroller.createMessage); //OMAR
router.route("/response/:id").post(messagecontroller.responsemessage);
module.exports = router;
