const User = require("../models/UserModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const jwt = require("jsonwebtoken");
const util = require("util");
const sendEmail = require("./../utils/email");
const crypto = require("crypto");
const Cart = require("../models/CartModel");
const Order = require("../models/OrdersModel");
const Product = require("../models/BroductsModel");
const Address = require("../models/AddressModel");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

exports.register = asyncErrorHandler(async (req, res, next) => {
  // 1. check if user already exist
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ msg: "User already exists" });

  // 2. Create a new user
  const newUser = await User.create(req.body);
  const token = signToken(newUser._id);

  // 5. Return json response
  res
    .status(201)
    .cookie("jwt", token)
    .json({ data: newUser, msg: "User registered successfully" });
});

exports.login = asyncErrorHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide email and password" });
  }
  // 1. check if user already exist
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  if (!user) return res.status(400).json({ msg: "User not found" });
  console.log(user);
  if (
    !user ||
    user.status === "inactive" ||
    !(await user.comparePasswordInDB(req.body.password, user.password))
  ) {
    return res.status(401).json({ msg: "Invalid email or password" });
  }
  const token = signToken(user._id);
  // 4. Return json response
  res
    .status(200)
    .cookie("jwt", token)
    .json({ data: user, msg: "User logged in successfully" });
});

exports.deleteUser = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;

  user.isActive = false;
  await user.save();
  res
    .cookie("jwt", "inactived")
    .status(200)
    .json({ user: user, msg: "User has been successfully deactivated." });
});
exports.isActive = asyncErrorHandler(async (req, res, next) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ msg: "User not found" });
    if (!user.isActive) {
      return res.status(403).json({ msg: "Account is inactive" });
    }
  } else if (req.user) {
    const user = req.user;
    if (!user.isActive) {
      return res.status(403).json({ msg: "Account is inactive" });
    }
  }

  next();
});
exports.getUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json({ data: user });
});
exports.updateUserDetails = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;

  const updatedUser = await User.findByIdAndUpdate(
    user._id.toString(),
    req.body
  );

  if (!updatedUser || !user)
    return res.status(404).json({ msg: "User not found" });
  res.json({ data: updatedUser });
});
exports.changePassword = asyncErrorHandler(async (req, res) => {
  const user = req.user;
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  const confirmNewPassword = req.body.confirmNewPassword;

  // 2. validate old password
  if (!user.comparePasswordInDB(OldPassword, user.password)) {
    return res.status(401).json({ msg: "Incorrect old password" });
  }

  user.password = NewPassword;
  user.confirmPassword = confirmNewPassword;
  user.passwordChangedAt = Date.now();

  await user.save({ validateBeforeSave: true });

  // 5. Return json response
  res.json({ msg: "Password changed successfully" });
});

let token;
exports.protect = asyncErrorHandler(async (req, res, next) => {
  console.log("protect entered");
  // 1. read the token & check if exist
  const testToken = req.headers.authorization;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  console.log(token);
  if (
    !token ||
    token == null ||
    token == undefined ||
    token == "undefined" ||
    token == "null"
  ) {
    res.status(401).json("you are not logged in!");
  }

  // 2. validate the token

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_STR
  );

  const user = await User.findById(decodedToken.id);

  if (!user) {
    res.status(401).json("the user with the given token does not exist");
  }

  // 4. if the Admin changeed password after the token was issued
  if (await user.isPasswordChanged(decodedToken.iat)) {
    res
      .status(401)
      .json("the password has been changed recently. please login again");
  }
  // 5. allow Admin to access route
  req.user = user;

  next();
});

