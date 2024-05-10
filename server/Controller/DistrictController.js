const DistrictModel = require('../Model/DistrictModel')
const validateMongoDbId = require("../Utils/validateMongodbId");
// Create a new district

// exports.createDistrict=async(req,res,next)=>{
// try {

// const{District}=req.body
// const findDistrict=await DistrictModel.findOne({District})
// if(findDistrict){
//     return res.status(400).json({message:"District already exists"})
// }
// const district=new DistrictModel({
//     District
// })
// const newDistrict=await district.save()
// res.status(201).json(newDistrict)
// }catch(error){
//     next(error)

// }
// }

exports.createDistrict = async (req, res, next) => {
    const districtNamesToAdd =
        [
            "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
            "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong",
            "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas",
            "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur",
            "Purulia", "South 24 Parganas", "Uttar Dinajpur"
        ]
    try {
        const districts = await DistrictModel.insertMany(districtNamesToAdd.map(name => ({ District: name })));
        res.status(201).json(districts);
    } catch (error) {
        next(error);
    }
};




// Get all districts

exports.getAllDistricts = async (req, res, next) => {
    try {
        const districts = await DistrictModel.find()
        if (!districts) {
            return res.status(404).json({ message: "Districts not found" })
        }
        res.status(200).json(districts)
    } catch (error) {
        next(error)

    }
}

// Get district by ID

exports.getDistrictById = async (req, res, next) => {
    try {
        if (!validateMongoDbId(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }
        const district = await DistrictModel.findById(req.params.id)
        if (!district) {
            return res.status(404).json({ message: "District not found" })
        }
        res.status(200).json(district)
    } catch (error) {
        next(error)
    }
}
