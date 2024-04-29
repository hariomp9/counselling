const express=require("express")
const {CreateState,getAllStates,getStatesByCountry} = require("../Controller/StateController")

const router = express.Router()

// Post a data
router.post("/Createstate" , CreateState)

// Get all data
router.get("/getAllStates",getAllStates)

// Get data by id
router.get("/getStatesByCountry/:id",getStatesByCountry)


module.exports = router;

// Path: Counselling/server/Route/CountryRouter.js