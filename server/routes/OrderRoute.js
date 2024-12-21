// don't edit or active any thing
const express = require("express");
const router = express.Router();
const OrderController = require("./../controllers/OrderController");
const UserController = require("./../controllers/UserController");
router
  .route("/createOrder")
  .post(UserController.protect, OrderController.createOrder);
router
  .route("/getOrder/:id")
  .get(UserController.protect, OrderController.getOrder);
router
  .route("/changeStatus/:id")
  .patch(
    UserController.protect,
    UserController.isAdminforInteriorUse,
    OrderController.changeStatus
  );
router
  .route("/returnOrder/:id")
  .patch(UserController.protect, OrderController.returnOrder); //NOOR
router
  .route("/cancelOrder/:id")
  .patch(UserController.protect, OrderController.cancelOrder); //NOOR
router
  .route("/cancelReturn/:id")
  .patch(UserController.protect, OrderController.cancelReturn); //NOOR

router
  .route("/changeDeliveryNumber/:id")
  .patch(
    UserController.protect,
    UserController.isAdminforInteriorUse,
    OrderController.changeDeliveryNumber
  ); //NOOR
router
  .route("/EditOrder/:id")
  .patch(UserController.protect, OrderController.editOrder); //NOOR
router
  .route("/changeAdress/:id")
  .patch(UserController.protect, OrderController.changeAdress); //NOOR

router
  .route("/getAllOredrsForMe")
  .get(UserController.protect, OrderController.getAllOrders);

router
  .route("/getAllOredrsForAdmin")
  .get(
    UserController.protect,
    UserController.isAdminforInteriorUse,
    OrderController.getAdminOrders
  );
module.exports = router;
