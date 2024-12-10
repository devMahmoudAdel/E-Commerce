const express = require("express");
const router = express.Router();

router.route("/createAdress").post();
router.route("/editAdress/:id").post();
router.route("/DeleteAdress/:id").get();

module.exports = router;
