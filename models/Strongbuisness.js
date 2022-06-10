const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BuisnessSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phoneno: {
        type: Number,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
   
    },
    address: {
        type: String,
        required: true,
    },
   message: {
        type: String,
        
    },
    
});

module.exports = mongoose.model("Buisness", BuisnessSchema);
