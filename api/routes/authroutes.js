const express=require("express")
const router=express.Router()
const {signin}=require("../controllers/authcontrollers")
router.post("/signin",signin)
module.exports=router