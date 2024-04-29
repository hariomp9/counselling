const express=require('express')
const {CountryController , getAllCountries ,getCountryById}= require("../Controller/Country")
const router = express.Router()

// MAKE A ROUTES

router.post("/CreateCountry",CountryController)
router.get("/getAllCountries",getAllCountries)
router.get("/getCountryById/:id",getCountryById)


module.exports= router;