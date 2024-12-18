const Product = require("./../models/BroductsModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");

exports.getByCategory = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find({ category: req.params.category });
  res.status(200).json({ data: products });
});
exports.editInverntoryStock = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { countInInventory: req.body.count } },
    { new: true }
  );
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ data: product });
});
