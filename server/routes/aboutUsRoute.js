const express = require("express");
const router = express.Router();

router.route("/CreateAbout").post();
router.route("/EditAbout").post();

module.exports = router;
