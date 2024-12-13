const express = require("express");
const router = express.Router();

router.route("/createOrder").post; //NOOR
router.route("/getOrder/:id").get; //NOOR
router.route("/getStatus").get; //NOOR
router.route("/changeStatus/:id").post; //NOOR
router.route("/returnOrder/:id").get; //NOOR
router.route("/cancelOrder/:id").get; //NOOR
router.route("/changeDeliveryNumber/:id").post; //NOOR
router.route("/EditOrder/:id").post; //NOOR
router.route("/changeAdress/:id").post; //NOOR

module.exports = router;
