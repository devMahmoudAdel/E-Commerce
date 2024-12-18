const Messages = require("../models/MessagesModel");
const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const nodemailer = require("nodemailer");
const sendemail = require("./../utils/email");
exports.createMessage = asyncErrorHandler(async(req, res, next)=>{
const {Name , Email , Phone , message} = req.body;
        if(!Name || !Email || !Phone || !message){
            res.status(400).send("all fields are required");
        }
        const newmessage = new Message({
            Name,
            Email,
            Phone,
            message
        });
        await newmessage.save();
        res.status(201).json({message :"Message Created successfully" , data : newmessage});
});
exports.responsemessage = asyncErrorHandler(async(req, res, next)=>{
    const {id} = req.params;
    const {response} = req.body;
    if(!response){
        return res.status(400).json({error:"Response field is required"});
    }
    const updatedmessage = await Message.findByIdAndUpdate(
        id,
        {response},
        {new : true , runValidators : true}
    );
    if(!updatedmessage){
       return res.status(404).json({error:"message not found"});
    }
      await sendemail({
        email : updatedmessage.Email , 
        subject : "response for amessage" ,
        message : `Hello ${updatedmessage.Name},\n\nThank you for reaching out to us. Here's our response to your message:\n\n${response}\n\nBest regards,\nYour Team`,
      })
      res.status(200).json({
        message: "Response added successfully and email sent.",
        data: updatedmessage,
      });
}); //OMAR)
