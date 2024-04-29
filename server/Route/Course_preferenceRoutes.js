const express=require('express');
const {createCourse_Preference,findAllCourse_Preferences,findOneCourse_Preference}=require('../Controller/Course_preferenceController')
const router=express.Router();

// Create a new Course_Preference

router.post('/coursepreferences',createCourse_Preference);

// Retrieve all Course_Preferences

router.get('/coursepreferences',findAllCourse_Preferences);


// Retrieve a single Course_Preference with id

router.get('/coursepreferences/:id',findOneCourse_Preference);


module.exports=router;