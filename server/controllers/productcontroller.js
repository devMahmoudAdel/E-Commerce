const Product = require("./../models/BroductsModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const cloudinary = require("cloudinary").v2;

exports.getByCategory = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find({ categories: req.params.category });
  res.status(200).json({ data: products });
});
exports.editInverntoryStock = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { invertoryStock: req.body.count },
    { new: true }
  );
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ data: product });
});

exports.createProduct = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  let uploadedFile = await cloudinary.uploader.upload(req.file.path, {
    folder: "productsImages",
    resource_type: "image",
  });
  const { originalName } = req.file;
  const { secure_url, bytes, format } = uploadedFile;
  const product = new Product(req.body);
  product.Admin = user._id;
  product.images = [
    {
      secure_url,
      originalName,
      bytes,
      format,
    },
  ];
  await product.save();
  res.status(201).json({ data: product });
});
exports.uploadImages = asyncErrorHandler(async (req, res, next) => {
  await cloudinary.uploader.upload(req.file.path, {
    folder: "productsImages",
    resource_type: "image",
  });
  next();
});

// exports.createProduct = asyncErrorHandler(async (req, res, next) => {});

exports.editProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ data: product });
});

exports.deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ msg: "Product deleted successfully" });
});

exports.getproduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ data: product });
});
exports.getAllproduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.find({});
  if (!product) return res.status(404).json({ msg: "Product not found" });
  res.status(200).json({ data: product });
});
