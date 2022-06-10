const express=require("express");
const router=express.Router();
const buisness=require("../models/Strongbuisness.js")
const buisnessController = require("../controllers/buisness-controller");

router.get("/", buisnessController.getAllBuisness);
router.post("/", buisnessController.addBuisness);



module.exports=router;