exports.forgotPassword = asyncErrorHandler(async (req, res, next) => {
  // 1. get user by email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }
  // 2. generate random token
  const resetToken = user.createResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  // 3. send email with reset token
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/user/resetpassword/${resetToken}`;
  const message = `You are receiving this email because you (or someone else) has requested a password reset. Please make a PUT request to: \n\n${resetUrl}\n\nIf you did not make this request, please ignore this email and no changes will be made.`;
  await sendEmail({
    email: user.email,
    subject: "Password Reset",
    message: message,
  });
  // 4. return json response
  res.json({ msg: "Reset password email sent successfully" });
});

exports.resetPassword = asyncErrorHandler(async (req, res, next) => {
  // 1. get user by reset token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ msg: "Invalid token or expired token" });
  }
  if (!req.body.password || !req.body.confirmPassword) {
    return res
      .status(400)
      .json({ msg: "Please provide a password and confirm password" });
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;

  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  await user.save({ validateBeforeSave: true });
  // // 3. send json response
  res.status(200).json({ msg: "Password reset successfully" });
});
exports.isAdminforInteriorUse = asyncErrorHandler(async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ msg: "User is not an admin" });
  }
  next();
});
exports.getMe = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({ data: user });
});
exports.isAdmin = asyncErrorHandler(async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ result: false, msg: "User is not an admin" });
  }
  res.status(200).json({ result: true, msg: "User is admin" });
});
exports.getAllOrders = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const orders = await Order.find({ customerId: user._id });
  res.status(200).json({ data: orders });
});
exports.addToCart = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: "Product not found" });
  const userCart = await Cart.findOne({ userId: user._id });
  if (!userCart) {
    const newCart = new Cart({ userId: user._id });
    await newCart.save();
    userCart = newCart;
  }

  let productArray = userCart.products;
  const existingCartItem = productArray.find(
    (item) => item.productId.toString() === req.params.id.toString()
  );
  if (existingCartItem) {
    res.status(400).json({ msg: "product already exists in cart" });
  } else {
    productArray.push({
      productId: product._id,
      quantity: req.body.quantity,
      price: product.price,
    });
    userCart.products = productArray;
    await userCart.save();
    res.status(200).json({ msg: "Product added to cart", data: userCart });
  }
});

exports.changeUserToAdmin = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isAdmin: true },
    { new: true }
  );
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "User updated as admin", data: user });
});

exports.changeAdminToUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isAdmin: false },
    { new: true }
  );
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "Admin updated To User", data: user });
});

exports.getCart = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const userCart = await Cart.findOne({ userId: user._id });
  if (!userCart) {
    const newCart = new Cart({ userId: user._id });
    await newCart.save();
    userCart = newCart;
  }
  res.status(200).json({ data: userCart });
});

exports.addToWishList = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: "Product not found" });
  console.log(user.Wishlist);
  if (user.Wishlist.includes(product._id)) {
    return res
      .status(200)
      .json({ msg: "Product already in wishlist", data: user });
  }
  user.Wishlist.push(product._id);
  await user.save();
  res.status(200).json({ msg: "Product added to wishlist", data: user });
});

exports.getwishList = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const wishList = await Product.find({ _id: { $in: user.wishList } });
  res.status(200).json({ data: wishList });
});

exports.DeleteFormWishList = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const productId = req.params.id;
  user.Wishlist = user.Wishlist.filter((id) => id.toString() !== productId);
  await user.save();
  res.status(200).json({ msg: "Product removed from wishlist", data: user });
});

exports.AddMoneyToWallet = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  if (req.body.amount <= 0) {
    return res.status(400).json({ msg: "Amount must be positive" });
  }
  if (user.wallet + req.body.amount > 100000) {
    return res.status(400).json({
      msg: "Adding this amount would exceed the maximum wallet limit",
    });
  }
  const amount = req.body.amount;
  user.walletbalance += amount;
  await user.save();
  res.status(200).json({ msg: "Money added to wallet", data: user });
});

exports.getMoneyInWallet = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "Money in wallet", data: user.walletbalance });
});

exports.getAllAdressForMe = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const adresses = await Address.find({ userId: user._id });
  res.status(200).json({ data: adresses });
});
exports.getAllAdress = asyncErrorHandler(async (req, res, next) => {
  const adresses = await Address.find();
  res.status(200).json({ data: adresses });
});
exports.getAllAdressForUser = asyncErrorHandler(async (req, res, next) => {
  const adresses = await Address.find({ userId: req.params.userId });
  res.status(200).json({ data: adresses });
});
exports.getAllAdmins = asyncErrorHandler(async (req, res, next) => {
  const admins = await User.find({ isAdmin: true });
  if (!admins) {
    return res.status(404).json({ msg: "No admins found" });
  }
  res.status(200).json({ number: admins.length, data: admins });
});

exports.DeleteFromCart = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const productId = req.params.id;
  const userCart = await Cart.findOne({ userId: user._id });
  if (!userCart) return res.status(404).json({ msg: "Cart not found" });
  if (
    !userCart.products.find((item) => item.productId.toString() === productId)
  ) {
    return res
      .status(404)
      .json({ msg: "Product not found in cart", data: userCart });
  }
  userCart.products = userCart.products.filter(
    (item) => item.productId.toString() !== productId
  );
  await userCart.save();
  res.status(200).json({ msg: "Product removed from cart", data: userCart });
});

exports.updateUserDetailsForUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "User details updated", data: user });
});

exports.deleteUserForUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "User is inactive", data: user });
});
exports.reActiveUserForUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: true },
    { new: true }
  );
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json({ msg: "User is active", data: user });
});
