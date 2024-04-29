const express = require("express");
const {CreateState_category,getStatesByCategory,getAllStates}=require("../Controller/state_categoryController")
const router = express.Router()

// Post a data

router.post("/CreateState_category",CreateState_category)
router.get("/getStatesByCategory/:state_id",getStatesByCategory)
router.get("/getAllStates",getAllStates)

module.exports = router;