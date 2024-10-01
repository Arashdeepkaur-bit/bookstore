const express=require("express");
const app=express();
const mongoose=require("mangoose");
const dotenv= require("dotenv")
dotenv.config();
const bookroute=
require("./routes/bookroute");
const {book}=require("./models/bookmodels")
mangoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("connected to mongodbb")).catch(err=>console.log(err));
app.use(express.json());
app.use("/api/user",bookroutr);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>
console.log(`server is listening on PORT ${PORT}`));

