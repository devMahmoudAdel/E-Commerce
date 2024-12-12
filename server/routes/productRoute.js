const express = require("express");
const router = express.Router();

router.route("/createProduct").post; //OMAR
router.route("/Edit/:id").patch; //AHMED
router.route("/Delete/:id").delete; //AHMED
router.route("/get/:id").get; //OMAR
router.route("getAll").get; //AHMED
router.route("getByCategory/:category").get; //NOOR
router.route("editInverntoryStock/:id").patch; //NOOR
module.exports = router;
