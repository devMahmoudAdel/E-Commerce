const express = require("express");
const router = express.Router();

router.route("/createAdress").post(); //OMAR
router.route("/editAdress/:id").post(); //AHMED
router.route("/DeleteAdress/:id").get(); //OMAR

module.exports = router;
