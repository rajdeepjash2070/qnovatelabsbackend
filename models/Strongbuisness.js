const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BuisnessSchema = new Schema({
    fname: {
        type: String,
       
    },
    lname: {
        type: String,
       
    },
    phoneno: {
        type: Number,
       
    },
    emailid: {
        type: String,
       
    },
    city: {
        type: String,
       
    },
    pincode: {
        type: Number,
       
    },
    purpose: {
        type: String,
   
    },
    address: {
        type: String,
       
    },
   message: {
        type: String,
        
    },
    
});

module.exports = mongoose.model("Buisness", BuisnessSchema);
