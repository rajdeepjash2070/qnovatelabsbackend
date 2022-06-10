const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    pname: {
        type: String,
        required: true,
    },
    contactnumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    course: {
        type: String,
       
    },
    coursemode: {
        type: String,
   
    },
    age: {
        type: String,
        required: true,
    },
    yclass: {
        type: String,
        
    },
    schoolcollegename: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Student", StudentSchema);
