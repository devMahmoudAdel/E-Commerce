let token;
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
exports.protect = asyncErrorHandler(async (req, res, next) => {
  console.log("protect entered");
  // 1. read the token & check if exist
  const testToken = req.headers.authorization;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    res.status(401).json("you are not logged in!");
  }

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_STR
  );

  console.log(decodedToken);

  const admin = await Admin.findById(decodedToken.id);

  if (!admin) {
    res.status(401).json("the admin with the given token does not exist");
  }

  if (await admin.isPasswordChanged(decodedToken.iat)) {
    res
      .status(401)
      .json("the password has been changed recently. please login again");
  }

  req.admin = admin;

  next();
});

exports.checkImage = asyncErrorHandler(async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ msg: "Please upload an image file" });
  }
  next();
});
