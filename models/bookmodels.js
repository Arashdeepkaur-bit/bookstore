const mongoose=require("mongoose");
const bookschema=new mongoose.Schema({
    title:String,
    name:StaticRange,
    author:String,

});
modules.exports=mongoose.model("Book",bookschema);