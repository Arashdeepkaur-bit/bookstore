const mongoose=require("mongoose");
const bookschema=new mongoose.Schema({
   
    name:String,
    title:String,
    author:String,

});
module.exports=mongoose.model("Book",bookschema);