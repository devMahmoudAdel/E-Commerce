const express = require("express");
const router = express.Router();

router.route("/createOrder").post;
router.route("/getOrder/:id").get;
router.route("/getStatus").get;
router.route("/changeStatus/:id").post;
router.route("/returnOrder/:id").get;
router.route("/cancelOrder/:id").get;
router.route("/changeDeliveryNumber/:id").post;
router.route("/EditOrder/:id").post;
router.route("/changeAdress/:id").post;

module.exports = router;
