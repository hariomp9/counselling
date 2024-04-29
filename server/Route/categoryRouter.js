const express=require('express')
const {createCategory,getAllCategories,getCategoryById,getCategory} = require("../Controller/AllCategoryController")

const router =  express.Router()

// Post a data

router.post("/Category",createCategory)
router.get("/getAllCategories",getAllCategories)
router.get("/getCategoryById/:id" , getCategoryById)
router.get("/getCategory",getCategory)


module.exports = router;