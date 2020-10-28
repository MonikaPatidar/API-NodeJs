//Import express module
const express=require("express");               
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const cors=require("cors");

//import files from routes and save it to variable
const postrouter= require("./Routes/post")    
// const PhotoRoutes=require("./routes/photo");        
// const CommentRoutes=require("./routes/comment");    
// const TodoRoutes=require("./routes/todo");          

const app=express();


//Connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/post',{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify: false 
})
.then(()=>{
    console.log("DB connected");
})


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//add middleware used by routes
app.use("/api",postrouter);


//create node server at 8000 port
const port=process.env.PORT||8000;
app.listen(port,()=> console.log(`server is running on ${port} !`));    