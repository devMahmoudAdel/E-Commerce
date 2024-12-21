const Owner = require("../models/OwnersModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
exports.Edit = asyncErrorHandler(async(req, res, next)=>{    const updatedowner = Owner.findByIdAndUpdate(req.params.id , req.body , {
        new : true,
        runValidators : true
    });
    if(!updatedowner){
       return res.status(400).json({error : "Owner is not found "});
    }
    res.status(200).json({message : "Owner editid successfully" , data : updatedowner});
});
exports.Delete = asyncErrorHandler(async(req, res, next)=>{
    const deletedowner = await Owner.findOneAndDelete(req.params.id);
    if(!deletedowner){
       return res.status(404).json({error : "Owner is not found "})
    }
    res.status(200).json({message : "Owner deleted successfully" , data : deletedowner});
}); //OMAR