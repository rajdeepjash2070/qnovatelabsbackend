const Student = require("../models/studentdata");

const getAllStudent = async (req, res, next) => {
  let students;
  try {
    students = await Student.find();
  } catch (err) {
    console.log(err);
  }

  if (!students) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ students });
};


const addstudent = async (req, res, next) => {
    const { firstname,pname,contactnumber,email,password,course,coursemode,age,yclass,schoolcollegename,city,pincode,address} = req.body;
    let students;
    try {
      students = new Student({
        firstname,
        pname,
        contactnumber,
        email,
    password,
    course,
    coursemode,
    age,
    yclass
    ,schoolcollegename,
    city,
    pincode,
    address,
        
      });
      await students.save();
    } catch (err) {
      console.log(err);
    }
    if (!students) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ students });
  };

  exports.getAllStudent = getAllStudent;
  exports.addstudent = addstudent;
