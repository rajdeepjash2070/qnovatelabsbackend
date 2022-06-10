const express=require("express");
const router=express.Router();
const student=require("../models/studentdata")
const studentController = require("../controllers/studentData-controller");

router.get("/", studentController.getAllStudent);
router.post("/", studentController.addstudent);



module.exports=router;