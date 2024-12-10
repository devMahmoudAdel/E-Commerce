const express = require("express");
const router = express.Router();

router.route("/createProduct").post;
router.route("/Edit/:id").post;
router.route("/Delete/:id").post;
router.route("/get/:id").get;
router.route("getAll").get;
router.route("getByCategory/:category").get;
router.route("editInverntoryStock/:id").get;
module.exports = router;
