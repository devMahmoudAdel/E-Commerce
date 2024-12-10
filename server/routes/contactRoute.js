const express = require("express");
const router = express.Router();

router.route("call/create").post;
router.route("write/create").post;

router.route("call/edit/:id").post;
router.route("write/edit/:id").post;

router.route("call/delete/:id").get;
router.route("write/delete/:id").get;

module.exports = router;
