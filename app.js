const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv= require("dotenv")
dotenv.config();
const bookroute=require("./routes/bookroute");
const {Book}=require("./models/bookmodels")
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("connected to mongodbb")).catch(err=>console.log(err));
app.use(express.json());
app.use("/api/users",bookroute);
const PORT=process.env.PORT||500;
app.listen(PORT,()=>
console.log(`server is listening on PORT ${PORT}`));

