//import mongooes for connect DB
var mongoose=require("mongoose");
console.log("post schema");
//creating new schema object
var postSchema=new mongoose.Schema
(
    {
        //defining schema with attribute name
        userId:
        {
            type: String,
            maxlength:32,
            trim:true
        },
        Id:
        {
            type:String,
            maxlength:50,
            trim:true
        },
        title:
        {
            type:String,
            maxlength:50
        },
        body:
        {
            type:String,
            maxlength:90,
            trim:true
        }
    },
    {timestamps:true}
)
//export module
module.exports=mongoose.model("post", postSchema);