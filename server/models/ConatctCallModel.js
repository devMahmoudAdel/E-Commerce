const mongoose = require("mongoose");  
const Schema = mongoose.Schema;  
const contactCallschema = new Schema({  
    Heading: {  
        type: String,  
        required: true,  
        trim: true  
    },  
    Descriptions: {  
        type: String,  
        required: true  
    },  
    Phone: 
        {  
            type: String,  
            required: true,  
            trim: true  
        }  
     
});  
module.exports = mongoose.model('ContactCall', contactCallschema);