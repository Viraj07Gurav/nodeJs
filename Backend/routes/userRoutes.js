const express=require("express");
const router=express.Router();
const {getUser,addUser}=require("../controller/userController");
router.get("/users",getUser);

router.post("/addUser",addUser);

module.exports=router;