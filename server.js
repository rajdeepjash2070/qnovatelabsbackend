
const express=require("express");
const mongoose= require("mongoose");
const app=express();
const cors = require("cors");
const router=require("./routes/student-routes");
app.use(express.json());
app.use(cors());
app.use("/bookyourfreesessionbackend", router);
const buisnessrouter=require("./routes/buisness-routes");
app.use("/strongbuisness", buisnessrouter);
const DB="mongodb+srv://admin2001:admin2001@cluster0.hpcs5if.mongodb.net/StudentData?retryWrites=true&w=majority";
//mongodb+srv://rajdeepjash2070:<password>@cluster0.nwezf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log('connection successful to database');
}).catch(error=>{
 console.log('Error:',error.message);
})


const PORT=process.env.PORT || 8000;



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})