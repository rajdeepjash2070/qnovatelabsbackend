const Buisness = require("../models/Strongbuisness.js");

const getAllBuisness = async (req, res, next) => {
  let buisnesses;
  try {
    buisnesses = await Buisness.find();
  } catch (err) {
    console.log(err);
  }

  if (!buisnesses) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ buisnesses });
};


const addBuisness = async (req, res, next) => {
    const { fname,lname,phoneno,emailid,city,pincode,purpose,address,message} = req.body;
    let buisnesses;
    try {
      buisnesses = new Buisness({
        fname,
        lname,
        phoneno,
        emailid,
        city,
        pincode,
        purpose,
        address,
        message,
      });
      await buisnesses.save();
    } catch (err) {
      console.log(err);
    }
    if (!buisnesses) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ buisnesses });
  };

  exports.getAllBuisness = getAllBuisness;
  exports.addBuisness = addBuisness;
