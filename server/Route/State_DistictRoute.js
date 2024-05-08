const express=require("express")

const router=express.Router()

const{createState_District,getStateByDistrict}=require("../Controller/state_DistrictController")

router.post("/create",createState_District)
router.get("/:stateId",getStateByDistrict)


module.exports=router
// Compare this snippet from Counsling-backend/Counselling/server/Route/StateRoute.js:

