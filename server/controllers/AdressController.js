const Adress = require("./../models/AddressModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");

exports.createAdress = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const newAdress = await new Adress(req.body);
  newAdress.userId = user._id;
  newAdress.fullName = user.firstName + " " + user.lastName;
  await newAdress.save();
  res.status(201).json({ data: newAdress });
});

exports.editAdress = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const adress = await Adress.findById(req.params.id);
  if (adress.userId.toString() != user._id.toString()) {
    return res
      .status(403)
      .json({ msg: "You are not authorized to edit this adress" });
  }
  if (!adress) return res.status(404).json({ msg: "Adress not found" });
  await adress.updateOne(req.body);
  await adress.save();
  res.status(200).json({ data: adress });
});

exports.deleteAdress = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;

  const adress = await Adress.findById(req.params.id);
  if (adress.userId.toString() != user._id.toString()) {
    return res
      .status(403)
      .json({ msg: "You are not authorized to edit this adress" });
  }

  if (!adress) return res.status(404).json({ msg: "Adress not found" });
  await adress.deleteOne();
  res.status(200).json({ msg: "Adress deleted successfully" });
});

exports.getAdress = asyncErrorHandler(async (req, res, next) => {
  const user = req.user;
  const adress = await Adress.findById(req.params.id);
  if (adress.userId.toString() !== user._id.toString()) {
    return res
      .status(403)
      .json({ msg: "You are not authorized to view this adress" });
  }
  if (!adress) return res.status(404).json({ msg: "Adress not found" });
  res.json({ data: adress });
});
