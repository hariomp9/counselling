const mongoose=require('mongoose')
const DistrictSchema=new mongoose.Schema({
    District:{
        type:String
    }
})

const DistrictModel=mongoose.model('District',DistrictSchema)
// Compare this snippet from Counsling-backend/Counselling/server/Model/State.js:

module.exports = DistrictModel;


