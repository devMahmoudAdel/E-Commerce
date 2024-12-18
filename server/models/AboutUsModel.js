const mongoose = require("mongoose");
const AboutUsSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:false,
        default:"Our Story",
    },
    description:{
        type:[String],
        required:true,
    },
    picture:{
        type:[String],//url of each photo
        required:true,
    },
    monthlyproductsale:{
        type:Number,
        required:true,
    },
    customeractive:{
        type:Number,
        required:true,
    },
    annaualgross:{
        type:Number,
        required:true,
    },
    selleractive:{
        type:Number,
        required:true,
    },
},
  {
    timestamps: true,
  })
module.exports = mongoose.model("AboutUs", AboutUsSchema);
