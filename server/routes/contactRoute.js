const express = require("express");
const router = express.Router();

router.route("call/create").post; //AHEMD
router.route("write/create").post; //OMAR

router.route("call/edit/:id").patch; //AHEMD
router.route("write/edit/:id").patch; //OMAR

router.route("call/delete/:id").get; //AHEMD
router.route("write/delete/:id").get; //OMAR

module.exports = router;
