const Order = require("./../models/OrdersModel");
const asynsErrorHandler = require("../utils/asynsErrorHandler");
const Address = require("./../models/AddressModel");
const AddressModel = require("./../models/AddressModel");
exports.createOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const products = req.body.products;
  const newOrder = new Order(req.body);

  const adressID = req.body.deliveryAddress;
  const adress = await Address.findById(adressID);
  if (!products) {
    return res.status(400).json({ msg: "Products are required" }); // if no products are provided in the request body, return a 400 Bad Request response
  }
  newOrder.adressText =
    adress.streetName +
    ", " +
    adress.city +
    ", " +
    adress.Town +
    ", " +
    adress.apartmentFloor +
    "," +
    adress.apartmentNumber;
  newOrder.customerName = user.firstName + " " + user.lastName;
  newOrder.phoneNumber = user.phoneNumber;
  newOrder.customerId = user._id;
  newOrder.totalPrice = 0;
  products.forEach((element) => {
    newOrder.totalPrice = newOrder.totalPrice + element.totalPrice;
  });
  await newOrder.save();
  console.log(newOrder.totalPrice);
  res.status(201).json({ data: newOrder });
});

exports.getOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;

  const order = await Order.findById(req.params.id);
  if (user._id.toString() !== order.customerId.toString())
    return res.status(403).json({ msg: "Unauthorized" });
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.changeStatus = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.returnOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  if (
    Date.now() >= new Date(order.returnMaxTime).getTime() ||
    order.returnMaxTime == null
  ) {
    console.log(
      Date.now(),
      new Date(order.returnMaxTime).getTime(),
      order.returnMaxTime
    );
    return res.status(400).json({ msg: "Return request time exceeded" });
  }
  if (!order) return res.status(404).json({ msg: "Order not found" });
  console.log(!order.status == "Delivered");
  if (!(order.status == "Delivered")) {
    return res.status(400).json({ msg: "Order must be delivered first" });
  }
  if (user._id.toString() !== order.customerId.toString())
    return res.status(403).json({ msg: "Unauthorized" });

  if (!req.body.products) {
    return res.status(400).json({ msg: "Products are required" });
  }
  req.body.products.forEach((element) => {
    const p = order.products.find((e) => {
      return (
        e.product.toString() == element.product.toString() &&
        e.quantity >= element.quantity
      );
    });

    if (!p || p == null) {
      return res.status(400).json({ msg: "there is an error in returning " });
    }
  });

  order.isReturn = true;
  order.returnRequestDate = Date.now();
  order.returnRequestStatus = "Pending";
  order.returnedProduct = req.body.products;
  order.returnMaxTime = null;
  order.EditMaxTime = null;
  order.status = "returning";
  await order.save();
  res.status(200).json({ data: order });
});

exports.cancelReturn = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  if (user._id.toString() !== order.customerId.toString())
    return res.status(403).json({ msg: "Unauthorized" });
  if (!order.isReturn) {
    return res.status(400).json({ msg: "there is no Return request" });
  }
  if (order.returnRequestStatus == "Canceled") {
    return res.status(400).json({ msg: "Return request is already canceled" });
  }
  if (!order.status == "returning") {
    return res
      .status(400)
      .json({ msg: "Return request must be in returning state" });
  }
  if (!order) return res.status(404).json({ msg: "Order not found" });

  order.isReturn = false;
  order.returnRequestStatus = "Canceled";
  order.returnedProduct = [];
  order.returnMaxTime = null;
  order.status = "canceled";
  order.EditMaxTime = null;
  order.deliveryStatus = "Delivered";

  await order.save();
  res.status(200).json({ data: order });
});

exports.cancelOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  if (user._id.toString() !== order.customerId.toString())
    return res.status(403).json({ msg: "Unauthorized" });
  if (!order) return res.status(404).json({ msg: "Order not found" });
  if (!order.status === "Pending") {
    return res.status(400).json({ msg: "Order must be in pending state" });
  }

  order.canceledDate = Date.now();
  order.status = "canceled";
  order.deliveryStatus = "Cancelled";
  order.returnMaxTime = null;
  order.EditMaxTime = null;

  await order.save();

  res.status(200).json({ data: order });
});

exports.editOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  if (user._id.toString() !== order.customerId.toString()) {
    return res.status(403).json({ msg: "Unauthorized" });
  }
  if (
    Date.now() >= new Date(order.EditMaxTime).getTime() ||
    order.EditMaxTime == null
  ) {
    return res.status(400).json({ msg: "Edit request time exceeded" });
  }
  if (!order) return res.status(404).json({ msg: "Order not found" });
  if (!order.status === "Pending") {
    return res.status(400).json({ msg: "Order must be in pending state" });
  }

  order.products = req.body.products;
  order.totalPrice = 0;
  req.body.products.forEach((element) => {
    order.totalPrice = order.totalPrice + element.totalPrice;
  });

  await order.save();
  res.status(200).json({ data: order });
});

exports.changeDeliveryNumber = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { deliveryPhoneNumber: req.body.deliveryPhoneNumber },
    { new: true }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.changeAdress = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ msg: "Order not found" });
  if (user._id.toString() !== order.customerId.toString()) {
    return res.status(403).json({ msg: "Unauthorized" });
  }
  if (
    Date.now() >= new Date(order.EditMaxTime).getTime() ||
    order.EditMaxTime == null
  ) {
    return res.status(400).json({ msg: "Edit request time exceeded" });
  }
  order.deliveryAddress = req.body.adressID;
  const adress = AddressModel.findById(req.body.adressID);

  order.adressText =
    adress.streetName +
    ", " +
    adress.city +
    ", " +
    adress.Town +
    ", " +
    adress.apartmentFloor +
    "," +
    adress.apartmentNumber;

  await order.save();

  res.status(200).json({ data: order });
});

exports.getAllOrders = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const orders = await Order.find({ customerId: user._id });
  res.status(200).json({ data: orders });
});

exports.getAdminOrders = asynsErrorHandler(async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({ data: orders });
});
