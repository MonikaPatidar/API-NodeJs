var express = require('express');
const router=express.Router();

const{createpost,getallpost,updateallpost,deleteallpost}=require('../Controller/post');
//create API
router.post("/createpost",createpost);
router.get("/getallpost",getallpost);
router.put("/updateallpost/:id",updateallpost);
router.delete("/deleteallpost/:id",deleteallpost);
//export router
module.exports=router;