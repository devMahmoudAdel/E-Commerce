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

exports.setReview = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: "Product not found" });
  if (
    product.reviews.find((e) => e.userId.toString() === req.user._id.toString())
  ) {
    return res
      .status(400)
      .json({ msg: "You have already reviewed this product" });
  }
  const avgRating =
    (product.reviews.reduce((acc, curr) => acc + curr.rating, 0) +
      req.body.rating) /
    (product.reviews.length + 1);
  product.reviews.push({
    userId: req.user._id,
    comment: req.body.comment,
    rating: req.body.rating,
  });
  product.avgRating = avgRating;
  product.save();
  res.status(200).json({ data: product });
});

exports.editReview = asyncErrorHandler(async () => {
  const user = req.user;
  const Product = await Product.findById(req.params.id);
  const review = Product.reviews.find((e) => {
    return e.userId.toString() === user._id.toString();
  });
  if (!review) return res.status(404).json({ msg: "Review not found" });
  review.rating = req.body.rating;
  review.comment = req.body.comment;
  const avgRating =
    Product.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
    Product.reviews.length;
  Product.avgRating = avgRating;
  if (!Product) return res.status(404).json({ msg: "Product not found" });
  await Product.save();
  res.status(200).json({ data: Product });
});

exports.deleteReview = asyncErrorHandler(async () => {
  const user = req.user;
  const product = await Product.findById(req.params.id);
  const review = Product.reviews.find((e) => {
    return e.userId.toString() === user.id.toString();
  });
  if (!review) return res.status(404).json({ msg: "Review not found" });
  Product.reviews = Product.reviews.filter((e) => {
    return e.userId.toString() !== user.id.toString();
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });
  const avgRating =
    product.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
    product.reviews.length;
  product.avgRating = avgRating;
  await product.save();

  res.status(200).json({ data: Product });
});

exports.getTopRatedProducts = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find({}).sort({ avgRating: -1 }).limit(5);
  res.status(200).json({ data: products });
});
