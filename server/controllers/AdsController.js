const Ads = require("./../models/AdsFornavModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const cloudinary = require("cloudinary").v2;
exports.createAd = asyncErrorHandler(async (req, res, next) => {
  let uploadedFile = await cloudinary.uploader.upload(req.file.path, {
    folder: "AdsImages",
    resource_type: "image",
  });
  const { productId, name, expireDate, isActive } = req.body;
  const { originalName } = req.file;
  const { secure_url, bytes, format } = uploadedFile;
  if (!picture || !productId || !expireDate || !name) {
    return res.status(400).json({
      error: "picture  , productId , name ,expireDate are requierd fields",
    });
  }
  const newadd = new Ads({
    picture,
    productId,
    name,
    expireDate,
    isActive: isActive ?? false,
  });
  newadd.picture = {
    secure_url,
    bytes,
    format,
    originalName,
  };
  await newadd.save();
  res.status(201).json({ data: newadd });
});
exports.editAd = asyncErrorHandler(async (req, res, next) => {
  const { productId, name, expireDate, isActive } = req.body;
  const updateData = { productId, name, expireDate, isActive };
  const updatedAd = await AdsFornav.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  );
  if (!updatedAd) {
    return res.status(404).json({ error: "Ad not found" });
  }
  res
    .status(200)
    .json({ message: "add updated successfully", data: updatedAd });
}); //OMAR
exports.changeActivation = asyncErrorHandler(async (req, res, next) => {
  const isActive = req.body;
  const findadd = await AdsFornav.findById(req.params.id);
  if (!findadd) {
    return res.status(400).json({ error: "the add is not found" });
  }
  findadd.isActive = isActive;
  updatedadd = await findadd.save();
  res
    .status(200)
    .json({ message: "the add activation is now modified", data: updatedadd });
}); //OMAR
