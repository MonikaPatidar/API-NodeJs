//import model file
const Post= require("../model/Post");

//debugging
console.log("post Controller")

//export create API
exports.createpost =  (req,res) => {
    //add enterd data into body variable
        let body = req.body;
        console.log(body)
    //creating object of Album   
        let post = new Post(body);
    //saving data to album schema    
        post.save().then((post) => {            //.then will execute code if condition gets true
        res.send({
        notice: 'successfully created the post'
        })
        }).catch((err) => {                         //catch will execute when condition gets false
        res.send(err);
        });
        };

// //export get API        
exports.getallpost=(req,res)=>{
    console.log("get API");
    Post.find().then(data=>       //.find()is used for searching
        {
            res.json({data:data});
        }).catch(err=> {
            res.json({
                message:"something wrong" +err
            });
        })
}

//export update API
exports.updateallpost=(req,res)=>{
    console.log('Update API is running');
    id=req.params.userId;    
    console.log(id);       //parameter used for input in router
    data=req.body;
    console.log(data);    
    Post.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {
        res.json({
        success:true,
        message:"done"
    })
    }).catch(err=>{
        res.json(err);
    })
}

// exports.updateallpost = (req,res)=>{
//     console.log('Update API is running')
    
//     Post.findByIdAndUpdate(req.params.id ,{
        
//         // userId:req.body.userId,
//         id : req.body.Id,
//         title:req.body.title,
//         body:req.body.body,
//     },{new:true})
    
//     .then(data=>{
//         if(!data){
//             res.status(400).json({
//                 message : 'Not found data'
//             })
//         }
//     })
//     console.log(id);
//     console.log(title);
//     console.log(body);
// }


//export delete API
exports.deleteallpost=(req,res)=>{
   
    id=req.params.id;
    console.log(id);
    

    Post.findByIdAndRemove(id).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    }).catch(err=>
        res.json({
            message:"wrong"
        })
    )
    }
