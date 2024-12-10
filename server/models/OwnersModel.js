const mongoose = require("mongoose");  
const Schema = mongoose.Schema;  
const ownersModelschema = new Schema({  
    Name : {  
        type: String,  
        required: true  
    },  
    Picture : {  
        type : String
    },  
    Job : {  
        type : String,  
        required: true  
    }  
})  
module.exports = mongoose.model('Owner', ownersModelschema);