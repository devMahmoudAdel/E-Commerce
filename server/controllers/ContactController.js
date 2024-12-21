const ContactCall = require("../models/ConatctCallModel");
const ContactWrite = require("../models/ConatctWriteModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
exports.callcreate = asyncErrorHandler(async(req , res , next)=>{
    const {Heading , Descriptions , Phone} = req.body;
    if(!Heading || !Descriptions || !Phone){
      return res.status(400).json({error:"All fields are required."});
    }
    const newcall = new ContactCall(
        {
            Heading ,
            Descriptions , 
            Phone
        }
    );
    const savedcall = await newcall.save();
    res.status(201).json({message : "Call record created successfully" , data:savedcall});

});
exports.writecreate = asyncErrorHandler(async(req , res , next)=>{
    const {Heading , Descriptions , Email1 , Email2} = req.body;
    if(!Heading||!Descriptions||!Email1){
        return res.status(400).json({error : "Heading, Description, and Email1 are required."});
    }
    const newwritecall = new ContactWrite(
        {
            Heading,
            Descriptions,
            Email1,
            Email2
        }
    );
    const savedwritecall = await newwritecall.save();
    res.status(201).json({message : "Write record created successfully.", data : savedwritecall});
});
exports.calledit = asyncErrorHandler(async(req , res , next)=>{
    const updatedCall = await ContactCall.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
           new : true,
           runValidators : true
        }
    );
    if(!updatedCall){
        return res.status(400).json({error : "Call record not found"});
    }
    res.status(200).json({message : "call record updated successfully." , data :updatedCall});
});
exports.writeedit = asyncErrorHandler(async(req , res , next)=>{
    const updatedwritecontact = ContactWrite.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new : true,
            runValidators : true
        }
    );
    if(!updatedwritecontact){
        return res.status(400).json({error : "write record not found"});
    }
    res.status(200).json({message : "write record updated successfully.", data:updatedwritecontact})
});
exports.calldelete = asyncErrorHandler(async(req , res , next)=>{
    const deletedcall =await ContactCall.findByIdAndDelete(req.params.id);
    if(!deletedcall){
        return res.status(404).json({error : "call contact not found"});
    }
    res.status(200).json({message:"call record deleted successfully" , data:deletedcall});
});
exports.writedelete = asyncErrorHandler(async(req , res , next)=>{
    const deletedwrite = ContactWrite.findByIdAndDelete(req.params.id);
    if(!deletedwrite){
        return res.status(404).json({error : "Write contact not found"});
    }
    res.status(200).json({message:"Write record deleted successfully." , data:deletedwrite});
}); //OMAR
