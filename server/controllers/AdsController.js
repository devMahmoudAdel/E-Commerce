const AdsFornav = require("../models/AdsFornavModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
exports.editAd = asyncErrorHandler(async(req,res , next)=> {
        const { productId, name, expireDate, isActive } = req.body;
        const updateData = { productId, name, expireDate, isActive };
        const updatedAd = await AdsFornav.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedAd) {
            return res.status(404).json({ error: "Ad not found" });
        }
        res.status(200).json({message : "add updated successfully" , data : updatedAd});

}); //OMAR
exports.changeActivation = asyncErrorHandler(async(req , res , next)=>{
    const isActive = req.body;
    const findadd = await AdsFornav.findById(req.params.id);
    if(!findadd){
      return res.status(400).json({error : "the add is not found"});
    }
    findadd.isActive = isActive;
    updatedadd = await findadd.save();
    res.status(200).json({message : "the add activation is now modified" , data : updatedadd});

})//OMAR
