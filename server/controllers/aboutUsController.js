const AboutUs = require("./../models/AboutUsModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
exports.create = asyncErrorHandler(async (req, res, next) => {
  const newAboutUs = new AboutUs(req.body);
  await newAboutUs.save();
  res
    .status(201)
    .json({ msg: "About Us created successfully", data: newAboutUs });
});

exports.editAbout = asyncErrorHandler(async (req, res, next) => {
  const aboutUs = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!aboutUs) return res.status(404).json({ msg: "About Us not found" });
  res.status(200).json({ data: aboutUs });
});
