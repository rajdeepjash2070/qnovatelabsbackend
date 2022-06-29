const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstname: {
        type: String,
        
    },
    pname: {
        type: String,
        
    },
    contactnumber: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
   
    course: {
        type: String,
       
    },
    coursemode: {
        type: String,
   
    },
    age: {
        type: String,
        
    },
    yclass: {
        type: String,
        
    },
    schoolcollegename: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    pincode: {
        type: String,
        
    },
    address: {
        type: String,
        
    },

});

module.exports = mongoose.model("Student", StudentSchema);
