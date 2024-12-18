const Order = require("./../models/OrdersModel.js");
const asynsErrorHandler = require("../utils/asynsErrorHandler");

exports.createOrder = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const newOrder = await new Order(req.body);
  await newOrder.save();
  res.status(201).json({ data: newOrder });
});

exports.getAllOrders = asynsErrorHandler(async (req, res, next) => {
  const user = req.user;
  const orders = await Order.find({ customerId: user._id });
  res.status(200).json({ data: orders });
});

exports.getOrder = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
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
  const returnedProduct = req.body.productsId;
  if (Date.now > returnMaxTime) {
    return res.status(400).json({ msg: "Return request time exceeded" });
  }
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      isReturn: true,
      returnRequestDate: Date.now(),
      returnRequestStatus: "Pending",
      returnedProduct: returnedProduct,
    },
    { new: true }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.cancelReturn = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { isReturn: false, returnRequestStatus: "Canceled" },
    { new: true }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.cancelOrder = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { deliveryStatus: "Cancelled" },
    { new: true }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});

exports.editOrder = asynsErrorHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!order) return res.status(404).json({ msg: "Order not found" });
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
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { deliveryAddress: req.body.adressID, adressText: req.body.adress },
    {
      new: true,
    }
  );
  if (!order) return res.status(404).json({ msg: "Order not found" });
  res.status(200).json({ data: order });
});
